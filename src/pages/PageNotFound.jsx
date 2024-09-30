import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagenav from '../components/PageNav';
function PageNotFound() {
  return (
    <>
      <Container fluid style={{ backgroundColor: ' #2d3439', height: '100vh' }}>
        <Pagenav />
        <Row className="justify-content-center mt-5 mx-4">
          <Col xs={12} md={8}>
            <h1>Page Not Found.Enter Correct URL</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PageNotFound;
