import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'
import { createContext, useContext, useState } from 'react'

// INTERFACE
interface AccordionContextType {
  activeItems: string[]
  toggleItem: (id: string) => void
  isItemActive: (id: string) => boolean
}

interface AccordionHeaderProps {
  itemId: string
  children: ReactNode
  className?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

interface AccordionProps {
  children: ReactNode
  defaultOpen?: string
  allowMultiple?: boolean
  className?: string
}

interface AccordionItemProps {
  id: string
  children: ReactNode
  className?: string
}

interface AccordionContentProps {
  itemId: string
  children: ReactNode
  className?: string
}

// CONTEXT
const AccordionContext = createContext<AccordionContextType | undefined>(undefined)

// HOOK
const useAccordion = () => {
  const context = useContext(AccordionContext)
  if (!context) {
    throw new Error('Accordion components must be used within an Accordion')
  }
  return context
}

// PARTS
export function Accordion({
  children,
  defaultOpen,
  allowMultiple = false,
  className = '',
}: AccordionProps) {
  const [activeItems, setActiveItems] = useState<string[]>(defaultOpen ? [defaultOpen] : [])

  const toggleItem = (id: string) => {
    setActiveItems((prev) => {
      if (allowMultiple) {
        return prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      } else {
        return prev.includes(id) ? [] : [id]
      }
    })
  }

  const isItemActive = (id: string) => activeItems.includes(id)

  return (
    <AccordionContext.Provider value={{ activeItems, toggleItem, isItemActive }}>
      <div className={cn('space-y-2', className)}>{children}</div>
    </AccordionContext.Provider>
  )
}

export function AccordionItem({ children, className = '' }: AccordionItemProps) {
  return (
    <div className={cn('overflow-hidden border-b border-light-purple', className)}>{children}</div>
  )
}

export function AccordionHeader({
  itemId,
  children,
  className = '',
  icon,
  iconPosition = 'right',
}: AccordionHeaderProps) {
  const { toggleItem, isItemActive } = useAccordion()
  const isActive = isItemActive(itemId)

  const defaultIcon = (
    <svg
      className={cn('size-5 transition-transform duration-200', {
        'rotate-180': isActive,
      })}
      fill='none'
      stroke='#b3a1ff'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
    </svg>
  )

  const handleClick = () => {
    toggleItem(itemId)
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        'w-full px-4 py-3 text-left',
        'focus:outline-none',
        'transition-colors duration-200 flex items-center justify-between cursor-pointer',
        className,
        isActive && 'bg-light-green',
      )}
    >
      <div className='flex items-center space-x-3'>
        {iconPosition === 'left' && (icon || defaultIcon)}
        <div className='flex-1'>{children}</div>
      </div>
      {iconPosition === 'right' && (icon || defaultIcon)}
    </button>
  )
}

export function AccordionContent({ itemId, children, className = '' }: AccordionContentProps) {
  const { isItemActive } = useAccordion()
  const isActive = isItemActive(itemId)

  return (
    <div
      className={cn(
        'overflow-hidden transition-all duration-300 ease-in-out',
        isActive ? 'max-h-fit opacity-100' : 'max-h-0 opacity-0',
        className,
      )}
    >
      <div className='px-4 py-3'>{children}</div>
    </div>
  )
}
