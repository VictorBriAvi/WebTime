import { Col, Container, Row } from "react-bootstrap";
import "../../style/Footer.css";
import imagenLogo from "../../assets/Logos/negras1.png";
import { FaTiktok } from "react-icons/fa";
import { ImFacebook2, ImInstagram } from "react-icons/im";
import { BsWhatsapp } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="contenedor-footer protest-guerrilla-regular bg-dark p-0">
      <Container fuild="md">
        <Row xs="auto" className="contenedor-row-footer ">
          <Col xs={12} md={4} className="contenedor-logo-footer my-5">
            <img src={imagenLogo} className="imagen-logo-footer" alt="" />
          </Col>
          <Col xs={12} md={4} className="text-center my-3">
            <div className="contenedor-redes-footer ">
              <div className="redes">
                <a
                  href={`https://www.instagram.com/timepeluqueria?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mi-enlace"
                >
                  <ImInstagram className="mx-1" />
                </a>
                <a
                  href={`https://www.facebook.com/peluqueriatime`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mi-enlace"
                >
                  <ImFacebook2 className="mx-1" />
                </a>
                <a
                  href={`#`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mi-enlace"
                >
                  <FaTiktok className="mx-1" />
                </a>
                <a
                  href={`https://api.whatsapp.com/send?phone=5491139094653`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mi-enlace"
                >
                  <BsWhatsapp className="mx-1" />
                </a>
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            md={4}
            className="text-center protest-guerrilla-regular my-5"
          >
            <div className="footer-info  ">
              <hr />
              <ul className="footer-list">
                <li>
                  <p>
                    <CiLocationOn className="iconos-footer" />
                    Time For you, Riobamba 114, C1024 CABA
                  </p>
                </li>
                <li>
                  <p>
                    <CiMail className="iconos-footer" />
                    peluqueriatime@gmail.com
                  </p>
                </li>
                <li>
                  <p>
                    <FaWhatsapp className="iconos-footer" />
                    11 3909-4653
                  </p>
                </li>
              </ul>
              <hr />
            </div>
          </Col>
          <Col xs={12} md={4} className="text-center my-5">
            <ul class="footer-nav">
              <li>
                <p>Inicio</p>
              </li>
              <li>
                <p>Precios</p>
              </li>
              <li>
                <p>Tienda</p>
              </li>
            </ul>
          </Col>

          <Col xs={12} md={12} className="text-center mt-5 ">
            <h6>© 2023 Time For You - All Rights Reserved</h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
