import { useContext } from 'react';
import { DotLoader } from 'react-spinners';
import { AuthContext } from '../AuthContext/AuthContext';

const PrivateRoute = ({children}) => {
        const { user, loading } = useContext(AuthContext);

        if(loading){
            <div className='flex justify-center items-center'>
                <DotLoader />
            </div>
        }
    
        if(!user){
            return <Navigate to="/signin"></Navigate>
        }
    return children
};

export default PrivateRoute;