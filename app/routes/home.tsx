import CTA from '@/components/home/cta'
import FAQ from '@/components/home/faq'
import Features from '@/components/home/features'
import Hero from '@/components/home/hero'
import Navbar from '@/components/layout/navbar'

export function meta() {
  return [
    { title: 'Analizador de Currículum' },
    { name: 'description', content: 'Analizador de currículum con IA para conseguir el trabajo de tus sueños' },
  ]
}

export default function Home() {
  return (
    <main className='bg-white-200'>
      <Navbar />
      <Hero />
      <Features />
      <FAQ />
      <CTA />
    </main>
  )
}
