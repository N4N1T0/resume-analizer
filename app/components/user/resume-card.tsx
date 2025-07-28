import ScoreCircle from '@/components/user/ui/score-circle'
import { usePuterStore } from '@/lib/client/puter'
import { useEffect, useState } from 'react'
import { Link } from 'react-router'

const ResumeCard = ({ resume, onDelete }: { resume: Resume; onDelete?: () => void }) => {
  // STATE
  const [resumeUrl, setResumeUrl] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const { fs, kv } = usePuterStore()

  // CONST
  const { jobTitle, id, companyName, feedback, imagePath, resumePath } = resume

  // EFFECT
  useEffect(() => {
    const loadResume = async () => {
      const blob = await fs.read(imagePath)
      if (!blob) return
      const url = URL.createObjectURL(blob)
      setResumeUrl(url)
    }

    loadResume()
  }, [fs])

  // HANDLERS
  const handleDelete = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (!confirm(`Are you sure you want to delete the resume for ${companyName} - ${jobTitle}?`)) {
      return
    }

    setIsDeleting(true)

    try {
      // Delete files from storage
      await fs.delete(resumePath)
      await fs.delete(imagePath)

      // Delete from KV store
      await kv.delete(`resume:${id}`)
      
      // Trigger reload of resume list
      if (onDelete) {
        onDelete()
      }
    } catch (error) {
      console.error('Failed to delete resume:', error)
      alert('Failed to delete resume. Please try again.')
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <Link
      to={`/resume/${id}`}
      className='resume-card animate-in fade-in duration-500 shadow-sm hover:shadow-lg relative'
    >
      <div className='resume-card-header mt-3'>
        <div className='flex flex-col gap-2'>
          {companyName && <h2 className='text-dark-200 font-bold break-words'>{companyName}</h2>}
          {jobTitle && <h3 className='text-lg break-words text-gray-700'>{jobTitle}</h3>}
        </div>
        <div className='flex items-center gap-2 shrink-0'>
          <ScoreCircle score={feedback.overallScore} />
        </div>
      </div>
      {resumeUrl && (
        <div className='bg-light-purple rounded-2xl p-3 animate-in fade-in duration-1000'>
          <div className='overflow-hidden rounded-2xl h-[350px] max-sm:h-[200px]'>
            <img src={resumeUrl} alt={jobTitle} className='w-full object-cover object-top' />
          </div>
        </div>
      )}
      <button
        onClick={handleDelete}
        disabled={isDeleting}
        className='p-2 text-dark-200 hover:text-red-700 bg-white-200 rounded-2xl transition-colors disabled:opacity-50 absolute top-2 right-2'
        title='Delete resume'
      >
        {isDeleting ? (
          <div className='size-4 border-2 border-red-500 border-t-transparent rounded-full animate-spin'></div>
        ) : (
          <svg className='size-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
            />
          </svg>
        )}
      </button>
    </Link>
  )
}

export default ResumeCard
