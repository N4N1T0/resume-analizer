import Navbar from '@/components/layout/navbar'
import ResumeList from '@/components/user/resume-list'

export default function User() {
  return (
    <main className='bg-white-200'>
      <Navbar />
      <section className='main-section'>
        <div className='page-heading py-8'>
          <h1>Track Your Application & Resume Rating</h1>
          <h2>Review your application and Check AI-Powered Feedback</h2>
        </div>

        <ResumeList />
      </section>
    </main>
  )
}
