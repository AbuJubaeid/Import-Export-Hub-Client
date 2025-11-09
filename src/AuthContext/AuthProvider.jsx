import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';
import { AuthContext } from './AuthContext';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const createUserWithEmailAndPasswordFunc =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithEmailAndPasswordFunc =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithPopupFunc =()=>{
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo = {
        createUserWithEmailAndPasswordFunc,
        signInWithEmailAndPasswordFunc,
        signInWithPopupFunc,
    }
    
    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;