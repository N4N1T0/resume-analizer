export default function Hero() {
  return (
    <section className='main-section'>
      <div className='page-heading'>
        <div className='flex flex-col items-center gap-6'>
          <h1 className='text-6xl leading-tight font-semibold tracking-[-2px] max-w-4xl !text-dark-200'>
            Consigue el Trabajo de tus Sueños con Análisis de CV Potenciado por IA
          </h1>
          <p className='text-dark-200 text-xl max-w-2xl leading-relaxed'>
            Sube tu currículum y recibe retroalimentación instantánea sobre cómo optimizarlo para
            Sistemas de Seguimiento de Candidatos y reclutadores.
          </p>
        </div>
        <div className='bg-light-purple rounded-2xl shadow-2xl max-w-md w-full h-auto'>
          <img src='/resume-scan.gif' alt='Análisis de Currículum' />
        </div>
      </div>
    </section>
  )
}
