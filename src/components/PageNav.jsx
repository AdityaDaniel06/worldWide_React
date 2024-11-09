import styles from "./PageNav.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

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
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/login" className={styles.ctaLink}>
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </Col>
      </Row>
    </Container>
  );
}

export default Pagenav;
