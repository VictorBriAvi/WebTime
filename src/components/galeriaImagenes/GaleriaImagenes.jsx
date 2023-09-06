import { Container } from "react-bootstrap";
import "../../style/GaleriaImagenes.css";

import {
  imagen1,
  imagen2,
  imagen3,
  imagen4,
  imagen5,
  imagen6,
  imagen7,
  imagen8,
} from "../../assets/Galeria/IndexGaleria";

const imagenesGaleria = [
  { src: imagen8, alt: "Imagen 1 ", titulo: "Corte" },
  { src: imagen8, alt: "Imagen 2 ", titulo: "Manicura" },
  { src: imagen8, alt: "Imagen 3 ", titulo: "Pedicura" },
  { src: imagen8, alt: "Imagen 4 ", titulo: "Tratamiento Capilar" },
  { src: imagen8, alt: "Imagen 5 ", titulo: "Manicura" },
  { src: imagen8, alt: "Imagen 6 ", titulo: "Promociones" },
  { src: imagen8, alt: "Imagen 7 ", titulo: "Promociones" },
  { src: imagen8, alt: "Imagen 8 ", titulo: "Promociones" },
];
const GaleriaImagenes = () => {
  return (
    <Container fluid className="contenedor-galeria p-0  my-5">
      <div className="image-grid ">
        {imagenesGaleria.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Image ${index}`}
            className="img-fluid custom-image my-custom-image"
          />
        ))}
      </div>
    </Container>
  );
};

export default GaleriaImagenes;
