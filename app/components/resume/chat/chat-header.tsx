interface ChatHeaderProps {
  onClose: () => void
}

const ChatHeader = ({ onClose }: ChatHeaderProps) => {
  return (
    <div className='bg-light-purple text-dark-200 p-4 rounded-t-lg flex justify-between items-center'>
      <h3 className='font-semibold'>Asistente de Currículum</h3>
      <button
        onClick={onClose}
        className='text-dark-200 hover:bg-transparent transition-colors p-2 bg-white-200 rounded-full'
        title='Cerrar chat'
      >
        <svg className='size-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </button>
    </div>
  )
}

export default ChatHeader
