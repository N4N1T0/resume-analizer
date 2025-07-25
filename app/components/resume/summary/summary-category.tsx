import ScoreBadge from '../ui/score-badge'

interface SummaryCategoryProps {
  title: string
  score: number
}

const SummaryCategory = ({ title, score }: SummaryCategoryProps) => {
  // CONSTANTS
  const textColor = score > 70 ? 'text-green-600' : score > 49 ? 'text-yellow-600' : 'text-red-600'

  return (
    <div className='resume-summary'>
      <div className='category'>
        <div className='flex flex-col md:flex-row gap-0 md:gap-2 items-start md:items-center justify-center'>
          <p className='text-xl md:text-2xl font-medium'>{title}</p>
          <ScoreBadge score={score} />
        </div>
        <p className='text-2xl'>
          <span className={textColor}>{score}</span>/100
        </p>
      </div>
    </div>
  )
}

export default SummaryCategory
