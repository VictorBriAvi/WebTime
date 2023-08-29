import { Container } from "react-bootstrap";
import Bienvenida from "./components/bienvenida/Bienvenida";
import Carrusel from "./components/carousel/Carrusel";
import Navbar from "./components/navbar/Navegacion";
import Servicios from "./components/servicios/Servicios";

import imagen1 from "./assets/Carousel/imagen1.jpg";
import imagen2 from "./assets/Carousel/imagen2.jpg";
const imagenes = [
  {
    src: imagen1,
    alt: "Imagen 1 ",
  },
  {
    src: imagen2,
    alt: "Imagen 2 ",
  },
  {
    src: imagen1,
    alt: "Imagen 3 ",
  },
  {
    src: imagen2,
    alt: "Imagen 4 ",
  },
];

function App() {
  return (
    <>
      <Navbar />

      <Carrusel />
      <Container fluid="md">
        <Bienvenida />
        <Servicios imagenes={imagenes} />
      </Container>
    </>
  );
}

export default App;
