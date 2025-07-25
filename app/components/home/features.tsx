export default function Features() {
  const FEATURES = [
    {
      icon: (
        <svg
          className='w-12 h-12 text-light-purple'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      ),
      title: 'Optimización ATS',
      description:
        'Asegúrate de que tu currículum pase por los Sistemas de Seguimiento de Candidatos con nuestra tecnología de escaneo avanzada.',
    },
    {
      icon: (
        <svg
          className='w-12 h-12 text-light-purple'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M13 10V3L4 14h7v7l9-11h-7z'
          />
        </svg>
      ),
      title: 'Análisis Instantáneo',
      description:
        'Obtén retroalimentación detallada sobre tu currículum en segundos usando nuestro motor de análisis potenciado por IA.',
    },
    {
      icon: (
        <svg
          className='w-12 h-12 text-light-purple'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
          />
        </svg>
      ),
      title: 'Perspectivas Detalladas',
      description:
        'Recibe informes completos con recomendaciones accionables para mejorar tu currículum.',
    },
  ]

  return (
    <section className='features-section'>
      <div className='container mx-auto px-4'>
        <h2 className='text-gradient text-4xl font-semibold text-center mb-12'>
          ¿Por Qué Elegir Nuestro Analizador de Currículum?
        </h2>
        <div className='features-grid'>
          {FEATURES.map((feature) => (
            <div key={feature.title} className='feature-card'>
              <div className='feature-icon'>{feature.icon}</div>
              <h3 className='text-xl font-semibold mb-3 text-dark-200'>{feature.title}</h3>
              <p className='text-dark-200 leading-relaxed'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
