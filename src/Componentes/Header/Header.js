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
          <li><a href="#home">Inicio</a></li>
          <li>
          <div class="menu-item">
            <a href="#articulos">Artículos</a>
            <ul className='submenu'>
              <li><a href='#bouquets'>Bouquets</a></li>
              <li><a href='#centros-mesa'>Centros de mesa</a></li>
              <li><a href='#floreros'>Floreros</a></li>
            </ul>
            </div>
            </li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
        <div className="login">
          <button className="login-button">Login</button>
        </div>
      </nav>
        </header>
    )
}

export default Header
