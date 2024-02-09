import React from "react";
import "../style/ListaPrecios.css";

const ListaPrecios = ({ titulo, servicios }) => {
  const capitalizeFirstLetter = (str) => {
    // Verifica si la cadena es válida y no está vacía
    if (typeof str !== "string" || str.length === 0) {
      return str;
    }

    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  return (
    <div className="contenedor-lista-precios protest-guerrilla-regular">
      <h1 className="titulo-precios">{capitalizeFirstLetter(titulo)}</h1>
      <div>
        <table className="precios-table ">
          <thead>
            {/*<th className="header-cell-left">Servicio</th>*/}
            {/* <th className="header-cell-right">Precio de Lista</th>*/}
          </thead>
          <tbody>
            {servicios.map((servicio, index) => (
              <tr key={index}>
                <td className="service-cell">
                  {capitalizeFirstLetter(servicio.name)}
                </td>
                <td className="price-cell">{`$ ${formatNumberWithCommas(
                  servicio.price
                )}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListaPrecios;
