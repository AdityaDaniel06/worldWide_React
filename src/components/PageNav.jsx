import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./PageNav.module.css";
import { NavLink } from "react-router-dom";

import Logo from "./Logo";

function Pagenav() {
  return (
    <Container fluid className="m-0 px-0">
      <Row>
        <Col>
          <nav className={styles.nav}>
            <Logo />
            <ul>
              <li>
                <NavLink to="/pricing">Pricing</NavLink>
              </li>
              <li>
                <NavLink to="/products">Products</NavLink>
              </li>
              <li>
                <NavLink to="/blogs">Blogs</NavLink>
              </li>
              <li>
                <NavLink to="/login" className={styles.ctaLink}>
                  Login
                </NavLink>
              </li>
            </ul>
          </nav>
        </Col>
      </Row>
    </Container>
  );
}

export default Pagenav;
