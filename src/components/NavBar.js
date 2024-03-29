import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='TopBar flex flex-row justify-between p-3'>
      <div className='flex flex-row'>
        <h1 className='font-bold text-blue-500 text-5xl'>Express Login</h1>
      </div>
    
      <div className='flex flex-row justify-end  sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-2/5 mt-2'>
        <Link to="/">
          <button className='border-2 rounded-full px-6 py-2 mr-2 '>Login</button>
        </Link>
        <Link to="/register">
          <button className='border-2 rounded-full px-6 py-2 mr-4'>Register</button>
        </Link>      
      </div>
  </div>
  )
}