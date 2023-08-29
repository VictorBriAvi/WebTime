import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import imagen from "../../assets/Carousel/imagen1.jpg";
const Carrusel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const imagenStyle = {
    height: "100vh",
    width: "100%",
  };
  const captionStyle = {
    textAlign: "left", // Mueve el contenido de la Caption a la izquierda
    paddingLeft: "20px", // Añade un poco de espacio en el lado izquierdo
  };
  return (
    <>
      <Carousel
        style={{ height: "100vh", width: "100%" }}
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagen}
            alt="Primera imagen"
            style={imagenStyle}
          />
          <Carousel.Caption style={captionStyle}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Carrusel;
