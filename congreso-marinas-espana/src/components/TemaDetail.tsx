import React from 'react';

interface TemaDetailProps {
  tema: {
    id: string;
    titulo: string;
    autor: string;
    fecha: string;
    comisionId: number;
    problematica?: string;
    situacionActual?: string;
    documentos?: Array<{
      nombre: string;
      autor: string;
      fecha: string;
    }>;
    comentarios?: Array<{
      autor: string;
      fecha: string;
      texto: string;
    }>;
    votaciones?: {
      favor: number;
      contra: number;
      abstencion: number;
    };
  };
  onNavigate: (view: string, comisionId?: number, temaId?: string) => void;
}

const TemaDetail: React.FC<TemaDetailProps> = ({ tema, onNavigate }) => {
  return (
    <div className="tema-detail">
      <h1>{tema.titulo}</h1>
      
      <div className="tema-meta">
        <div className="tema-meta-item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span>Propuesto por: {tema.autor}</span>
        </div>
        <div className="tema-meta-item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <span>Fecha: {tema.fecha}</span>
        </div>
        <button 
          className="volver-button"
          onClick={() => onNavigate('comision', tema.comisionId)}
        >
          Volver a la Comisión
        </button>
      </div>
      
      <div className="tema-content">
        <div className="tema-section">
          <h2>Problemática</h2>
          <p>{tema.problematica}</p>
        </div>
        
        <div className="tema-section">
          <h2>Situación Actual</h2>
          <p>{tema.situacionActual}</p>
        </div>
        
        <div className="tema-section">
          <h2>Documentación</h2>
          <div className="documentos-list">
            {tema.documentos && tema.documentos.map((doc, index) => (
              <div key={index} className="documento-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <div className="documento-info">
                  <div className="documento-nombre">{doc.nombre}</div>
                  <div className="documento-meta">
                    <span>Autor: {doc.autor}</span>
                    <span>Fecha: {doc.fecha}</span>
                  </div>
                </div>
                <button className="documento-download">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </button>
              </div>
            ))}
            
            <button className="upload-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
              Subir Documento
            </button>
          </div>
        </div>
        
        <div className="tema-section">
          <h2>Comentarios</h2>
          <div className="comentarios-list">
            {tema.comentarios && tema.comentarios.map((comentario, index) => (
              <div key={index} className="comentario-item">
                <div className="comentario-header">
                  <div className="comentario-autor">{comentario.autor}</div>
                  <div className="comentario-fecha">{comentario.fecha}</div>
                </div>
                <div className="comentario-texto">{comentario.texto}</div>
              </div>
            ))}
            
            <div className="nuevo-comentario">
              <textarea placeholder="Escribe tu comentario..."></textarea>
              <button className="comentario-button">Enviar Comentario</button>
            </div>
          </div>
        </div>
        
        <div className="tema-section">
          <h2>Votaciones</h2>
          <div className="votaciones-container">
            <div className="votacion-item">
              <button className="votacion-button favor">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                </svg>
                A favor
              </button>
              <div className="votacion-count">{tema.votaciones?.favor || 0}</div>
            </div>
            
            <div className="votacion-item">
              <button className="votacion-button contra">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
                </svg>
                En contra
              </button>
              <div className="votacion-count">{tema.votaciones?.contra || 0}</div>
            </div>
            
            <div className="votacion-item">
              <button className="votacion-button abstencion">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
                Abstención
              </button>
              <div className="votacion-count">{tema.votaciones?.abstencion || 0}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemaDetail;
