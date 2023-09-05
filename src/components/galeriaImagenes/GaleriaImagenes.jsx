import { Container } from "react-bootstrap";
import "../../style/GaleriaImagenes.css";

const GaleriaImagenes = ({ imagenes }) => {
  return (
    <Container fluid className="contenedor-galeria p-0  my-5">
      <div className="image-grid ">
        {imagenes.map((image, index) => (
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
