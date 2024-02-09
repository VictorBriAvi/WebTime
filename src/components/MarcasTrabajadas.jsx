import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/MarcasTrabajadas.css";
import { marcasTrabajadas } from "../models/MarcasTrabajadas";

const MarcasTrabajadas = () => {
  const arregloMarcasTrabajadas = marcasTrabajadas.filter(
    (img) => img.type === "m"
  );

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1800,
  };

  return (
    <div className="contenedor-marcas mt-5 bg-black">
      <Slider {...settings} className="marcas-cinta my-5">
        {arregloMarcasTrabajadas.map((imagen, index) => (
          <img
            key={index}
            className="logitoMarca"
            src={`https://victorbriavi.github.io/WebTime/assets/logosMarcas/${imagen.type}-${imagen.id}.png`}
            alt=""
          />
        ))}
      </Slider>
    </div>
  );
};

export default MarcasTrabajadas;
