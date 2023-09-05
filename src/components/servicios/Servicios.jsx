import { Card, Col, Container, Row } from "react-bootstrap";

import "../../style/Servicios.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { TiMessages } from "react-icons/ti";

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
            <h2>{cuadro.titulo}</h2>
            {/** <p>Descripción del texto</p>*/}
          </div>
        </Card.Body>
      </Card>
    ));
  };

  return (
    <Container fluid className="contenedor-card  my-5">
      <Row xs="auto">
        <Col sm={4} className="contenedor-texto">
          <Col sm={12} className="texto-bienvenida my-5">
            <h1 className="montserrat-font mt-3">Nuestros Servicios</h1>

            <div className="merriweather-font ">
              <p>
                <BsFillPatchCheckFill />
                Excelente Atención
              </p>
              <p>
                <BsFillPatchCheckFill />
                Garantía
              </p>
              <p>
                <BsFillPatchCheckFill />
                Excelentes Profesionales
              </p>
            </div>
            <h2>
              <p>
                <TiMessages />
                Tus comentarios son bienvenidos
              </p>
            </h2>
          </Col>
        </Col>
        <Col sm={8}>
          <Col className="contendor-tarjeta mb-3">
            <div className="card-container  gradient-background">
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
