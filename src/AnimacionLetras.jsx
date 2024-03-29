import React, { useEffect, useState } from "react";
import "./style/AnimacionLetra.css";

const AnimacionLetras = ({ palabra }) => {
  const [letras, setLetras] = useState([]);
  const [colores, setColores] = useState([]);

  useEffect(() => {
    const letrasArreglo = palabra.split("");
    setLetras(letrasArreglo);
  }, []);

  return (
    <div className="contenedor">
      {letras.map((letra, index) => (
        <h1 key={index} className={`animated-letter letter-${index} `}>
          {letra}
        </h1>
      ))}
    </div>
  );
};

export default AnimacionLetras;
