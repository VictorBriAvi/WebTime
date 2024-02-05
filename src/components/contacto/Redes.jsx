import { Col, Container, Row } from "react-bootstrap";
import mapa from "../../assets/WorldMap.svg";
import "../../style/Redes.css";
import { FaSearchLocation, FaTiktok } from "react-icons/fa";
import { ImFacebook2, ImInstagram } from "react-icons/im";

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
    <div className="contenedor-redes  protest-guerrilla-regular ">
      <a
        href={`https://www.instagram.com/timepeluqueria?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==`}
        target="_blank"
        rel="noopener noreferrer"
        className="mi-enlace"
      >
        <div className="contenedor-derecha  mx-5">
          <ImInstagram className="icono instagram  mx-2 " />
          <AnimacionLetras palabra="Instagram" />
        </div>
      </a>

      <a
        href={`https://www.facebook.com/peluqueriatime`}
        target="_blank"
        rel="noopener noreferrer"
        className="mi-enlace"
      >
        <div className="contenedor-derecha mx-5 ">
          <ImFacebook2 className="icono facebook  mx-2" />
          <AnimacionLetras palabra="Facebook" />
        </div>
      </a>

      <a
        href={`#`}
        target="_blank"
        rel="noopener noreferrer"
        className="mi-enlace"
      >
        <div className="contenedor-derecha  mx-5">
          <FaTiktok className="icono tiktok  mx-2" />
          <AnimacionLetras palabra="TikTok" />
        </div>
      </a>
    </div>
  );
};

export default Redes;
