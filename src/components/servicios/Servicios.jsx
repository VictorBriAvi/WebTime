import { Card, Col, Container, Row } from "react-bootstrap";

import "../../style/Servicios.css";
import { servicios } from "../../models/Servicios";

const Servicios = ({ imagenes }) => {
  const arregloServicios = servicios.filter((img) => img.type === "s");

  console.log(arregloServicios);

  return (
    <Container fluid className="p-0 my-5">
      {/** ACA COMIENZAN LA SEGUNDA PARTE DEL COMPONENTE */}
      <div className="imagen-grid">
        {arregloServicios.map((imagen, index) => (
          <div className="imagen-container">
            <img
              className="imagen-servicio custom-image"
              src={`../../../public/assets/Servicios/${imagen.type}-${imagen.id}.jpg`}
              alt={`Imagen ${index}`}
            />

            <div className="texto-superpuesto custom-image">
              <h1 className="anton-regular">{`${imagen.name}`}</h1>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Servicios;
