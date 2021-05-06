import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <ul className={styles.Navigation_list}>
    <li className={styles.Navigation_items}>
      <NavLink
        exact
        to="/"
        className={styles.NavLink}
        activeClassName={styles.NavLink__active}
      >
        Home
      </NavLink>
    </li>
    <li className={styles.Navigation_items}>
      <NavLink
        to="/movies"
        className={styles.NavLink}
        activeClassName={styles.NavLink__active}
      >
        Movies
      </NavLink>
    </li>
  </ul>
);
export default Navigation;
