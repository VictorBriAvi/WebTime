import { Col, Container, Row } from "react-bootstrap";
import "../../style/Footer.css";
import imagenLogo from "../../assets/Logos/LogoLetrasBlancasCrop.png";
import { FaSearchLocation, FaTiktok } from "react-icons/fa";
import { ImFacebook2, ImInstagram } from "react-icons/im";
import { BsWhatsapp } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="contenedor-footer bg-dark p-0">
      <Container>
        <Row xs="auto" className="contenedor-row-footer ">
          <Col xs={12} className="text-center my-5">
            <img src={imagenLogo} className="imagen-logo-footer" alt="" />
          </Col>
          <Col xs={12} className="text-center my-3">
            <div className="contenedor-redes-footer">
              <ImInstagram className="" />

              <ImFacebook2 className="" />

              <FaTiktok className="" />

              <BsWhatsapp className="" />
            </div>
          </Col>
          <Col xs={12} className="text-center mt-5">
            <h6>© 2023 Time For You. Todos los derechos reservados.</h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
