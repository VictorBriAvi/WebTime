import React from "react";
import Fondo from "./fondo/Fondo";
import Carrusel from "./carousel/Carrusel";
import { Container } from "react-bootstrap";
import Bienvenida from "./bienvenida/Bienvenida";
import MarcasTrabajadas from "./MarcasTrabajadas";
import Servicios from "./servicios/Servicios";
import Ubicacion from "./contacto/Ubicacion";
import GaleriaImagenes from "./galeriaImagenes/GaleriaImagenes";

import {
  imagenServicios1,
  imagenServicios3,
  imagenServicios4,
  imagenServicios6,
  imagenServicios7,
  imagenServicios8,
} from "../assets/Servicios";



const servicios = [
  { src: imagenServicios1, alt: "Imagen 1 ", titulo: "Corte" },
  { src: imagenServicios6, alt: "Imagen 1 ", titulo: "Manicura" },
  { src: imagenServicios3, alt: "Imagen 1 ", titulo: "Pedicura" },
  { src: imagenServicios4, alt: "Imagen 1 ", titulo: "Tratamiento Capilar" },
  { src: imagenServicios7, alt: "Imagen 1 ", titulo: "Manicura" },
  { src: imagenServicios8, alt: "Imagen 1 ", titulo: "Promociones" },
];

const Home = () => {
  return (
    <div className="app">
      <Fondo /> {/* Agrega el fondo aquí */}
      <div className="content">
        <Carrusel  />
        <div className="main-content">
          <Container fluid="md">
            <Bienvenida />
          </Container>
          <MarcasTrabajadas />
          <Servicios imagenes={servicios} />
          <Container>
            <Ubicacion />
          </Container>

          <GaleriaImagenes />
        </div>
      </div>
    </div>
  );
};

export default Home;
