"use client"
import { createContext, useEffect, useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";

export const UserContext = createContext()

export function UserContextProvider( props ) {
    const [currentUser, setCurrentUser] = useState()
    const [loadingData, setLoadingData] = useState(true)

    const signUp = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd)
    const signIn = (email, pwd) => signInWithEmailAndPassword(auth, email, pwd )
    
    useEffect(() => {
      const usubscribe = onAuthStateChanged(auth, (currentUser) => {
        setCurrentUser(currentUser)
        setLoadingData(false)
      })
    
      return usubscribe
      
    }, [])
    
    
    return(
        <UserContext.Provider value={{signUp, signIn, currentUser}}>
            { !loadingData && props.children }
        </UserContext.Provider> 
    )
}

