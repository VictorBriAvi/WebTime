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
    <div className="contenedor mx-5">
      {letras.map((letra, index) => (
        <h1 key={index} className={`animated-letter letter-${index} mx-1`}>
          {letra}
        </h1>
      ))}
    </div>
  );
};

export default AnimacionLetras;
