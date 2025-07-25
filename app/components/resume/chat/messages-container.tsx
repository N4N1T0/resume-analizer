import { useRef } from 'react'
import Message from './message'
import TypingIndicator from './typing-indicator'

interface MessagesContainerProps {
  messages: Message[]
  isLoading: boolean
}

const MessagesContainer = ({ messages, isLoading }: MessagesContainerProps) => {
  // REF
  const messagesEndRef = useRef<HTMLDivElement>(null)

  return (
    <div className='flex-1 overflow-y-auto p-4 space-y-4'>
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      {isLoading && <TypingIndicator />}
      <div ref={messagesEndRef} />
    </div>
  )
}

export default MessagesContainer
