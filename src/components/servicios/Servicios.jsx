import { Card, Col, Container, Row } from "react-bootstrap";

import "../../style/Servicios.css";

const Servicios = ({ imagenes }) => {
  console.log(imagenes);

  const renderCuadros = () => {
    return imagenes.map((cuadro, index) => (
      <Card key={index} className="custom-card">
        <Card.Body className="card-body">
          <div className="imagen-container">
            <img className="imagen-card" src={cuadro.src} alt={index.alt} />
          </div>
          <div className="overlay">
            <h2>Título del texto</h2>
            <p>Descripción del texto</p>
          </div>
        </Card.Body>
      </Card>
    ));
  };

  return (
    <Container fluid className="contenedor-card ">
      <Row xs="auto">
        <Col sm={4} className="contenedor-texto">
          <Col sm={12} className="texto-bienvenida">
            Nuestros Servicios
          </Col>
        </Col>
        <Col sm={8}>
          <Col className="contendor-tarjeta">
            <div className="card-container ">
              <div>
                <Row xs={1} md={2}>
                  {renderCuadros()}
                </Row>
              </div>
            </div>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Servicios;