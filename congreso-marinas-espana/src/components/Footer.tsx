import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>I Congreso de Marinas de España</h3>
          <p>Plataforma colaborativa para profesionales del sector náutico</p>
        </div>
        
        <div className="footer-section">
          <h3>Enlaces</h3>
          <ul>
            <li>Inicio</li>
            <li>Comisiones</li>
            <li>Calendario</li>
            <li>Documentos</li>
            <li>Contacto</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Email: info@congresomarinaespana.es</p>
          <p>Teléfono: +34 900 123 456</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 I Congreso de Marinas de España. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
