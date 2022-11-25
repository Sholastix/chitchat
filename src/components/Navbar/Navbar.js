import { Link } from 'react-router-dom';
// Hook for authomatic logout from current account and login with new account.
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../../config/firebase';
import styles from './Navbar.module.css';

const Navbar = () => {
  // 'useAuthState()' hook automatically updates 'user' variable, when we try to login with new account.
  const [user] = useAuthState(auth);

  return (
    <div>
      <div className='links'>
        <Link to='/'>Main</Link>
        <Link to='/login'>Login</Link>
      </div>
      <div className='user'>
        <p>{user?.displayName}</p>
        <img src={user?.photoURL} />
      </div>
      <div>
        <button onClick={() => auth.signOut()}>LogOut</button>
      </div>
    </div>
  )
};

export default Navbar;