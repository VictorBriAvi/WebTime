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
        <Col
          sm={6}
          className="contenedor-col-ubicacion mb-5 p-0  d-flex justify-content-center align-items-center"
        >
          {/**          <div>
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
          </div> */}

          <div className="contendor-mapita">
            <div className="contenedor-texto-ubicacion text-center h3 ">
              <div className="contenedor-ubicacion-relativo"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13135.425224994304!2d-58.40388095172598!3d-34.60779490618962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac2659aebc1%3A0xf3c5fefc09783f8!2sRiobamba%20114%2C%20C1025%20ABD%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1693938768388!5m2!1ses-419!2sar"
                allowfullscreen=""
                className="mapa"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ubicacion;
