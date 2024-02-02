import { Container } from "react-bootstrap";
import "../../style/GaleriaImagenes.css";
import { galeriaImagenes } from "../../models/GaleriaImagenes";

const GaleriaImagenes = () => {
  const arregloGaleriaImagenes = galeriaImagenes.filter(
    (img) => img.type === "s"
  );

  return (
    <Container fluid className=" p-0  my-5">
      <div className="image-grid  ">
        {arregloGaleriaImagenes.map((image, index) => (
          <img
            key={index}
            src={`https://victorbriavi.github.io/WebTime/assets/Servicios/${image.type}-${image.id}.jpg`}
            alt={`Image ${index}`}
            className="img-fluid my-1"
          />
        ))}
      </div>
    </Container>
  );
};

export default GaleriaImagenes;
