import { Container } from "react-bootstrap";
import "../../style/GaleriaImagenes.css";
import { galeriaImagenes } from "../../models/GaleriaImagenes";


const GaleriaImagenes  = () => {


  const arregloGaleriaImagenes  =  galeriaImagenes.filter((img) => img.type === "s");

  

  return (
    <Container fluid className="contenedor-galeria p-0  my-5">
      <div className="image-grid  bg-black">
        {arregloGaleriaImagenes.map((image, index) => (
          <img
            key={index}
            src={`/../../../public/Servicios/${image.type}-${image.id}.jpg`}
            alt={`Image ${index}`}
            className="img-fluid "
          />
        ))}
      </div>
    </Container>
  );
};

export default GaleriaImagenes;
