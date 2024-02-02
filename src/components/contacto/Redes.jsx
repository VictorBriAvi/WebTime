import { Col, Container, Row } from "react-bootstrap";
import mapa from "../../assets/WorldMap.svg";
import "../../style/Redes.css";
import { FaSearchLocation, FaTiktok } from "react-icons/fa";
import { ImFacebook2, ImInstagram } from "react-icons/im";
import { BsWhatsapp } from "react-icons/bs";
import { useEffect, useState } from "react";
import AnimacionLetras from "../../animacionLetras";

const Redes = () => {
  // Define la función antes de usarla
  const generarColorAleatorio = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const [color, setColor] = useState(generarColorAleatorio());

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(generarColorAleatorio());
    }, 3000); // Cambia cada 5 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <>
      <div className="contenedor_titulo">
        <h1>Nuestras redes</h1>
      </div>
      <div className="contenedor-redes  ">
        <a
          href={`https://www.instagram.com/timepeluqueria?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==`}
          target="_blank"
          rel="noopener noreferrer"
          className="mi-enlace"
        >
          <div className="contenedor-derecha ">
            <AnimacionLetras palabra="Instagram" />
            <ImInstagram className="icono instagram  " />
          </div>
        </a>

        <a
          href={`https://www.instagram.com/timepeluqueria?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==`}
          target="_blank"
          rel="noopener noreferrer"
          className="mi-enlace"
        >
          <div className="contenedor-izquierda ">
            <AnimacionLetras palabra="Facebook" />
            <ImFacebook2 className="icono facebook" />
          </div>
        </a>

        <a
          href={`https://www.instagram.com/timepeluqueria?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==`}
          target="_blank"
          rel="noopener noreferrer"
          className="mi-enlace"
        >
          <div className="contenedor-derecha ">
            <AnimacionLetras palabra="TikTok" />
            <FaTiktok className="icono tiktok" />
          </div>
        </a>

        <a
          href={`https://www.instagram.com/timepeluqueria?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==`}
          target="_blank"
          rel="noopener noreferrer"
          className="mi-enlace"
        >
          <div className="contenedor-izquierda ">
            <AnimacionLetras palabra="WhatsApp" />
            <BsWhatsapp className="icono whatsapp" />
          </div>
        </a>
      </div>
    </>
  );
};

export default Redes;
