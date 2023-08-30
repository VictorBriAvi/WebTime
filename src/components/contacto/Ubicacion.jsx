import { Col, Container, Row } from "react-bootstrap";
import mapa from "../../assets/WorldMap.svg";
import "../../style/Ubicacion.css";
const ubicacion = () => {
  return (
    <Container fluid>
      <Row xs="auto" className="contenedor-row">
        <Col sm={6} className="contenedor-col">
          <Col sm={12} md={4}>
            <div>
              <h2>Estamos ubicados</h2>
              <p>Riobamba 114</p>
            </div>
          </Col>
          <Col sm={12} md={4}>
            <div>
              <h3>Nuestras redes sociales</h3>
              <p>Instagram</p>
              <p>Facebook</p>
              <p>TikTok</p>
            </div>
          </Col>
          <Col sm={12} md={4}>
            <div>
              <h2>Nuestros contactos</h2>
              <p>Whatsaap</p>
              <p>Telefono</p>
            </div>
          </Col>
        </Col>
        <Col sm={6} className="contenedor-col-ubicacion">
          <img src={mapa} alt="" className="contenedor-ubicacion " />
        </Col>
      </Row>
    </Container>
  );
};

export default ubicacion;
