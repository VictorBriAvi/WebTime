import React from "react";
import Fondo from "./fondo/Fondo";
import Carrusel from "./carousel/Carrusel";
import { Container } from "react-bootstrap";
import Bienvenida from "./bienvenida/Bienvenida";
import MarcasTrabajadas from "./MarcasTrabajadas";
import Servicios from "./servicios/Servicios";
import Ubicacion from "./contacto/Ubicacion";
import GaleriaImagenes from "./galeriaImagenes/GaleriaImagenes";

import imagen1 from "../assets/Carousel/imagen1.jpg";
import imagen2 from "../assets/Carousel/imagen2.jpg";
import {
  imagenServicios1,
  imagenServicios3,
  imagenServicios4,
  imagenServicios6,
  imagenServicios7,
  imagenServicios8,
} from "../assets/Servicios";

const imagenes = [
  {
    src: imagen1,
    alt: "Imagen 1 ",
    titulo: "Manicura",
  },
  {
    src: imagen2,
    alt: "Imagen 2 ",
    titulo: "Pedicura",
  },
  {
    src: imagen1,
    alt: "Imagen 3 ",
    titulo: "Colores",
  },
  {
    src: imagen2,
    alt: "Imagen 4 ",
    titulo: "Cortes",
  },
  {
    src: imagen2,
    alt: "Imagen 4 ",
    titulo: "Tratamiento Capilar",
  },
  {
    src: imagen2,
    alt: "Imagen 4 ",
    titulo: "Promociones",
  },
];

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
        <Carrusel imagenes={imagenes} />
        <div className="main-content">
          <Container fluid="md">
            <Bienvenida />
          </Container>
          <MarcasTrabajadas />
          <Servicios imagenes={servicios} />
          <Container>
            <Ubicacion />
          </Container>

          <GaleriaImagenes imagenes={imagenes} />
        </div>
      </div>
    </div>
  );
};

export default Home;
