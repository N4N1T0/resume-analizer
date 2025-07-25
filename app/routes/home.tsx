import CTA from '@/components/home/cta'
import FAQ from '@/components/home/faq'
import Features from '@/components/home/features'
import Hero from '@/components/home/hero'
import Navbar from '@/components/layout/navbar'

export function meta() {
  return [
    { title: 'Resume Analyzer' },
    { name: 'description', content: 'AI powered resume analyzer for you to get your dream job' },
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
