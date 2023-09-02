import { Col, Container, Row } from "react-bootstrap";
import "../../style/Footer.css";

const Footer = () => {
  return (
    <Container className="contenedor-footer">
      <Row xs="auto" className="contenedor-row-footer ">
        <Col xs={12} className="text-center">
          <h2>Logo</h2>
        </Col>
        <Col xs={12} className="text-center">
          <h2>Links Links Links Links</h2>
        </Col>
        <Col xs={12} className="text-center">
          <h2>Derechos de autor</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
