import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import imagenLogo from "../../assets/Logos/LogoLetrasBlancasCrop.png";

import "../../style/Navbar.css";

const Navegacion = () => {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      className="color-fondo-navbar bg-body-tertiary"
    >
      <Container className="color-fondo-navbar">
        <Navbar.Brand href="#home">
          <img src={imagenLogo} className="imagen-logo-navbar" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Precios</Nav.Link>
            <Nav.Link href="#link">Precios</Nav.Link>
            <Nav.Link href="#link">Promociones</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navegacion;
