import { usePuterStore, usePutterAuthStore } from '@/lib/client/puter'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

const WipeApp = () => {
  // STATE
  const { isLoading, error, fs, kv } = usePuterStore()
  const { auth } = usePutterAuthStore()
  const navigate = useNavigate()
  const [files, setFiles] = useState<FSItem[]>([])

  // CONST
  const loadFiles = async () => {
    const files = (await fs.readDir('./')) as FSItem[]
    setFiles(files)
  }

  // EFFECT
  useEffect(() => {
    loadFiles()
  }, [])

  useEffect(() => {
    if (!isLoading) {
      if (auth?.user?.uuid !== import.meta.env.ADMIN) {
        navigate('/')
      }
    }
  }, [isLoading, auth.isAuthenticated, auth?.user?.uuid, navigate])

  // HANDLE
  const handleDelete = async () => {
    files.forEach(async (file) => {
      await fs.delete(file.path)
    })
    await kv.flush()
    loadFiles()
  }

  // RENDER
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error {error}</div>
  }

  return (
    <div>
      Authenticated as: {auth.user?.username}
      <div>Existing files:</div>
      <div className='flex flex-col gap-4'>
        {files.map((file) => (
          <div key={file.id} className='flex flex-row gap-4'>
            <p>{file.name}</p>
          </div>
        ))}
      </div>
      <div>
        <button
          className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
          onClick={() => handleDelete()}
        >
          Wipe App Data
        </button>
      </div>
    </div>
  )
}

export default WipeApp
