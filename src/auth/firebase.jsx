import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId
};

// initialize firebase

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

// video çözüm yolu

// const provider = new GoogleAuthProvider()

// export const signInWithGoogle = () => signInWithPopup(auth, provider)

// export const signInWithGoogle = () => {
//   signInWithPopup(auth, provider).then((result) => {
//     // console.log(result);
//     const name = result.user.displayName
//     const email = result.user.email
//     const profilePic = result.user.photoURL

//     localStorage.setItem("name", name)
//     localStorage.setItem("email", email)
//     localStorage.setItem("profilePic", profilePic)

//   }).catch((error) => {
//     console.log(error);
    
//   })
// }