import { usePuterStore, usePutterAuthStore } from '@/lib/client/puter'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import ResumeCard from './resume-card'

const ResumeList = () => {
  // STATE
  const [resumes, setResumes] = useState<Resume[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { kv } = usePuterStore()
  const { auth } = usePutterAuthStore()
  const navigate = useNavigate()

  // EFFECT
  useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate('/auth?next=/user')
    }
  }, [auth.isAuthenticated])

  // HANDLERS
  const loadResumes = async () => {
    setIsLoading(true)

    const resume = (await kv.list('resume:*', true)) as KVItem[]
    const parsedResume = resume
      ?.filter((resume) => resume.key.split(':').includes(auth?.user?.uuid as string))
      .map((resume) => JSON.parse(resume.value) as Resume)

    setResumes(parsedResume)
    setIsLoading(false)
  }

  // EFFECT
  useEffect(() => {
    loadResumes()
  }, [])

  // RENDER
  if (isLoading) {
    return (
      <div className='flex flex-col items-center justify-center'>
        <img src='/resume-scan-2.gif' className='w-[200px]' />
      </div>
    )
  }

  if (!isLoading && resumes?.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center mt-10 gap-4'>
        <h2 className='text-xl font-bold'>No resumes found</h2>
        <p className='text-gray-500'>Upload your first resume to get started.</p>
        <Link to='/upload' className='primary-btn w-fit text-xl font-semibold'>
          Upload Resume
        </Link>
      </div>
    )
  }

  return (
    <section id='resume-list' className='resumes-section my-8 px-4'>
      {!isLoading &&
        resumes?.length > 0 &&
        resumes.map((resume) => (
          <ResumeCard resume={resume} key={resume.id} onDelete={loadResumes} />
        ))}
    </section>
  )
}

export default ResumeList
