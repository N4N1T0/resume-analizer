import SummaryCategory from '@/components/resume/summary/summary-category'
import ScoreGauge from '@/components/resume/ui/score-gauge'

interface SummaryProps {
  feedback: Feedback
}

const Summary = ({ feedback }: SummaryProps) => {
  const CATEGORIES = [
    { title: 'Tono y Estilo', score: feedback.toneAndStyle.score },
    { title: 'Contenido', score: feedback.content.score },
    { title: 'Estructura', score: feedback.structure.score },
    { title: 'Habilidades', score: feedback.skills.score },
  ]

  return (
    <article className='bg-white rounded-2xl shadow-md w-full'>
      <header className='flex md:flex-row flex-col items-center p-6 gap-8 border-b border-light-purple'>
        <ScoreGauge score={feedback.overallScore} />

        <div className='flex flex-col gap-3'>
          <h2 className='text-2xl font-bold text-gray-900'>Puntuación de tu Currículum</h2>
          <p className='text-sm text-gray-600 leading-relaxed max-w-prose'>
            Esta puntuación se basa en el análisis de tu currículum. Va de 0 a 100, donde las
            puntuaciones más altas indican mejor calidad y potencial de empleabilidad.
          </p>
        </div>
      </header>

      <div>
        {CATEGORIES.map((category) => (
          <SummaryCategory key={category.title} title={category.title} score={category.score} />
        ))}
      </div>
    </article>
  )
}

export default Summary
