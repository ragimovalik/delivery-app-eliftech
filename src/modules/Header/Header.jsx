import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const Header = ({ cart }) => {
  return (
    <div className={styles.header}>
      <ul className={styles.nav}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.nonActive
            }
            to="/"
          >
            Main Page
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : '')}
            to="/cart"
          >
            My Cart {cart && <span> - {cart.length}</span>}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
