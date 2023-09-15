import React from 'react';
import './Contacto.css';

function Contacto() {
  return (
    <div className="contacto" id='contacto'>
      <div className="logo--footer">
        <img src='/img/sakura_banner.png' alt='logo' title='Sakura Florerias'/>
        <ul>
          <li><a href="#quienes-somos">Quiénes somos</a></li>
          <li><a href="#politica-privacidad">Política de privacidad</a></li>
        </ul>
        <div className="payment-icons">
            <img src="/img/Payment/cc-mastercard.svg" 
            title="Tarjetas MasterCard" alt="Mastercard" />
            <img src="/img/Payment/cc-visa.svg" 
            title="Tarjetas Visa" alt="Visa" />
            <img src="/img/Payment/cc-amex.svg" 
            title="Tarjetas American Exprés" alt="Amex" />
            <img src="/img/Payment/cc-paypal.svg" 
            title="PayPal" alt="Paypal" />
            <img src="/img/Payment/transferencia-de-dinero.png" 
            title="Transferencias" alt="Transferencias" />
        </div>
      </div>
      <div className="contact-form">
        <h3>Contáctanos</h3>
        <hr/> <p>Quieres dejarnos un mensaje, una sugerencia,<br/> una duda o solicitar mayor información, este es tú espacio.</p>
        <form>
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="correo@dominio.com" required />
          <textarea placeholder="Mensaje"></textarea>
          <button type="submit" required >Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contacto;
