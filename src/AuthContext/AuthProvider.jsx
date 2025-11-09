import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {

    const createUserWithEmailAndPasswordFunc =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithEmailAndPasswordFunc =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        createUserWithEmailAndPasswordFunc,
        signInWithEmailAndPasswordFunc,
    }
    
    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;