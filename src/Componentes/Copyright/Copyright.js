import React from 'react';
import './Copyright.css';

function Copyright() {
  return (
    <footer className="copyright">
      <h4 className='footer'>&copy; 2023 Sakura Florerias | Alurageek.</h4>
      <p>Todos los derechos reservados. <br /> Creado por Lorena Quevedo López</p>
      <div className="links">
        <a href="https://github.com/lothringen21"><img src="img/LinkSocial/github.png" alt="github" title='GitHub' /></a>
        <a href="https://www.instagram.com/lorepurr/"><img src="img/LinkSocial/instagram.png" alt="instagram" title='Instagram' /></a>
        <a href="https://www.linkedin.com/in/lorena-quevedo-l%C3%B3pez-707a5a252/"><img src="img/LinkSocial/linkedin.png" alt="linkedin" title='Linkedin' /></a>
      </div>
    </footer>
  );
}

export default Copyright;
