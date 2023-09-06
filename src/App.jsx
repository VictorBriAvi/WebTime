import Navbar from "./components/navbar/Navegacion";

import Footer from "./components/footer/Footer";

import { Route, Routes } from "react-router-dom";
import Precios from "./components/Precios";
import Home from "./components/Home";

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
