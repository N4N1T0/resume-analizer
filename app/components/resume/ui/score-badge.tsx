interface ScoreBadgeProps {
  score: number
}

const ScoreBadge = ({ score }: ScoreBadgeProps) => {
  let badgeColor = ''
  let badgeText = ''

  if (score > 70) {
    badgeColor = 'bg-badge-green text-green-600'
    badgeText = 'Excelente'
  } else if (score > 49) {
    badgeColor = 'bg-badge-yellow text-yellow-600'
    badgeText = 'Buen Inicio'
  } else {
    badgeColor = 'bg-badge-red text-red-600'
    badgeText = 'Necesita Trabajo'
  }

  return (
    <div className={`px-3 py-1 rounded-full ${badgeColor}`}>
      <p className='text-xs sm:text-sm font-medium'>{badgeText}</p>
    </div>
  )
}

export default ScoreBadge
