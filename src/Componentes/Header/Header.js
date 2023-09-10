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
          <li><a href="/articulos">Artículos</a></li>
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