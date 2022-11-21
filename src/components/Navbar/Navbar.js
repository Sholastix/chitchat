import { Link } from 'react-router-dom';

import navbarStyles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={navbarStyles.container}>
      <Link to='/'>Main</Link>
      <Link to='/registration'>Registration</Link>
      <Link to='/login'>Login</Link>
    </div>
  )
};

export default Navbar;