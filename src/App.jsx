import { Container } from "react-bootstrap";
import Bienvenida from "./components/bienvenida/Bienvenida";
import Carrusel from "./components/carousel/Carrusel";
import Navbar from "./components/navbar/Navegacion";
import Servicios from "./components/servicios/Servicios";
import Ubicacion from "./components/contacto/Ubicacion";
import imagen1 from "./assets/Carousel/imagen1.jpg";
import imagen2 from "./assets/Carousel/imagen2.jpg";
import Footer from "./components/footer/Footer";
import GaleriaImagenes from "./components/galeriaImagenes/GaleriaImagenes";
import Fondo from "./components/fondo/Fondo";

import {
  imagenServicios1,
  imagenServicios3,
  imagenServicios4,
  imagenServicios6,
  imagenServicios7,
  imagenServicios8,
} from "./assets/Servicios";
import MarcasTrabajadas from "./components/MarcasTrabajadas";
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

function App() {
  return (
    <div className="app">
      <Fondo /> {/* Agrega el fondo aquí */}
      <div className="content">
        <Navbar />
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
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
