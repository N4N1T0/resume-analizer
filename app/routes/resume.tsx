import ATSScore from '@/components/resume/ats-score'
import Details from '@/components/resume/details'
import ResumeNavbar from '@/components/resume/layout/navbar'
import Summary from '@/components/resume/summary/index'
import { usePuterStore } from '@/lib/client/puter'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

export function meta() {
  return [
    { title: 'Resume Details' },
    { name: 'description', content: 'View detailed information about a specific resume' },
  ]
}

export default function resume() {
  // STORE
  const { id } = useParams()
  const { auth, isLoading, fs, kv } = usePuterStore()

  // STATE
  const [resumeUrl, setResumeUrl] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [feedback, setFeedback] = useState<Feedback | null>(null)

  // CONST
  const navigate = useNavigate()

  // EFFECT
  useEffect(() => {
    if (!isLoading && !auth.isAuthenticated) {
      navigate(`/auth?next=/resume/${id}`)
    }
  }, [auth.isAuthenticated, isLoading])

  useEffect(() => {
    const loadResume = async () => {
      const resume = await kv.get(`resume:${id}`)
      if (!resume) return

      const data = JSON.parse(resume)
      const resumeBlob = await fs.read(data.resumePath)
      if (!resumeBlob) return

      const pdfBlob = new Blob([resumeBlob], { type: 'application/pdf' })
      const resumeUrl = URL.createObjectURL(pdfBlob)
      setResumeUrl(resumeUrl)

      const imageBlob = await fs.read(data.imagePath)
      if (!imageBlob) return

      const imageUrl = URL.createObjectURL(imageBlob)
      setImageUrl(imageUrl)

      setFeedback(data.feedback)

      console.log({
        resumeUrl,
        imageUrl,
        feedback: data.feedback,
      })
    }

    loadResume()
  }, [id])

  return (
    <main className='!pt-0'>
      <ResumeNavbar />
      <div className='flex flex-row w-full max-lg:flex-col-reverse'>
        <section className='feedback-section bg-gradient h-screen sticky top-0 flex justify-center items-center'>
          {imageUrl && resumeUrl && (
            <div className=' animate-in fade-in duration-1000 gradient-border max-sm:m-0 h-[90%] max-w-xl:h-fit w-fit '>
              <a href={resumeUrl} target='_blank' rel='noopener noreferrer'>
                <img src={imageUrl} alt='resume' className='size-full object-contain rounded-2xl' />
              </a>
            </div>
          )}
        </section>
        <section className='feedback-section'>
          <h2 className='text-4xl text-black font-bold'>Resume Review</h2>
          {feedback ? (
            <div className='flex flex-col gap-8 animate-in fade-in duration-1000'>
              <Summary feedback={feedback} />
              <ATSScore score={feedback.ATS.score} suggestions={feedback.ATS.tips} />
              <Details feedback={feedback} />
            </div>
          ) : (
            <img src='/resume-scan-2.gif' alt='Resume Scan' />
          )}
        </section>
      </div>
    </main>
  )
}
