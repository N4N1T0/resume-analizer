import { useEffect, useRef, useState } from 'react'

interface ContextSuggestionsProps {
  suggestions: ContextSuggestion[]
  onSelect: (suggestion: ContextSuggestion) => void
  visible: boolean
  onKeyDown?: (e: KeyboardEvent) => void
}

const ContextSuggestions = ({
  suggestions,
  onSelect,
  visible,
  onKeyDown,
}: ContextSuggestionsProps) => {
  // STATE
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selectedItemRef = useRef<HTMLButtonElement>(null)

  // EFFECT
  useEffect(() => {
    if (visible && suggestions.length > 0) {
      setSelectedIndex(0)
    }
  }, [visible, suggestions])

  useEffect(() => {
    if (selectedItemRef.current) {
      selectedItemRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      })
    }
  }, [selectedIndex])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!visible || suggestions.length === 0) return

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          setSelectedIndex((prev) => (prev + 1) % suggestions.length)
          break
        case 'ArrowUp':
          e.preventDefault()
          setSelectedIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length)
          break
        case 'Enter':
          e.preventDefault()
          if (suggestions[selectedIndex]) {
            onSelect(suggestions[selectedIndex])
          }
          break
        case 'Escape':
          e.preventDefault()
          onKeyDown?.(e)
          break
      }
    }

    if (visible) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [visible, suggestions, selectedIndex, onSelect, onKeyDown])

  if (!visible || suggestions.length === 0) return null

  return (
    <div className='absolute bottom-full left-0 right-0 mb-2 bg-white border border-light-green rounded-lg shadow-lg max-h-48 overflow-y-auto z-10'>
      <div className='p-2 text-xs text-dark-200 bg-light-purple'>Resume Context Suggestions</div>
      {suggestions.map((suggestion, index) => (
        <button
          key={suggestion.key}
          ref={index === selectedIndex ? selectedItemRef : null}
          onClick={() => onSelect(suggestion)}
          className={`w-full text-left p-3 border-b border-light-green last:border-b-0 transition-colors ${
            index === selectedIndex ? 'bg-white-200 text-dark-200' : 'hover:bg-white-200'
          }`}
        >
          <div
            className={`font-medium text-sm ${
              index === selectedIndex ? 'bg-white-200 text-dark-200' : 'text-dark-200'
            }`}
          >
            {suggestion.label}
          </div>
          <div
            className={`text-xs truncate mt-1 ${
              index === selectedIndex ? 'bg-white-200 text-dark-200' : 'text-gray-500'
            }`}
          >
            {suggestion.value}
          </div>
        </button>
      ))}
    </div>
  )
}

export default ContextSuggestions
