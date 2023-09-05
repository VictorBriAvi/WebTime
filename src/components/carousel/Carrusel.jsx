import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import imagenLogo from "../../assets/Logos/LogotipoOriginalPNG.png";

import "../../style/Carrusel.css";
const Carrusel = ({ imagenes }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        className="my-5"
      >
        {imagenes.map((imagen, idx) => (
          <Carousel.Item key={idx} className="carouselItemStyle">
            <div className="overlay"></div>
            <div className="imageContainer">
              <img
                className="imagenStyle"
                src={imagen.src}
                alt={`Imagen ${idx}`}
              />
            </div>
            <Carousel.Caption className="captionStyle">
              <div className="contenedor-caption">
                <img src={imagenLogo} className="imagen-logo" alt="" />
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default Carrusel;
