export default function Hero() {
  return (
    <section className='main-section'>
      <div className='page-heading'>
        <div className='flex flex-col items-center gap-6'>
          <h1 className='text-6xl leading-tight font-semibold tracking-[-2px] max-w-4xl !text-dark-200'>
            Get Your Dream Job with AI-Powered Resume Analysis
          </h1>
          <p className='text-dark-200 text-xl max-w-2xl leading-relaxed'>
            Upload your resume and get instant feedback on how to optimize it for Applicant Tracking
            Systems and recruiters.
          </p>
        </div>
        <img
          src='/resume-scan.gif'
          alt='Resume Analysis'
          className='max-w-md w-full h-auto rounded-2xl shadow-lg'
        />
      </div>
    </section>
  )
}
