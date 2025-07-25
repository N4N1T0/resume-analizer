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
    { title: 'Subir | Analizador de Currículum' },
    { name: 'description', content: 'Analizador de currículum con IA para conseguir el trabajo de tus sueños' },
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

    setStaticText('Cargando el archivo...')
    const uploadedFile = await fs.upload([file])

    if (!uploadedFile) return setStaticText('Error al cargar el archivo')
    setStaticText('Convirtiendo a imagen')

    const imageFile = await convertPdfToImage(file)
    if (!imageFile.file) return setStaticText('Error al convertir a imagen')

    setStaticText('Subiendo imagen...')
    const uploadedImage = await fs.upload([imageFile.file])

    if (!uploadedImage) return setStaticText('Error al subir imagen')
    setStaticText('Preparando datos...')

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
    setStaticText('Analizando...')

    const feedback = await ai.feedback(
      uploadedFile.path,
      prepareInstructions({ jobTitle, jobDescription }),
    )

    if (!feedback) return setStaticText('Error: No se pudo analizar el currículum')

    const feedbackText =
      typeof feedback.message.content === 'string'
        ? feedback.message.content
        : feedback.message.content[0].text

    data.feedback = JSON.parse(feedbackText)
    await kv.set(`resume:${uuid}`, JSON.stringify(data))
    setStaticText('Análisis completo, redirigiendo...')
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
          <h1 className='text-balance'>Retroalimentación inteligente para el trabajo de tus sueños</h1>
          {isProcessing ? (
            <>
              <h2>{staticText}</h2>
              <img src='/resume-scan.gif' alt='resume scan' className='w-full' />
            </>
          ) : (
            <h2>Sube tu currículum para obtener una puntuación ATS y consejos de mejora</h2>
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
                <h3 className='text-red-800 font-medium mb-2'>Por favor corrige los siguientes errores:</h3>
                <ul className='text-red-700 text-sm space-y-1'>
                  {formErrors.map((error, index) => (
                    <li key={index}>• {error}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className='form-div'>
              <label htmlFor='company-name'>Nombre de la Empresa</label>
              <input
                type='text'
                name='company-name'
                id='company-name'
                placeholder='Ingresa el nombre de la empresa'
              />
            </div>
            <div className='form-div'>
              <label htmlFor='job-title'>Título del Trabajo</label>
              <input type='text' name='job-title' id='job-title' placeholder='Ingresa el título del trabajo' />
            </div>
            <div className='form-div'>
              <label htmlFor='job-description'>Descripción del Trabajo</label>
              <textarea
                rows={5}
                name='job-description'
                id='job-description'
                placeholder='Ingresa la descripción del trabajo'
              />
            </div>
            <div className='form-div'>
              <label htmlFor='uploader'>Subir Currículum</label>
              <FileUploader onFileSelect={handleFileSelect} />
            </div>

            <button className='primary-btn' type='submit'>
              Analizar Currículum
            </button>
          </form>
        )}
      </section>
    </main>
  )
}
