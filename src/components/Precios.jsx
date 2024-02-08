import React from "react";
import { valoresServicios } from "../models/valoresServicios";

import { Col, Container, Row } from "react-bootstrap";
import ListaPrecios from "./ListaPrecios";
import "../style/Precios.css";

const arraySemi = valoresServicios.filter((serv) => serv.type === "semi");
const arrayComun = valoresServicios.filter((serv) => serv.type === "comun");
const arrayKapping = valoresServicios.filter((serv) => serv.type === "kapping");
const arrayEsculpidas = valoresServicios.filter(
  (serv) => serv.type === "esculpidas"
);

const Precios = () => {
  return (
    <div className="protest-guerrilla-regular">
      <Row>
        <div>
          <Col className="contenedor-texto-logo" xs={12} md={12}>
            <Row className="row-texto-logo">
              <Col xs={12} md={4}>
                <img
                  src="https://victorbriavi.github.io/WebTime/assets/Logos/LogotipoOriginalPNG.png "
                  alt=""
                  className="imagen zoomRotateAnimation"
                />
              </Col>
              <Col xs={12} md={6}>
                <h1 className="titulo">
                  ¡Hola! Antes de explorar nuestros servicios y precios,
                  queremos compartir algo importante contigo.
                </h1>
              </Col>
            </Row>
          </Col>
          <Container>
            <div className="span-texto">
              <span>
                En <b>Time For You</b>, nos esforzamos por brindarte una
                experiencia excepcional desde el momento en que cruzas nuestras
                puertas. Queremos que te sientas completamente informado y
                cómodo con cada aspecto de tu visita, incluidos nuestros
                precios.
              </span>
              <hr />
            </div>

            <div className="contenedor-aviso">
              <h3>Aviso sobre los Precios:</h3>
              <ul>
                <li>
                  Nuestros precios son estimaciones y pueden variar según el
                  servicio final.
                </li>
                <li>
                  Algunos servicios pueden requerir más productos o tiempo del
                  esperado, lo que puede afectar el costo final.
                </li>
                <li>
                  Antes de comenzar cualquier tratamiento, nuestros estilistas
                  discutirán cualquier cambio en el precio contigo.
                </li>
              </ul>
              <p>
                ¡Recuerda! Siempre estamos aquí para responder tus preguntas y
                proporcionar la información que necesites.
              </p>
            </div>
          </Container>
        </div>

        <Col xs={12} md={12}>
          <Container className="my-5 text-center">
            <ListaPrecios titulo={"SemiPermanente"} servicios={arraySemi} />
            <ListaPrecios titulo={"Esmaltado Comun"} servicios={arrayComun} />
            <ListaPrecios titulo={"Kapping"} servicios={arrayKapping} />
            <ListaPrecios titulo={"esculpidas"} servicios={arrayEsculpidas} />
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default Precios;
