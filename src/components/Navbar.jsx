import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const { user, userSignOut } = UserAuth();
  const navigate = useNavigate();
  // console.log(user.email)

  const handleSignOut = async () => {
    try {
      await userSignOut()
      window.location.reload()
      navigate('/')

    } catch (error) {
      console.log(error)


    }

  }

  return (
    <div className='flex justify-between p-4 z-[100] absolute w-full'>
      <Link to='/'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
      </Link>

      {user?.email ?
        (
          <div>
            <button className='pr-4 text-gray-100 font-bold font-sans'>
              <Link to='/account'>
                Account
              </Link>
            </button>
            <button onClick={handleSignOut} className='bg-red-600 px-3 py-1 cursor-pointer text-gray-100 font-bold rounded font-sans'>

              Logout

            </button>
          </div>
        )
        :
        (
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

        )}





    </div>
  )
}

export default Navbar
