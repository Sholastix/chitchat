import { Link } from 'react-router-dom';
// Hook for authomatic logout from current account and login with new account.
import { useAuthState } from 'react-firebase-hooks/auth';
// Import from Firebase native method for sign out.
import { signOut } from 'firebase/auth';

import { auth } from '../../config/firebase';
import styles from './Navbar.module.css';

const Navbar = () => {
  // 'useAuthState()' hook automatically updates 'user' variable, when we try to login with new account.
  const [user] = useAuthState(auth);

  const signOutFromAccount = async () => {
    await signOut(auth);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <Link to='/'>Main</Link>
        <Link to='/login'>Login</Link>
        <button onClick={() => signOutFromAccount()}>LogOut</button>
      </div>
      <div className={styles.user}>
        <p>{user?.displayName}</p>
        <img src={user?.photoURL} alt='' />
      </div>
    </div>
  )
};

export default Navbar;