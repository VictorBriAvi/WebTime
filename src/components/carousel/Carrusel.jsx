import { useRef, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import imagenLogo from "../../assets/Logos/LogotipoOriginalPNG.png";
import { Carrousel } from "../../models/Carousel";
import "../../style/Carrusel.css";

const Carrusel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const imagenesCarrousel = Carrousel.filter((img) => img.type === "c");

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
        {imagenesCarrousel.map((imagen, idx) => (
          <Carousel.Item key={idx} className="carouselItemStyle">
            <div className="imageContainer">
              <img
                className="imagenStyle"
                /*src={`https://victorbriavi.github.io/WebTime/assets/Carousel/${imagen.type}-${imagen.id}.jpg`}*/
                src={`https://victorbriavi.github.io/WebTime/assets/Carousel/${imagen.type}-${imagen.id}.jpg`}
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
    </>
  );
};

export default Carrusel;
{
  /*src={`./../../../public/assets/Carousel/${imagen.type}-${imagen.id}.jpg`}*/
}
