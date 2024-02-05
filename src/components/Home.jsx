import React, { Suspense, lazy } from "react";

import Carrusel from "./carousel/Carrusel";
import { Container } from "react-bootstrap";
import LoadingAmanecer from "./LoadingAmanecer";
import Loading from "./Loading";

const Bienvenida = lazy(() => import("../components/bienvenida/Bienvenida"));

const MarcasTrabajadas = lazy(() => import("../components/MarcasTrabajadas"));
const Servicios = lazy(() => import("../components/servicios/Servicios"));
const Redes = lazy(() => import("../components/contacto/Redes"));
const GaleriaImagenes = lazy(() =>
  import("../components/galeriaImagenes/GaleriaImagenes")
);
const Ubicacion = lazy(() => import("../pages/Ubicacion"));

const Home = () => {
  return (
    <Suspense fallback={<LoadingAmanecer />}>
      <div className="app">
        <div className="content">
          <Carrusel />
          <div className="main-content">
            <Container fluid="md">
              <Bienvenida />
            </Container>

            <MarcasTrabajadas />
            <Servicios />

            <Redes />

            {/* <GaleriaImagenes />*/}

            <Ubicacion />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Home;
