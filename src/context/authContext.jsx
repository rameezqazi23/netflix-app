import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth } from '../firebase/firebase';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';



const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({})


    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    const userSignOut = () => {
        return signOut(auth)
    }

    //getting user data
    useEffect(() => {
        const getUser = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => getUser();

    }, [])



    return (
        <UserContext.Provider value={{ signUp, signIn, user, userSignOut }}>
            {children}
        </UserContext.Provider>
    )

}

export const UserAuth = () => {
    return useContext(UserContext);
}