import { usePuterStore } from '@/lib/client/puter'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'

export const meta = () => {
  return [
    { title: 'Auth | Resume Analyzer' },
    { name: 'description', content: 'AI powered resume analyzer for you to get your dream job' },
  ]
}

export default function auth() {
  // STORE
  const { isLoading, auth } = usePuterStore()
  console.log('🚀 ~ auth ~ auth:', auth)

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
    <main className='bg-gradient min-h-screen flex justify-center items-center'>
      <div className='gradient-border'>
        <section className='flex flex-col gap-8 bg-white rounded-2xl p-10'>
          <div className='flex flex-col items-center justify-center gap-2'>
            <h1>Welcome</h1>
            <h2>Log In to continue your Job Journey</h2>
          </div>
          <div>
            {isLoading ? (
              <button className='ath-button animate-pulse'>Signing you in...</button>
            ) : (
              <>
                {auth.isAuthenticated ? (
                  <button className='auth-btn' onClick={() => auth.signOut()}>
                    Log Out
                  </button>
                ) : (
                  <button className='auth-btn' onClick={() => auth.signIn()}>
                    Sign In
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
