import React from 'react';

interface HeaderProps {
  onNavigate: (view: string, comisionId?: number, temaId?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="header">
      <div className="logo" onClick={() => onNavigate('home')}>
        <img src="/images/logo.png" alt="I Congreso de Marinas de España" />
      </div>
      <nav className="main-nav">
        <ul>
          <li onClick={() => onNavigate('home')}>Inicio</li>
          <li onClick={() => onNavigate('comisiones')}>Comisiones</li>
          <li>Calendario</li>
          <li>Documentos</li>
          <li>Contacto</li>
        </ul>
      </nav>
      <div className="user-actions">
        <button className="login-button">Iniciar Sesión</button>
        <button className="register-button">Registro</button>
      </div>
    </header>
  );
};

export default Header;
