interface ATSScoreProps {
  score: number
  suggestions: Suggestion[]
}

const ATSScore = ({ score, suggestions }: ATSScoreProps) => {
  // CONST
  const gradientClass =
    score > 69 ? 'from-green-100' : score > 49 ? 'from-yellow-100' : 'from-red-100'
  const iconSrc = score > 69 ? '/ats-good.svg' : score > 49 ? '/ats-warning.svg' : '/ats-bad.svg'
  const subtitle = score > 69 ? '¡Excelente Trabajo!' : score > 49 ? 'Buen Inicio' : 'Necesita Mejora'

  return (
    <div className={`bg-gradient-to-b ${gradientClass} to-white rounded-2xl shadow-md w-full p-6`}>
      <div className='flex items-center gap-4 mb-6'>
        <img src={iconSrc} alt='Icono de Puntuación ATS' className='w-12 h-12' />
        <div>
          <h2 className='text-2xl font-bold'>Puntuación ATS - {score}/100</h2>
        </div>
      </div>

      <div className='mb-6'>
        <h3 className='text-xl font-semibold mb-2'>{subtitle}</h3>
        <p className='text-gray-600 mb-4'>
          Esta puntuación representa qué tan bien es probable que funcione tu currículum en los
          Sistemas de Seguimiento de Candidatos utilizados por los empleadores.
        </p>

        <div className='space-y-3'>
          {suggestions.map((suggestion, index) => (
            <div key={index} className='flex items-start gap-3'>
              <img
                src={suggestion.type === 'good' ? '/check.svg' : '/warning.svg'}
                alt={suggestion.type === 'good' ? 'Verificar' : 'Advertencia'}
                className='w-5 h-5 mt-1'
              />
              <p className={suggestion.type === 'good' ? 'text-green-700' : 'text-amber-700'}>
                {suggestion.tip}
              </p>
            </div>
          ))}
        </div>
      </div>

      <p className='text-gray-700 italic'>
        Sigue refinando tu currículum para mejorar tus posibilidades de superar los filtros ATS y
        llegar a las manos de los reclutadores.
      </p>
    </div>
  )
}

export default ATSScore
