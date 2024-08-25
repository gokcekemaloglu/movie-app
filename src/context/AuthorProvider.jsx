import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import {auth} from "../auth/firebase"
import { toastError, toastSuccess } from '../helpers/ToastNotify'
import { useNavigate } from 'react-router-dom'

export const AuthorContext = createContext()

const AuthorProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState()

    const navigate = useNavigate()

    useEffect(()=>{
        userObserver()
    },[])

    const createUser = async(email, password, displayName) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            toastSuccess("Register Success")
            navigate("/")
            await updateProfile(auth.currentUser,{displayName:displayName})
        } catch (error) {
            toastError(`${error.message} "You have entered an invalid email or password incorrect." `)
        }
    }

    const signIn = async(email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            toastSuccess("Login Success")
            navigate("/")
        } catch (error) {
            toastError(`${error.message} "You have entered email or password incorrect." `)
        }
    }

    //! sign up with google

    const signUpWithGoogle = () => {

        const provider = new GoogleAuthProvider()

        signInWithPopup(auth,provider)
        .then((result)=>{
            toastSuccess("Signed in with Google is Succeeded")
            navigate("/")
        })
        .catch((error)=>{
            toastError(error.message, "Please try again")
        })
    }

    //! To get the users's data when logged in and cleared when logged out

    const userObserver = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                // console.log(user);
                const {email, displayName, photoURL} = user
                setCurrentUser({email, displayName, photoURL})
            } else {
                setCurrentUser(false)
            }
        })
    }

    //! sign out

    const logOut = () => {
        signOut(auth)
        .then(()=>{
            toastSuccess("Logged out successfully")
            // navigate("/")
        })
        .catch((error)=>{
            toastError(error.message, "Upss, something went wrong")
        })
    }

    const forgotPassword = (email) => {
        sendPasswordResetEmail(auth, email)
        .then(()=>{
            toastSuccess("Password reset email sent successfully")
        })
        .catch((error)=>{
            toastError(error.message, "Upss, something went wrong")
        })
    }

  return (
    <AuthorContext.Provider value={{createUser, signIn, signUpWithGoogle, currentUser, logOut, forgotPassword}}>
        {children}
    </AuthorContext.Provider>
  )
}

export default AuthorProvider