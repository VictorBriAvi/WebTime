import React from "react";
import "../style/MarcasTrabajadas.css";
import { marcasTrabajadas } from "../models/MarcasTrabajadas";

const MarcasTrabajadas = () => {
  const arregloMarcasTrabajadas = marcasTrabajadas.filter(
    (img) => img.type === "m"
  );
  return (
    <div className="contenedor-marcas mt-5">
      <div className="marcas-cinta my-5">
        {arregloMarcasTrabajadas.map((imagen, index) => (
          <img
            key={index}
            className="logitoMarca"
            src={`https://victorbriavi.github.io/WebTime/assets/logosMarcas/${imagen.type}-${imagen.id}.png`}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default MarcasTrabajadas;
