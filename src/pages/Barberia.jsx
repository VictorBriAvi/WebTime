import React from "react";
import "../style/barberia.css";
import { Col, Container, Row } from "react-bootstrap";
import ListaPrecios from "../components/ListaPrecios";
import { valoresServicios } from "../models/ValoresServicios";
import { videosServicios } from "../models/VideosServicios";

const arrayCorte = valoresServicios.filter((serv) => serv.type === "barberia");
const arrayVideosBarberia = videosServicios.filter((serv) => serv.type === "c");

const Barberia = () => {
  return (
    <div className="contenedor-barberia">
      <Container>
        <Row>
          <Col sm={6} className="contenedor-precios">
            <ListaPrecios titulo={"Barberia"} servicios={arrayCorte} />
          </Col>
          <Col className="contenedor-videos" sm={6}>
            <Container>
              <Row>
                {arrayVideosBarberia.map((video, index) => (
                  <Col sm={6} key={index}>
                    <video
                      className="video-servicio"
                      muted
                      src={`https://victorbriavi.github.io/WebTime/assets/VideosServicios/${video.type}-${video.id}.mp4`}
                      controls
                    />
                  </Col>
                ))}
              </Row>
              <Row>
                <Col sm={12} className="contenedor-video-segundo">
                  <video
                    className="video-servicio"
                    muted
                    src="https://victorbriavi.github.io/WebTime/assets/VideosServicios/c-barberia2.mp4"
                    controls
                  />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Barberia;
