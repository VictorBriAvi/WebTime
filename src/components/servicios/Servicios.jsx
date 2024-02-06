import { Card, Col, Container, Row } from "react-bootstrap";

import "../../style/Servicios.css";
import { servicios } from "../../models/Servicios";

const Servicios = ({ imagenes }) => {
  const arregloServicios = servicios.filter((img) => img.type === "s");

  return (
    <Container fluid className="p-0 my-5">
      {/** ACA COMIENZAN LA SEGUNDA PARTE DEL COMPONENTE */}
      <div className="imagen-grid">
        {arregloServicios.map((imagen, index) => (
          <div className="imagen-container" key={index}>
            <img
              className="imagen-servicio custom-image"
              src={`https://victorbriavi.github.io/WebTime/assets/Servicios/${imagen.type}-${imagen.id}.jpg`}
              alt={`Imagen ${index}`}
            />

            <div className="texto-superpuesto custom-image">
              <button className="css-button-sliding-to-top--black ">{`${imagen.name.toUpperCase()}`}</button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Servicios;
