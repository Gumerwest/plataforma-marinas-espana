import React from 'react';

interface HomeProps {
  onNavigate: (view: string, comisionId?: number, temaId?: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <img src="/images/marina-hero.jpg" alt="I Congreso de Marinas de España" className="hero-image" />
        <div className="hero-overlay">
          <h1>I Congreso de Marinas de España</h1>
          <p>Plataforma colaborativa para profesionales del sector náutico</p>
          <button className="hero-button" onClick={() => onNavigate('comisiones')}>
            Ver Comisiones
          </button>
        </div>
      </div>
      
      <div className="home-content">
        <div className="home-section">
          <h2>Sobre el Congreso</h2>
          <p>
            El I Congreso de Marinas de España es un espacio de encuentro para profesionales del sector náutico donde debatir sobre los retos y oportunidades que enfrenta nuestro sector. A través de comisiones de trabajo especializadas, buscamos generar propuestas concretas y consensuadas que impulsen el desarrollo sostenible de las marinas españolas.
          </p>
        </div>
        
        <div className="home-section">
          <h2>Comisiones de Trabajo</h2>
          <div className="comisiones-grid">
            <div className="comision-card" onClick={() => onNavigate('comision', 1)}>
              <img src="/images/sostenibilidad.jpg" alt="Sostenibilidad y Medio Ambiente" />
              <div className="comision-card-content">
                <h3>Sostenibilidad y Medio Ambiente</h3>
                <p>Estrategias para marinas sostenibles y respetuosas con el entorno marino.</p>
              </div>
            </div>
            
            <div className="comision-card" onClick={() => onNavigate('comision', 2)}>
              <img src="/images/digitalizacion.jpg" alt="Digitalización y Nuevas Tecnologías" />
              <div className="comision-card-content">
                <h3>Digitalización y Nuevas Tecnologías</h3>
                <p>Innovación tecnológica aplicada a la gestión y servicios en marinas.</p>
              </div>
            </div>
            
            <div className="comision-card" onClick={() => onNavigate('comision', 3)}>
              <img src="/images/normativa.jpg" alt="Normativa y Regulación" />
              <div className="comision-card-content">
                <h3>Normativa y Regulación</h3>
                <p>Análisis y propuestas sobre el marco legal que afecta a las marinas.</p>
              </div>
            </div>
            
            <div className="comision-card" onClick={() => onNavigate('comision', 4)}>
              <img src="/images/formacion.jpg" alt="Formación y Capacitación" />
              <div className="comision-card-content">
                <h3>Formación y Capacitación</h3>
                <p>Desarrollo de competencias profesionales en el sector náutico.</p>
              </div>
            </div>
            
            <div className="comision-card" onClick={() => onNavigate('comision', 5)}>
              <img src="/images/promocion.jpg" alt="Promoción y Marketing" />
              <div className="comision-card-content">
                <h3>Promoción y Marketing</h3>
                <p>Estrategias para la promoción del turismo náutico y marinas españolas.</p>
              </div>
            </div>
            
            <div className="comision-card" onClick={() => onNavigate('comision', 6)}>
              <img src="/images/infraestructuras.jpg" alt="Infraestructuras y Equipamientos" />
              <div className="comision-card-content">
                <h3>Infraestructuras y Equipamientos</h3>
                <p>Mejora y modernización de instalaciones portuarias deportivas.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="home-section">
          <h2>Calendario de Eventos</h2>
          <div className="eventos-list">
            <div className="evento-item">
              <div className="evento-fecha">
                <div className="evento-dia">15</div>
                <div className="evento-mes">JUN</div>
              </div>
              <div className="evento-info">
                <h3>Reunión Comisión de Sostenibilidad</h3>
                <p>Discusión sobre certificaciones ambientales para marinas</p>
                <div className="evento-meta">
                  <span>10:00 - 12:00</span>
                  <span>Online</span>
                </div>
              </div>
            </div>
            
            <div className="evento-item">
              <div className="evento-fecha">
                <div className="evento-dia">22</div>
                <div className="evento-mes">JUN</div>
              </div>
              <div className="evento-info">
                <h3>Reunión Comisión de Digitalización</h3>
                <p>Presentación de nuevas tecnologías para gestión de amarres</p>
                <div className="evento-meta">
                  <span>16:00 - 18:00</span>
                  <span>Online</span>
                </div>
              </div>
            </div>
            
            <div className="evento-item">
              <div className="evento-fecha">
                <div className="evento-dia">10</div>
                <div className="evento-mes">JUL</div>
              </div>
              <div className="evento-info">
                <h3>Sesión Plenaria</h3>
                <p>Presentación de avances de todas las comisiones</p>
                <div className="evento-meta">
                  <span>09:00 - 14:00</span>
                  <span>Madrid</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
