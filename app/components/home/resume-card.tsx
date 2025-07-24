import { usePuterStore } from '@/lib/client/puter'
import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import ScoreCircle from '../icons/score-circle'

const ResumeCard = ({ resume }: { resume: Resume }) => {
  // STATE
  const [resumeUrl, setResumeUrl] = useState('')
  const { fs } = usePuterStore()

  // CONST
  const { jobTitle, id, companyName, feedback, imagePath } = resume

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

  return (
    <Link to={`/resume/${id}`} className='resume-card animate-in fade-in duration-500'>
      <div className='resume-card-header'>
        <div className='flex flex-col gap-2'>
          {companyName && <h2 className='text-black font-bold break-words'>{companyName}</h2>}
          {jobTitle && <h3 className='text-lg break-words text-gray-500'>{jobTitle}</h3>}
        </div>
        <div className='shrink-0'>
          <ScoreCircle score={feedback.overallScore} />
        </div>
      </div>
      {resumeUrl && (
        <div className='gradient-border animate-in fade-in duration-1000'>
          <div className='size-full'>
            <img
              src={resumeUrl}
              alt={jobTitle}
              className='w-full h-[350px] max-sm:h-[200px] object-cover object-top'
            />
          </div>
        </div>
      )}
    </Link>
  )
}

export default ResumeCard
