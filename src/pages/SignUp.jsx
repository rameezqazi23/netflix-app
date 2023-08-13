import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await signUp(email, password)
      // navigate('/account')

    } catch (error) {
      setError(error.message)
      console.log(error.message)

    }
    console.log({ email, password })
  }


  return (
    <div className='w-full h-screen'>

      <img className='hidden sm:block object-cover absolute w-full h-full' src="https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg" alt="/" />
      <div className=' bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full px-4 py-24 z-50'>

        <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 backdrop-filter backdrop-blur-sm bg-opacity-100 text-white '>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold'>Sign Up</h1>
            <form className='w-full flex flex-col py-4'>
              <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-[#2e2e2e] rounded' type="email" placeholder='email' />
              <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-[#2e2e2e] rounded' type="password" placeholder='password' autoComplete='currentPassword' />
              <button onClick={handleSignup} className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
              <div className='flex justify-between items-center text-sm text-gray-500'>
                <p>
                  <input type="checkbox" /> Remember Me
                </p>
                <p>Need help?</p>
              </div>
              <p className='py-8 '>
                <span className='text-gray-500'>Already have an account on Netflix?</span>{' '}
                <Link className='text-white' to='/signin'>Sign In</Link>
              </p>
            </form>

          </div>

        </div>
      </div>

    </div>
  )
}

export default SignUp
