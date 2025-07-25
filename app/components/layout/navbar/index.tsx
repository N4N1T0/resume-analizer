import { usePutterAuthStore } from '@/lib/client/puter'
import { Link } from 'react-router'

const Navbar = () => {
  // STATE
  const { auth } = usePutterAuthStore()

  return (
    <nav className='navbar'>
      <Link to='/' className='text-2xl font-bold text-gradient'>
        RA
      </Link>
      <div className='flex gap-3 justify-center items-center'>
        {auth.user && (
          <Link to='/user' className='primary-btn w-fit'>
            <span className='hidden md:inline'>Ver</span> Mis CV
          </Link>
        )}
        <Link to='/upload' className='primary-btn w-fit'>
          Subir <span className='hidden md:inline'>CV</span>
        </Link>
        {auth.user && auth.user?.uuid === import.meta.env.ADMIN && (
          <Link to='/wipe' className='primary-btn w-fit'>
            Limpiar <span className='hidden md:inline'>Base de Datos</span>
          </Link>
        )}
        <a
          href='https://github.com/N4N1T0/resume-analizer'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-light-purple rounded-full aspect-square p-2 hover:bg-white-200 duration-200'
        >
          <svg
            className='size-5 text-dark-200'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path
              fillRule='evenodd'
              d='M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z'
              clipRule='evenodd'
            />
          </svg>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
