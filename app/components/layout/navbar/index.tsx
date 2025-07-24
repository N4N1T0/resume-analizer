import { Link } from 'react-router'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/' className='text-2xl font-bold text-gradient'>
        RA
      </Link>
      <Link to='/upload' className='primary-btn w-fit'>
        Upload Resume
      </Link>
    </nav>
  )
}

export default Navbar
