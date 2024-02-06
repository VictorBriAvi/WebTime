import { useEffect, useState, lazy, Suspense } from "react";
import { Container } from "react-bootstrap";
import "../../style/Servicios.css";
import { servicios } from "../../models/Servicios";

const Servicios = () => {
  const [index, setIndex] = useState(0);
  const [imagenesServicios, setImagenesServicios] = useState([]);

  useEffect(() => {
    const cargarDatosServicios = async () => {
      const moduloServicios = await import("../../models/Servicios");
      const datosServicios = moduloServicios.servicios.filter(
        (img) => img.type === "s"
      );
      setImagenesServicios(datosServicios);
    };

    cargarDatosServicios();
  }, []);

  console.log(imagenesServicios);

  const arregloServicios = servicios.filter((img) => img.type === "s");

  return (
    <Container fluid className="p-0 my-5">
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </Container>
  );
};

export default Servicios;
