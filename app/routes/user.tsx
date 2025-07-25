import Navbar from '@/components/layout/navbar'
import ResumeList from '@/components/user/resume-list'

export default function User() {
  return (
    <main className='bg-white-200'>
      <Navbar />
      <section className='main-section'>
        <div className='page-heading py-8'>
          <h1>Rastrea tu Aplicación y Calificación del Currículum</h1>
          <h2>Revisa tu aplicación y verifica la retroalimentación con IA</h2>
        </div>

        <ResumeList />
      </section>
    </main>
  )
}
