import SummaryCategory from '@/components/resume/summary/summary-category'
import ScoreGauge from '@/components/resume/ui/score-gauge'

interface SummaryProps {
  feedback: Feedback
}

const Summary = ({ feedback }: SummaryProps) => {
  const CATEGORIES = [
    { title: 'Tone & Style', score: feedback.toneAndStyle.score },
    { title: 'Content', score: feedback.content.score },
    { title: 'Structure', score: feedback.structure.score },
    { title: 'Skills', score: feedback.skills.score },
  ]

  return (
    <article className='bg-white rounded-2xl shadow-md w-full'>
      <header className='flex flex-row items-center p-6 gap-8 border-b border-gray-100'>
        <ScoreGauge score={feedback.overallScore} />

        <div className='flex flex-col gap-3'>
          <h2 className='text-2xl font-bold text-gray-900'>Your Resume Score</h2>
          <p className='text-sm text-gray-600 leading-relaxed max-w-prose'>
            This score is based on the analysis of your resume. It ranges from 0 to 100, with higher
            scores indicating better quality and employability potential.
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
