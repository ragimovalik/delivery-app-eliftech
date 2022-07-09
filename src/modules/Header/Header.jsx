import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <ul role="list" className={styles.nav}>
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
            My Cart
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
