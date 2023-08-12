import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between p-4 z-[100] absolute w-full'>
      <Link to='/'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
      </Link>
      <div>
        <button className='pr-4 text-gray-100 font-bold font-sans'>
          <Link to='/signin'>
            Sign In
          </Link>
        </button>
        <button className='bg-red-600 px-3 py-1 cursor-pointer text-gray-100 font-bold rounded font-sans'>
          <Link to='/signup'>
            Sign Up
          </Link>
        </button>
      </div>


    </div>
  )
}

export default Navbar
