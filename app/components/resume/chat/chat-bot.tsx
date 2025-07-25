import { prepareChatContext } from '@/contants'
import { usePuterStore } from '@/lib/client/puter'
import { useEffect, useState } from 'react'
import ChatHeader from './chat-header'
import ChatInput from './chat-input'
import MessagesContainer from './messages-container'

const ChatBot = ({ resumeData }: ChatBotProps) => {
  // STATE
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // CONST
  const { ai } = usePuterStore()
  const feedback = resumeData?.feedback

  // EFFECTS
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add initial greeting message
      const initialMessage: Message = {
        id: Date.now().toString(),
        role: 'assistant',
        content: `¡Hola! Estoy aquí para ayudarte a entender la retroalimentación de tu currículum y responder cualquier pregunta que tengas sobre cómo mejorarlo. Tu puntuación ATS actual es ${feedback?.overallScore || 'N/A'}. ¿Qué te gustaría saber?`,
        timestamp: new Date(),
      }
      setMessages([initialMessage])
    }
  }, [isOpen, feedback])

  // HANDLERS
  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      const context = prepareChatContext(resumeData, inputValue)

      const response = await ai.chat(context)

      if (response?.message?.content) {
        const assistantContent =
          typeof response.message.content === 'string'
            ? response.message.content
            : response.message.content[0]?.text || 'Lo siento, no pude procesar tu solicitud.'

        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: assistantContent,
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, assistantMessage])
      }
    } catch (error) {
      console.error('Chat error:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Lo siento, encontré un error. Por favor intenta de nuevo.',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='absolute top-1.5 right-0 md:right-2 z-50'>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className='bg-light-purple py-0.5 px-3.5 rounded-full shadow-lg hover:bg-white-200 transition-colors flex justify-center items-center gap-2 text-dark-200'
          title='Chatear sobre tu currículum'
        >
          <svg className='size-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a9.863 9.863 0 01-4.906-1.298L3 21l2.298-5.094A9.863 9.863 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z'
            />
          </svg>
Pregúntame
        </button>
      )}

      {isOpen && (
        <div className='bg-white rounded-lg shadow-xl w-72 md:w-96 h-[75vh] flex flex-col border border-light-green'>
          <ChatHeader onClose={() => setIsOpen(false)} />
          <MessagesContainer messages={messages} isLoading={isLoading} />
          <ChatInput
            value={inputValue}
            onChange={setInputValue}
            onSend={handleSendMessage}
            disabled={isLoading}
            resumeData={resumeData}
          />
        </div>
      )}
    </div>
  )
}

export default ChatBot
