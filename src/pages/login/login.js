import { useNavigate } from 'react-router-dom';
// Import native method for sign in from Firebase.
import { signInWithPopup } from 'firebase/auth';

// Import our config settings.
import { auth, provider } from '../../config/firebase';

import styles from './login.module.css';

const Login = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider);
    // Redirect to main page after login.
    navigate('/');
  };

  return (
    <div>
      <h1 className={styles.title}>Please sign in to your GOOGLE account to continue...</h1>
      <button className={styles.signin} onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  )
};

export default Login;