import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

export const ENDPOINTS = {
    EVGENII: "/EVGENII",
    DAVID: "/DAVID",
    LIMOR: "/LIMOR",
    CARMEL: "/CARMEL",
    DEVORAH: "/DEVORAH",
}

function MainNavbar() {
    const navigate = useNavigate()


    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Aug23 Team</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to={ENDPOINTS.EVGENII}>Evgenii</Nav.Link>
          <Nav.Link as={Link} to={ENDPOINTS.DAVID}>David</Nav.Link>
          <Nav.Link as={Link} to={ENDPOINTS.LIMOR}>Limor</Nav.Link>
          <Nav.Link as={Link} to={ENDPOINTS.CARMEL}>Carmel</Nav.Link>
          <Nav.Link as={Link} to={ENDPOINTS.DEVORAH}>Devorah</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
    )
}

export default MainNavbar

