import React from "react"
import "./FloatingMenu.css"

function FloatingMenu() {
    return (
      <div className="floating-menu">
        <ul>
        <li><a href="#home">Inicio</a></li>
        <li><a href="#bouquets">Bouquets</a></li>
        <li><a href="#centros-mesa">Centros de mesa</a></li>
        <li><a href="#floreros">Floreros</a></li>
        <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>
    );
  }


export default FloatingMenu