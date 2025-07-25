import { cn } from '@/lib/utils'

interface MessageProps {
  message: Message
}

const Message = ({ message }: MessageProps) => {
  return (
    <div className={cn('flex', message.role === 'user' ? 'justify-end' : 'justify-start')}>
      <div
        className={cn(
          'max-w-[80%] p-3 rounded-lg text-dark-200',
          message.role === 'user' ? 'bg-light-green' : 'bg-white-200',
        )}
      >
        <p className='text-sm whitespace-pre-wrap'>{message.content}</p>
        <span className='text-xs opacity-70 mt-1 block'>
          {message.timestamp.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </span>
      </div>
    </div>
  )
}

export default Message
