import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.init';
import { AuthContext } from './AuthContext';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    console.log(user)

    const createUserWithEmailAndPasswordFunc =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithEmailAndPasswordFunc =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithPopupFunc =()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const signOutFunc =()=>{
        setLoading(true)
        return signOut(auth)
    }

    const authInfo = {
        createUserWithEmailAndPasswordFunc,
        signInWithEmailAndPasswordFunc,
        signInWithPopupFunc,
        signOutFunc,
        user,
        setUser,
        loading,
        setLoading,
    }

    useEffect(()=>{
            const unsubscribe = onAuthStateChanged(auth, (currUser) => {
            setUser(currUser)
            setLoading(false)
         });
         return ()=>{
            unsubscribe()
         }
        }, [])
    
    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;