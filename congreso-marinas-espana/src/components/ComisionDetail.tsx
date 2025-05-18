import React from 'react';

interface ComisionDetailProps {
  comision: {
    id: number;
    nombre: string;
    imagen: string;
    descripcion: string;
    lider: string;
    miembros: number;
    temas: Array<{
      id: string;
      titulo: string;
      autor?: string;
      fecha?: string;
    }>;
  };
  onNavigate: (view: string, comisionId?: number, temaId?: string) => void;
}

const ComisionDetail: React.FC<ComisionDetailProps> = ({ comision, onNavigate }) => {
  return (
    <div className="comision-detail">
      <h1>{comision.nombre}</h1>
      
      <div className="comision-header">
        <div className="comision-image">
          <img src={comision.imagen} alt={comision.nombre} />
        </div>
        <div className="comision-info-detail">
          <p>{comision.descripcion}</p>
          <div className="comision-meta">
            <div className="comision-meta-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span>Líder: {comision.lider}</span>
            </div>
            <div className="comision-meta-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <span>{comision.miembros} miembros</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="temas-list">
        <h2>Temas de Discusión</h2>
        {comision.temas.map((tema) => (
          <div 
            key={tema.id} 
            className="tema-item"
            onClick={() => onNavigate('tema', comision.id, tema.id)}
          >
            <div className="tema-header">
              <div className="tema-title">{tema.titulo}</div>
            </div>
          </div>
        ))}
        
        <button className="new-tema-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="16"></line>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
          Proponer Nuevo Tema
        </button>
      </div>
    </div>
  );
};

export default ComisionDetail;
