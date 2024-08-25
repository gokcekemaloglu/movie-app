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
    <div className="bg-gray-600">
      <div>
          
        <form onSubmit={handleSubmit} action="">
          <h2>Sign Up</h2>
          <div>
            <input type="text" name="floating_text" id="floating_text" className=" peer" placeholder="" required
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="floating_text">
              First Name
            </label>
          </div>
          <div>
            <input type="text" name="floating_text" id="floating_text" className=" peer" placeholder="" required
              onChange={(e) => setLastName(e.target.value)}
            />
              <label htmlFor="floating_text">
                Last Name
              </label>
          </div>
          <div>
            <input type="email" name="floating_email" required placeholder="" className="peer"
              onChange={(e)=>setEmail(e.target.value)} 
            />
            <label htmlFor="floating_email">Email</label>
          </div>
          <div>
            <input type="password" name="floating_password" required placeholder="" className="peer"
              onChange={(e)=>setPassword(e.target.value)} 
            />
            <label htmlFor="floating_password">Password</label>
          </div>
          
          <button type="submit" className="btn-danger">
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