import { useEffect, useState } from 'react'
import ContextSuggestions from './context-suggestions'

interface ChatInputProps {
  value: string
  onChange: (value: string) => void
  onSend: () => void
  disabled: boolean
  resumeData?: Resume
}

const ChatInput = ({ value, onChange, onSend, disabled, resumeData }: ChatInputProps) => {
  // STATE
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [suggestions, setSuggestions] = useState<ContextSuggestion[]>([])

  // CONST
  const generateSuggestions = (): ContextSuggestion[] => {
    if (!resumeData) return []

    const suggestions: ContextSuggestion[] = []

    if (resumeData.feedback) {
      suggestions.push({
        key: 'overall-score',
        label: 'Puntuación ATS General',
        value: `${resumeData.feedback.overallScore}/100`,
      })

      suggestions.push({
        key: 'ats-score',
        label: 'Puntuación ATS',
        value: `${resumeData.feedback.ATS.score}/100`,
      })

      if (resumeData.feedback.ATS.tips?.length > 0) {
        const goodTips = resumeData.feedback.ATS.tips.filter((tip) => tip.type === 'good')
        const improveTips = resumeData.feedback.ATS.tips.filter((tip) => tip.type === 'improve')

        if (goodTips.length > 0) {
          suggestions.push({
            key: 'ats-strengths',
            label: 'Fortalezas ATS',
            value: goodTips.map((tip) => tip.tip).join(', '),
          })
        }

        if (improveTips.length > 0) {
          suggestions.push({
            key: 'ats-improvements',
            label: 'Mejoras ATS',
            value: improveTips.map((tip) => tip.tip).join(', '),
          })
        }
      }

      suggestions.push({
        key: 'content-score',
        label: 'Puntuación de Contenido',
        value: `${resumeData.feedback.content.score}/100`,
      })

      suggestions.push({
        key: 'structure-score',
        label: 'Puntuación de Estructura',
        value: `${resumeData.feedback.structure.score}/100`,
      })

      suggestions.push({
        key: 'skills-score',
        label: 'Puntuación de Habilidades',
        value: `${resumeData.feedback.skills.score}/100`,
      })

      suggestions.push({
        key: 'tone-style-score',
        label: 'Puntuación de Tono y Estilo',
        value: `${resumeData.feedback.toneAndStyle.score}/100`,
      })
    }

    if (resumeData.jobTitle) {
      suggestions.push({
        key: 'name',
        label: 'Nombre del Currículum',
        value: resumeData.jobTitle,
      })
    }

    return suggestions
  }

  // EFFECT
  useEffect(() => {
    const lastChar = value.slice(-1)
    const beforeLastChar = value.slice(-2, -1)

    if (lastChar === '#' && (value.length === 1 || beforeLastChar === ' ')) {
      setSuggestions(generateSuggestions())
      setShowSuggestions(true)
    } else {
      setShowSuggestions(false)
    }
  }, [value, resumeData])

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (!showSuggestions) {
        onSend()
      }
    } else if (e.key === 'Escape') {
      setShowSuggestions(false)
    }
  }

  const handleSuggestionsKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setShowSuggestions(false)
    }
  }

  // HANDLERS
  const handleSuggestionSelect = (suggestion: ContextSuggestion) => {
    const newValue = value.replace(/#$/, `#${suggestion.key}: ${suggestion.value} `)
    onChange(newValue)
    setShowSuggestions(false)
  }

  return (
    <div className='p-2 border-t border-light-purple relative'>
      <ContextSuggestions
        suggestions={suggestions}
        onSelect={handleSuggestionSelect}
        visible={showSuggestions}
        onKeyDown={handleSuggestionsKeyDown}
      />
      <div className='flex gap-2 justify-center items-center'>
        <input
          type='text'
          id='chat-input'
          name='chat-input'
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder='puedes usar # para obtener sugerencias'
          className='flex-1 px-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-light-green focus:border-transparent placeholder:text-sm'
          disabled={disabled}
        />
        <button
          onClick={onSend}
          disabled={!value.trim() || disabled}
          className='bg-light-green text-dark-200 p-3 h-full rounded-full hover:bg-light-green-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed aspect-square'
        >
          <svg className='size-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default ChatInput
