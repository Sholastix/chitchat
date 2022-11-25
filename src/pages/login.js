import { useNavigate } from 'react-router-dom';
// Import native method for sign in from Firebase.
import { signInWithPopup, signOut } from 'firebase/auth';
// Import our config settings.
import { auth, provider } from '../config/firebase';

const Login = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate('/');
  };

  return (
    <div>
      <h1>Please sign in to your GOOGLE account to continue...</h1>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  )
};

export default Login;