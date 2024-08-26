import React, { useContext, useState } from 'react'
import GoogleIcon from '../assets/GoogleIcon'
import { AuthorContext } from "../context/AuthorProvider"

const Register = () => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()

  const {createUser, signUpWithGoogle} = useContext(AuthorContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    const displayName = `${firstName} ${lastName}`
    createUser(email, password, displayName)
  }

  return (
    <div className="bg-gray-600 m-5 p-5">
      <div className="container m-5 p-5">
          
        <form onSubmit={handleSubmit} action="" className="m-5 p-5">
          <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">Sign Up</h2>
          <div className="relative z-0 w-full mb-5 group">
            <input type="text" name="floating_text" id="floating_text" className=" peer" placeholder="" required
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="floating_text">
              First Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input type="text" name="floating_text" id="floating_text" className=" peer" placeholder="" required
              onChange={(e) => setLastName(e.target.value)}
            />
              <label htmlFor="floating_text">
                Last Name
              </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input type="email" name="floating_email" required placeholder="" className="peer"
              onChange={(e)=>setEmail(e.target.value)} 
            />
            <label htmlFor="floating_email">Email</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input type="password" name="floating_password" required placeholder="" className="peer"
              onChange={(e)=>setPassword(e.target.value)} 
            />
            <label htmlFor="floating_password">Password</label>
          </div>
          
          <button type="submit" className="btn-danger mt-10">
            Register
          </button>
          <button type="button" className="btn-danger flex justify-between text-center"
            onClick={()=>signUpWithGoogle()}
          >
            Continue with Google
            <GoogleIcon color="currentColor" />
          </button>
        </form>          
      </div>      
    </div>
  )
}

export default Register