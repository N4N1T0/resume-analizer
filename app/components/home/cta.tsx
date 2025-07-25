import { Link } from 'react-router'

export default function CTA() {
  return (
    <section className='cta-section'>
      <div className='cta-container'>
        <div className='cta-content'>
          <h2 className='!text-5xl font-semibold text-center mb-6'>
            Ready to Optimize Your Resume?
          </h2>
          <p className='text-dark-200 text-lg text-center mb-8 max-w-2xl'>
            Join thousands of job seekers who have improved their chances of landing interviews with
            our AI-powered resume analysis.
          </p>
          <Link to='/upload' className='primary-btn text-3xl w-fit px-10 py-2'>
            Analyze My Resume
          </Link>
        </div>
      </div>
    </section>
  )
}
