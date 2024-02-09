import { useState, useEffect, lazy, Suspense } from "react";
import Carousel from "react-bootstrap/Carousel";
import imagenLogo from "../../assets/Logos/LogotipoOriginalPNG.png";
import "../../style/Carrusel.css";
import Loading from "../Loading";

const Carrusel = () => {
  const [index, setIndex] = useState(0);
  const [imagenesCarrousel, setImagenesCarrousel] = useState([]);

  useEffect(() => {
    // Cargar dinámicamente el módulo que contiene los datos del carrusel
    const cargarDatosCarrusel = async () => {
      const moduloCarrusel = await import("../../models/Carousel");
      const datosCarrusel = moduloCarrusel.Carrousel.filter(
        (img) => img.type === "c"
      );

      setImagenesCarrousel(datosCarrusel);
    };

    cargarDatosCarrusel();
  }, []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Suspense fallback={<Loading />}>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        className="contenedor-carrousel"
      >
        {imagenesCarrousel.map((imagen, idx) => (
          <Carousel.Item key={idx} className="carouselItemStyle">
            <div className="imageContainer">
              <img
                className="imagenStyle"
                src={`https://victorbriavi.github.io/WebTime/assets/Carousel/${imagen.type}-${imagen.id}.jpeg`}
                /* src={`../../../public/assets/Carousel/${imagen.type}-${imagen.id}.jpeg`}*/
                alt={`${imagen.name}`}
              />
            </div>
            <Carousel.Caption className="captionStyle">
              <div className="contenedor-caption ">
                <img src={imagenLogo} className="imagen-logo " alt="" />
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Suspense>
  );
};

export default Carrusel;

{
  /*src={`./../../../public/assets/Carousel/${imagen.type}-${imagen.id}.jpg`}*/
}
