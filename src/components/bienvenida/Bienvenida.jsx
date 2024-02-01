import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "../../style/Bienvenida.css";

const Bienvenida = () => {
  return (
    <Container fluid className="contendor-bienvenida my-5">
      <Row xs="auto">
        <Col sm={6} className="contenedor-texto-bienvenida my-5">
          <Col sm={12} className="texto-bienvenida-titulo ">
            Bienvenidos
          </Col>
          <Col sm={12} className="texto-bienvenida mt-3">
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos y los mezcló de tal manera que logró hacer un libro de textos
            especimen.
          </Col>
        </Col>
        <Col sm={6} className="contenedor-foto-bienvenieda">
          <Col sm={12} className="foto-bienvenida">
            <img
              src="./../../../public/Carousel/c-imagen1.jpg"
              className="foto"
              alt=""
            />
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Bienvenida;
