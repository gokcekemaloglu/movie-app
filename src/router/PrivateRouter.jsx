import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthorContext } from '../context/AuthorProvider'

const PrivateRouter = () => {

  const {currentUser} = useContext(AuthorContext)

  return (
    
    currentUser ? <Outlet/> : <Navigate to="/"/>)
}

export default PrivateRouter