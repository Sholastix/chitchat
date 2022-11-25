import { Link } from 'react-router-dom';
import { auth } from '../../config/firebase';

import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div>
      <Link to='/'>Main</Link>
      <Link to='/login'>Login</Link>

      <div>
        <p>{auth.currentUser?.displayName}</p>
        <img src={auth.currentUser?.photoURL} />
      </div>
    </div>
  )
};

export default Navbar;