import Navbar from '@/components/layout/navbar'
import FileUploader from '@/components/upload/file-uploader'
import { prepareInstructions } from '@/contants'
import { usePuterStore, usePutterAuthStore } from '@/lib/client/puter'
import { convertPdfToImage } from '@/lib/pdf-to-img'
import { type UploadFormData, validateUploadForm } from '@/lib/schemas'
import { generateUUID } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

export const meta = () => {
  return [
    { title: 'Upload | Resume Analyzer' },
    { name: 'description', content: 'AI powered resume analyzer for you to get your dream job' },
  ]
}

export default function Upload() {
  // STATE
  const { fs, kv, ai } = usePuterStore()
  const { auth } = usePutterAuthStore()
  const [isProcessing, setIsProcessing] = useState<boolean>(false)
  const [staticText, setStaticText] = useState<string>('')
  const [file, setFile] = useState<File | null>(null)
  const [formErrors, setFormErrors] = useState<string[]>([])
  const navigate = useNavigate()

  // EFFECT
  useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate('/auth?next=/upload')
    }
  }, [auth.isAuthenticated])

  // HANDLER
  const handleAnalize = async ({ file, companyName, jobTitle, jobDescription }: AnalizeParams) => {
    setIsProcessing(true)

    setStaticText('Unloading the file...')
    const uploadedFile = await fs.upload([file])

    if (!uploadedFile) return setStaticText('Failed to upload file')
    setStaticText('Converting to Image')

    const imageFile = await convertPdfToImage(file)
    if (!imageFile.file) return setStaticText('Failed to convert to image')

    setStaticText('Uploading image...')
    const uploadedImage = await fs.upload([imageFile.file])

    if (!uploadedImage) return setStaticText('Failed to upload image')
    setStaticText('Preparing Data...')

    const userId = auth?.user?.uuid || generateUUID()
    const uuid = `${userId}:${generateUUID()}`

    const data = {
      id: uuid,
      resumePath: uploadedFile.path,
      imagePath: uploadedImage.path,
      companyName,
      jobTitle,
      jobDescription,
      feedback: '',
    }

    await kv.set(`resume:${uuid}`, JSON.stringify(data))
    setStaticText('Analyzing...')

    const feedback = await ai.feedback(
      uploadedFile.path,
      prepareInstructions({ jobTitle, jobDescription }),
    )

    if (!feedback) return setStaticText('Error: Failed to analyze resume')

    const feedbackText =
      typeof feedback.message.content === 'string'
        ? feedback.message.content
        : feedback.message.content[0].text

    data.feedback = JSON.parse(feedbackText)
    await kv.set(`resume:${uuid}`, JSON.stringify(data))
    setStaticText('Analysis complete, redirecting...')
    navigate(`/resume/${uuid}`)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget.closest('form')

    if (!form) {
      return
    }

    const formData = new FormData(form)

    const uploadData: UploadFormData = {
      companyName: formData.get('company-name') as string,
      jobTitle: formData.get('job-title') as string,
      jobDescription: formData.get('job-description') as string,
      file,
    }

    const validation = validateUploadForm(uploadData)

    if (!validation.isValid) {
      setFormErrors(validation.errors)
      return
    }

    setFormErrors([])
    handleAnalize({
      file: uploadData.file!,
      companyName: uploadData.companyName,
      jobTitle: uploadData.jobTitle,
      jobDescription: uploadData.jobDescription,
    })
  }

  const handleFileSelect = (file: File | null) => {
    setFile(file)
  }

  return (
    <main className='bg-white-200'>
      <Navbar />
      <section className='main-section'>
        <div className='page-heading py-8'>
          <h1 className='text-balance'>Smart feedback for your dream job</h1>
          {isProcessing ? (
            <>
              <h2>{staticText}</h2>
              <img src='/resume-scan.gif' alt='resume scan' className='w-full' />
            </>
          ) : (
            <h2>Drop your resume for an ATS score and improvement tips</h2>
          )}
        </div>
        {!isProcessing && (
          <form
            id='upload-form'
            onSubmit={handleSubmit}
            className='flex flex-col gap-4 mt-6 max-w-3xl px-3'
          >
            {formErrors.length > 0 && (
              <div className='bg-red-50 border border-red-200 rounded-lg p-4'>
                <h3 className='text-red-800 font-medium mb-2'>Please fix the following errors:</h3>
                <ul className='text-red-700 text-sm space-y-1'>
                  {formErrors.map((error, index) => (
                    <li key={index}>• {error}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className='form-div'>
              <label htmlFor='company-name'>Company Name</label>
              <input
                type='text'
                name='company-name'
                id='company-name'
                placeholder='Enter company name'
              />
            </div>
            <div className='form-div'>
              <label htmlFor='job-title'>Job Title</label>
              <input type='text' name='job-title' id='job-title' placeholder='Enter job title' />
            </div>
            <div className='form-div'>
              <label htmlFor='job-description'>Job Description</label>
              <textarea
                rows={5}
                name='job-description'
                id='job-description'
                placeholder='Enter job description'
              />
            </div>
            <div className='form-div'>
              <label htmlFor='uploader'>Upload Resume</label>
              <FileUploader onFileSelect={handleFileSelect} />
            </div>

            <button className='primary-btn' type='submit'>
              Analyze Resume
            </button>
          </form>
        )}
      </section>
    </main>
  )
}
