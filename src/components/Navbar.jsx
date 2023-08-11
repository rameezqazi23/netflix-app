import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-4 z-[100] absolute w-full'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
        <div>
            <button className='pr-4 text-gray-100 font-bold font-sans'>Sign In</button>
            <button className='bg-red-600 px-3 py-1 cursor-pointer text-gray-100 font-bold rounded font-sans'>Sign Up</button>
        </div>
        
      
    </div>
  )
}

export default Navbar
