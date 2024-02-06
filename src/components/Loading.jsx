import React from "react";
import "../style/Loading.css";
const Loading = () => {
  return (
    <div className="contenedor-loading">
      <div class="loader">
        <div class="face">
          <div class="circle"></div>
        </div>
        <div class="face">
          <div class="circle"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
