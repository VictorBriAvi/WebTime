import Navbar from "./components/navbar/Navegacion";

import Footer from "./components/footer/Footer";

import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Precios from "./components/Precios";
import Barberia from "./pages/Barberia";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/WebTime/" element={<Home />} />
        <Route path="/WebTime/precios" element={<Precios />} />
        <Route path="/WebTime/barberia" element={<Barberia />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
