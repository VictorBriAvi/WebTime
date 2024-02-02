import React from "react";
import Fondo from "./fondo/Fondo";
import Carrusel from "./carousel/Carrusel";
import { Container } from "react-bootstrap";
import Bienvenida from "./bienvenida/Bienvenida";
import MarcasTrabajadas from "./MarcasTrabajadas";
import Servicios from "./servicios/Servicios";
import Redes from "./contacto/Redes";
import GaleriaImagenes from "./galeriaImagenes/GaleriaImagenes";
import Ubicacion from "../pages/Ubicacion";

const Home = () => {
  return (
    <div className="app">
      <Fondo /> {/* Agrega el fondo aquí */}
      <div className="content">
        <Carrusel />
        <div className="main-content">
          <Container fluid="md">
            <Bienvenida />
          </Container>
          <MarcasTrabajadas />
          <Servicios />
          <Container>
            <Redes />
          </Container>

          <GaleriaImagenes />

          <Ubicacion />
        </div>
      </div>
    </div>
  );
};

export default Home;
