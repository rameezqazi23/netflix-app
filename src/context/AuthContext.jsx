import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth, db } from '../firebase/firebase';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';

import { setDoc, doc } from "firebase/firestore";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState({})


    const signUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        setDoc(doc(db, "users", email), {
            favourites: []
        })


    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    const userSignOut = () => {
        return signOut(auth)
    }

    //getting user data from firebase
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