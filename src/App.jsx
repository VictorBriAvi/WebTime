import Navbar from "./components/navbar/Navegacion";

import Footer from "./components/footer/Footer";

import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Precios from "./components/Precios";
import Barberia from "./pages/Barberia";
import { FloatingWhatsApp } from "react-floating-whatsapp";

function App() {
  const mensaje = (
    <div>
      Hola, bienvenidos ! 🤝
      <br />
      ¿En qué podemos ayudarte?
    </div>
  );
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/WebTime/" element={<Home />} />
        <Route path="/WebTime/precios" element={<Precios />} />
        <Route path="/WebTime/barberia" element={<Barberia />} />
      </Routes>
      <FloatingWhatsApp
        phoneNumber="+5491126875506"
        accountName="Time For You"
        avatar=".https://victorbriavi.github.io/WebTime/assets/Logos/LogotipoOriginalPNG.png"
        chatMessage={mensaje}
        placeholder="Envianos un mensaje"
        chatboxStyle={{ backgroundColor: "#000" }}
        statusMessage="Tiempo de espera en responder 10 minutos"
        allowEsc={true}
        allowClickAway={true}
        enableClickAway={false}
      />
      <Footer />
    </>
  );
}

export default App;
