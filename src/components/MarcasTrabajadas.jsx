import React from "react";
import "../style/MarcasTrabajadas.css";
import Coalix from "../assets/logosMarcas/logo-456408373-1670434293-69faacde798f2bc22359e2c0a9bb136c1670434294.png";
import imagenSilkey from "../assets/logosMarcas/Silkey_Logo.png";
import imagenAlfapart from "../assets/logosMarcas/pngwing.com.png";

const MarcasTrabajadas = () => {
  return (
    <div className="contenedor-marcas mt-5">
      <div className="marcas-cinta my-5">
        <img src={Coalix} className="logitoMarca" alt="" />
        <img src={imagenSilkey} className="logitoMarca" alt="" />
        <img src={imagenAlfapart} className="logitoMarca" alt="" />
        {/* Repite las imágenes para crear una cinta continua */}
        <img src={Coalix} className="logitoMarca" alt="" />
        <img src={imagenSilkey} className="logitoMarca" alt="" />
        <img src={imagenAlfapart} className="logitoMarca" alt="" />
      </div>
    </div>
  );
};

export default MarcasTrabajadas;
