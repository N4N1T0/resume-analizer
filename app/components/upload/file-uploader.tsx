import { formatSize } from '@/lib/utils'
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

interface FileUploaderProps {
  onFileSelect: (file: File | null) => void
}

const FileUploader = ({ onFileSelect }: FileUploaderProps) => {
  // LIBRARY
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0] || null
      onFileSelect?.(file)
    },
    [onFileSelect],
  )
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      'application/pdf': ['.pdf'],
    },
    maxSize: 20 * 1024 * 1024,
  })

  // CONST
  const formattedFile = acceptedFiles[0] || null
  const formattedFileSize = formattedFile ? formatSize(formattedFile.size) : null
  const handleRemoveFile = () => {
    console.log('remove file')
    onFileSelect?.(null)
  }

  return (
    <div className='w-full bg-light-green rounded-2xl p-5 border-2 border-white'>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div className='space-y-4 cursor-pointer'>
          {formattedFile ? (
            <div className='uploader-selected-file' onClick={(e) => e.stopPropagation()}>
              <img src='/pdf.png' alt='pdf' className='size-10' />
              <div className='flex items-center space-x-3'>
                <div>
                  <p className='text-xs font-medium text-dark-200 truncate max-w--xs'>
                    {formattedFile.name}
                  </p>
                  <p className='text-sm text-gray-700'>{formattedFileSize}</p>
                </div>
              </div>
              <button
                type='button'
                className='p-1.5 cursor-pointer bg-light-green rounded-full'
                onClick={() => {
                  handleRemoveFile()
                }}
              >
                <img src='/cross.svg' alt='remove' className='size-4' />
              </button>
            </div>
          ) : (
            <div>
              <div className='mx-auto size-16 flex justify-center items-center'>
                <img src='/info.svg' alt='upload' className='size-20' />
              </div>
              <p className='text-lg text-dark-200'>
                <span className='font-semibold'>Click to Upload </span>
                or Drag and drop
              </p>
              <p className='text-sm text-gray-700'>PDF (max 20MB)</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default FileUploader
