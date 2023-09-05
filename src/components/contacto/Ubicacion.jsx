import { Col, Container, Row } from "react-bootstrap";
import mapa from "../../assets/WorldMap.svg";
import "../../style/Ubicacion.css";
import { FaSearchLocation, FaTiktok } from "react-icons/fa";
import { ImFacebook2, ImInstagram } from "react-icons/im";
import { BsWhatsapp } from "react-icons/bs";
import { useState } from "react";
const ubicacion = () => {
  const [clic, setClic] = useState(false);

  const handleIconClick = () => {
    setClic(true);

    setTimeout(() => {
      setClic(false);
    }, 300); // Restablece el estado de clic después de 300 milisegundos (ajusta según la duración de tu animación)
  };

  return (
    <Container fluid className="contenedor my-5">
      <Row xs="auto" className="contenedor-row">
        <Col sm={6} className="contenedor-col justify-content-center ">
          <Col sm={12} md={4} className="redes">
            <div className="contenedor-redes">
              <ImInstagram className="ml-4" />

              <ImFacebook2 className="mx-4" />

              <FaTiktok className="mx-4" />

              <BsWhatsapp className="mr-4" />
            </div>
          </Col>
        </Col>
        <Col sm={6} className="contenedor-col-ubicacion mb-5">
          <div>
            <div className="contenedor-texto-ubicacion text-center h3 ">
              <div className="contenedor-ubicacion-relativo">
                <div
                  className={`icono-ubicacion ${
                    clic ? console.log("click") : ""
                  }`}
                  onClick={handleIconClick}
                >
                  <FaSearchLocation />
                </div>
                <img src={mapa} alt="" className="contenedor-ubicacion " />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ubicacion;
