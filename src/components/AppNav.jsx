import styles from './AppNav.module.css';
import Nav from 'react-bootstrap/Nav';

import { NavLink } from 'react-router-dom';
function AppNav() {
  return (
    //     <Nav fill variant="tabs">
    //     <Nav.Item>
    //       <Nav.Link>
    //         <NavLink to="cities">Cities</NavLink>
    //       </Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item>
    //       <Nav.Link>
    //         <NavLink to="countries">Countries</NavLink>
    //       </Nav.Link>
    //     </Nav.Item>
    //   </Nav>
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="countries">Countries</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default AppNav;
