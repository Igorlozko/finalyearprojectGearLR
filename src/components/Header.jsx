import {FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-white shadow-md'>
        <div className='flex justify-between items-centre max-w-6xl mx-auto p-3'>
        <Link to ='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-black'>GEAR</span>
            <span className='text-black'>WORLD</span>
        </h1>
        </Link>
        <form className='bg-white p-3 rounded-lg flex items-center'>
            <input 
            type="text" 
            placeholder="Search" 
            className='bg-transparent focus:outline-none w-24 sm:w-64'/>
            <FaSearch className='text-black'/>
        </form>
        <ul className='flex gap-4'>
            <Link to='/'>
            <li className='hidden sm:inline text-black hover:underline'>HOME</li>
            </Link>
            <Link to='about'>
            <li className='hidden sm:inline text-black hover:underline'>ABOUT</li>
            </Link>
            <Link to='sign-in'>
            <li className= 'text-black hover:underline'>SIGN IN</li>
            </Link>
        </ul>
        </div>
        

    </header>
  )
}
