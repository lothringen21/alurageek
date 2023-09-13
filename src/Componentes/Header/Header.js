import React from 'react'
import './Header.css'


export default function Header(){
  return(
    <>
      <header>
        <img src='/img/sakura_banner.png' alt="logo"></img>
        <nav className='navbar'>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#articulos">Articulos</a>
              <ul>
                <li><a href="#bouquets">Bouquets</a></li>
                <li><a href="#centros-mesa">Centros de mesa</a></li>
                <li><a href="#floreros">Floreros</a></li>
              </ul>
            </li>
            <li><a href="#contacto">Contacto</a></li>
            <li><a href="#login"  className='btn-login'>Login & Sign Up</a></li>
          </ul>
        </nav>
      </header>
    </>
  );
};