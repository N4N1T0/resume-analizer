import ResumeList from '@/components/home/resume-list'
import Navbar from '@/components/layout/navbar'

export function meta() {
  return [
    { title: 'Resume Analyzer' },
    { name: 'description', content: 'AI powered resume analyzer for you to get your dream job' },
  ]
}

export default function Home() {
  return (
    <main className='bg-gradient'>
      <Navbar />
      <section className='main-section'>
        <div className='page-heading py-8'>
          <h1>Track Your Application & Resume Rating</h1>
          <p>Review your application and Check AI-Powered Feedback</p>
        </div>

        <ResumeList />
      </section>
    </main>
  )
}
