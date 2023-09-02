import { Col, Container, Row } from "react-bootstrap";
import mapa from "../../assets/WorldMap.svg";
import "../../style/Ubicacion.css";
import { FaSearchLocation, FaTiktok } from "react-icons/fa";
import { ImFacebook2, ImInstagram } from "react-icons/im";
import { BsWhatsapp } from "react-icons/bs";
const ubicacion = () => {
  return (
    <Container fluid className="contenedor">
      <Row xs="auto" className="contenedor-row">
        <Col sm={6} className="contenedor-col">
          <Col sm={12} md={4}>
            <div className="contenedor-texto-ubicacion text-center h3 ">
              <h2>
                <FaSearchLocation />
              </h2>
              <p>Riobamba 114</p>
            </div>
          </Col>
          <Col sm={12} md={4}>
            <div className="text-center h1">
              <p>
                <ImInstagram />
              </p>
              <p>
                <ImFacebook2 />
              </p>
              <p>
                <FaTiktok />
              </p>
            </div>
          </Col>
          <Col sm={12} md={4}>
            <div className="text-center">
              <p className="texto">
                <BsWhatsapp />
              </p>
            </div>
          </Col>
        </Col>
        <Col
          sm={6}
          className="contenedor-col-ubicacion "
          style={{ position: "relative" }}
        >
          <div>
            {" "}
            <FaSearchLocation
              style={{
                position: "absolute",

                left: "191px",
                bottom: "120px",
              }}
            />
            <img src={mapa} alt="" className="contenedor-ubicacion " />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ubicacion;
