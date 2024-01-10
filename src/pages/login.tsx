import{auth, provider} from '../config/firebase';
import {signInWithPopup} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';

export const Login = () =>{
    const navigate = useNavigate();
    const signInwithGoogle = async () => {
        const result = await signInWithPopup(auth, provider);
        console.log(result);
        navigate("/");
        };

    return(
        <div>
            <p>Sign In with Google to Continue.</p>
            <button onClick={signInwithGoogle}> Sign In with Google </button>
        </div>
    );
};