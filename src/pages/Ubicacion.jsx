import React from "react";
import "../style/Ubicacion.css";

import { CiLocationOn } from "react-icons/ci";
import { MdSchedule } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

const Ubicacion = () => {
  return (
    <div className="my-5 roboto-mono">
      <div className="contenedor-ubicacion my-5">
        <div className="contenedor-texto-ubicacion">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.855766332608!2d-58.396156124812954!3d-34.60780855771333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb5af83a5c09%3A0x2be664eaad691a26!2sTime%20For%20you!5e0!3m2!1ses-419!2sar!4v1706856977404!5m2!1ses-419!2sar"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="mapa-google"
            ></iframe>
          </div>
        </div>

        <div className="contenedor-contactos">
          <div className="contenedor-texto">
            <div className="contenedor-texto-icono">
              <p>Time For you, Riobamba 114, C1024 CABA</p>
              <CiLocationOn className=" iconos" />
            </div>

            <div className="contenedor-texto-icono">
              <p>Lunes a Sabado de 10 a 19hs.</p>
              <MdSchedule className=" iconos" />
            </div>

            <div className="contenedor-texto-icono">
              <p>Turnos 11 3909-4653</p>
              <CiCalendarDate className=" iconos" />
            </div>

            <div className="contenedor-texto-icono">
              <span>peluqueriatime@gmail.com</span>
              <CiMail className="iconos" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ubicacion;
