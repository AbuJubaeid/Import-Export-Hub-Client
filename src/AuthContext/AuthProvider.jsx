import { createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from '../../../SkillSwap-Platform/src/context/AuthContext';
import { auth } from '../Firebase/Firebase.init';

const AuthProvider = ({children}) => {

    const createUserWithEmailAndPasswordFunc =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        createUserWithEmailAndPasswordFunc,
    }
    
    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;