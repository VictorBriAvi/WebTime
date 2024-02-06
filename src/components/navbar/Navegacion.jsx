import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import imagenLogo from "../../assets/Logos/negras1.png";

import "../../style/Navbar.css";
import { Link } from "react-router-dom";
import { FaShopify } from "react-icons/fa";
import { BiMoneyWithdraw } from "react-icons/bi";
import { MdOutlineAttachMoney } from "react-icons/md";

const Navegacion = () => {
  return (
    <Navbar expand="lg" className="color-fondo-navbar">
      <Container className="contenedor-flex">
        <Navbar.Brand href="#home" className="fondo-logo">
          <img src={imagenLogo} className="imagen-logo-navbar " alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto  barra-lateral">
            <Nav.Link
              as={Link}
              to="/WebTime/Precios"
              className="fw-bold fs-4 mx-5 letras"
            >
              <p>
                <BiMoneyWithdraw />
                Precios
              </p>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/WebTime/Precios"
              className="fw-bold fs-4 mx-5 letras"
            >
              <p>
                <FaShopify /> Tienda
              </p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navegacion;
