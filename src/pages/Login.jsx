import React, { useContext, useState } from 'react'
import { AuthorContext } from '../context/AuthorProvider'
import GoogleIcon from '../assets/GoogleIcon'
import { Link } from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  
  const {signIn, signUpWithGoogle, forgotPassword} = useContext(AuthorContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    signIn(email, password)
  }
  
  return (
    <div className="overflow-hidden flex-1 h-screen justify-center items-center bg-[#23242a]">
      <div className={`form-container mt-[5vh] w-[380px] h-[580px]`}>
        <form onSubmit={handleSubmit} action="">
          <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
            Sign In
          </h2>
          <div className="relative z-0 w-full mb-5 group">
            <input type="email" placeholder="" name="floating_email" className="peer" required
              onChange={(e)=>setEmail(e.target.value)}
            />
            <label htmlFor="floating_email">Email</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input type="password" placeholder="" name="floating_password" className="peer" required
              onChange={(e)=>setPassword(e.target.value)}
            />
            <label htmlFor="floating_password">Password</label>            
          </div>
          <div className="flex justify-between">
            <span className="py-3 px-2 font-[0.75em] text-gray-200 hover:text-[#ff4b45] active:scale-95 cursor-pointer"
              onClick={()=>forgotPassword(email)}
            >
              Forgot password
            </span>
            <Link to="/register" className="py-3 px-2 font-[0.75em] text-gray-200 hover:text-[#ff4b45] active:scale-95">
              Sign Up
            </Link>
          </div>

          <button type="submit" className="btn-danger">
            Login
          </button>
          
          <button type="button" className="btn-danger flex justify-between text-center"
            onClick={()=>signUpWithGoogle()}
          >
            Continue with Google
            <GoogleIcon color="currentColor"/>
          </button>
        </form>
      </div>

    </div>
  )
}

export default Login