import React from 'react'
import './Header.css'

function Header (){
    return(
        <header className='header'>
        <div className='logo'>
            <img src='./img/sakura_banner.png' alt='banner' />
        </div>
        <nav className="navbar">
        <ul className="menu">
          <li><a href="/">Inicio</a></li>
          <li className="submenu-parent" />
          <li><a href="/articulos">Artículos</a></li>
            <ul className="submenu">
            <li><a href="#bouquets">Bouquets</a></li>
            <li><a href="#centros-mesa">Centros de Mesa</a></li>
            <li><a href="#floreros">Floreros</a></li>
          </ul>
          <li><a href="/contacto">Contacto</a></li>
        </ul>
        <div className="login">
          <button className="login-button">Login</button>
        </div>
      </nav>
        </header>
    )
}

export default Header