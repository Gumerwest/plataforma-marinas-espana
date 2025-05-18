import React from 'react';

interface SidebarProps {
  comisiones: Array<{
    id: number;
    nombre: string;
  }>;
  onNavigate: (view: string, comisionId?: number, temaId?: string) => void;
  currentComision?: number;
}

const Sidebar: React.FC<SidebarProps> = ({ onNavigate, comisiones, currentComision }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h3>Comisiones</h3>
        <ul className="sidebar-list">
          {comisiones.map(comision => (
            <li 
              key={comision.id} 
              className={currentComision === comision.id ? 'active' : ''}
              onClick={() => onNavigate('comision', comision.id)}
            >
              {comision.nombre}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="sidebar-section">
        <h3>Enlaces Rápidos</h3>
        <ul className="sidebar-list">
          <li onClick={() => onNavigate('home')}>Inicio</li>
          <li onClick={() => onNavigate('comisiones')}>Todas las Comisiones</li>
          <li>Calendario</li>
          <li>Documentos</li>
          <li>Contacto</li>
        </ul>
      </div>
      
      <div className="sidebar-section">
        <h3>Próximos Eventos</h3>
        <div className="sidebar-events">
          <div className="sidebar-event">
            <div className="event-date">15 JUN</div>
            <div className="event-title">Reunión Comisión de Sostenibilidad</div>
          </div>
          <div className="sidebar-event">
            <div className="event-date">22 JUN</div>
            <div className="event-title">Reunión Comisión de Digitalización</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
