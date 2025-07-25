import { usePuterStore, usePutterAuthStore } from '@/lib/client/puter'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'

export const meta = () => {
  return [
    { title: 'Autenticación | Analizador de Currículum' },
    { name: 'description', content: 'Analizador de currículum con IA para conseguir el trabajo de tus sueños' },
  ]
}

export default function auth() {
  // STORE
  const { isLoading } = usePuterStore()
  const { auth } = usePutterAuthStore()

  // CONST
  const location = useLocation()
  const next = location.search.split('next=')[1]
  const navigate = useNavigate()

  // EFFECT
  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate(next || '/')
    }
  }, [auth.isAuthenticated])

  return (
    <main className='bg-white-200 min-h-screen flex justify-center items-center'>
      <div className='bg-white rounded-2xl p-5'>
        <section className='flex flex-col gap-8 bg-light-green rounded-2xl p-10'>
          <div className='flex flex-col items-center justify-center gap-2'>
            <h1>Bienvenido</h1>
            <h2>Inicia sesión para continuar tu búsqueda laboral</h2>
          </div>
          <div>
            {isLoading ? (
              <button className='primary-btn animate-pulse pointer-events-none'>
                Iniciando sesión...
              </button>
            ) : (
              <>
                {auth.isAuthenticated ? (
                  <button className='primary-btn text-2xl' onClick={() => auth.signOut()}>
                    Cerrar Sesión
                  </button>
                ) : (
                  <button className='primary-btn text-2xl' onClick={() => auth.signIn()}>
                    Iniciar Sesión
                  </button>
                )}
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  )
}
