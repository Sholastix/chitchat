import { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Hook for authomatic re-login with new account.
import { useAuthState } from 'react-firebase-hooks/auth';
// Import from Firebase native method for sign out.
import { signOut } from 'firebase/auth';

import styles from './Navbar.module.css';
import { auth } from '../../config/firebase';

const Navbar = () => {
  // 'useAuthState()' hook automatically updates 'user' variable, when we try to re-login with new account.
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const signOutFromAccount = async () => {
      await signOut(auth);
      // Redirect to login page after logout.
      navigate('/login');
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <Link to='/'>Main</Link>
        {!user ? <Link to='/login'>Login</Link> : <Link to='/post-create'>Create Post</Link>}
      </div>
      <div className={styles.user}>
        {user && (
          <Fragment>
            <p>{user?.displayName}</p>
            <img src={user?.photoURL} alt='' />
            <button onClick={() => signOutFromAccount()}>LogOut</button>
          </Fragment>
        )}
      </div>
    </div>
  )
};

export default Navbar;