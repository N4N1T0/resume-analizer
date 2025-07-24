import { Link } from 'react-router'

const ResumeNavbar = () => {
  return (
    <nav className='resume-nav'>
      <Link to='/' className='back-btn'>
        <img src='/back.svg' alt='back' className='size-3' />
        <span className='text-gray-800 text-sm font-semibold'>Back to Home Page</span>
      </Link>
    </nav>
  )
}

export default ResumeNavbar
