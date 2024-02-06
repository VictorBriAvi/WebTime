import Navbar from "./components/navbar/Navegacion";

import Footer from "./components/footer/Footer";

import { Route, Routes } from "react-router-dom";

import { lazy } from "react";

const Precios = lazy(() => import("./components/Precios"));
const Home = lazy(() => import("./components/Home"));

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/WebTime/" element={<Home />} />
        <Route path="/WebTime/precios" element={<Precios />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
