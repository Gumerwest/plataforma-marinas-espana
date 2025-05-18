import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './components/Home';
import ComisionDetail from './components/ComisionDetail';
import TemaDetail from './components/TemaDetail';

// Datos de ejemplo para la demostración
const comisiones = [
  {
    id: 1,
    nombre: "Sostenibilidad y Medio Ambiente",
    imagen: "/images/sostenibilidad.jpg",
    descripcion: "Comisión dedicada a promover prácticas sostenibles y respetuosas con el medio ambiente en las marinas españolas. Trabajamos en la implementación de certificaciones ambientales, gestión de residuos, eficiencia energética y protección del entorno marino.",
    lider: "Ana Martínez",
    miembros: 18,
    temas: [
      {
        id: "1-1",
        titulo: "Certificaciones ambientales para marinas",
        autor: "Carlos Rodríguez",
        fecha: "10/05/2025",
        comisionId: 1,
        problematica: "Las marinas españolas necesitan adaptarse a estándares ambientales cada vez más exigentes, pero existe confusión sobre qué certificaciones son más adecuadas y cómo implementarlas de manera eficiente.",
        situacionActual: "Actualmente, menos del 30% de las marinas españolas cuentan con algún tipo de certificación ambiental. Las más comunes son la Bandera Azul y la ISO 14001, pero su implementación es desigual y en muchos casos superficial.",
        documentos: [
          {
            nombre: "Comparativa de certificaciones ambientales.pdf",
            autor: "Carlos Rodríguez",
            fecha: "05/05/2025"
          },
          {
            nombre: "Guía de implementación ISO 14001.pdf",
            autor: "María López",
            fecha: "28/04/2025"
          }
        ],
        comentarios: [
          {
            autor: "Elena Gómez",
            fecha: "12/05/2025",
            texto: "En nuestra marina hemos implementado la ISO 14001 y ha sido un proceso largo pero muy beneficioso. Recomendaría empezar con una auditoría ambiental completa antes de decidir qué certificación perseguir."
          },
          {
            autor: "Juan Pérez",
            fecha: "13/05/2025",
            texto: "La Bandera Azul tiene mucho reconocimiento entre los usuarios, pero la ISO 14001 ofrece un enfoque más sistemático para la gestión ambiental. ¿Sería posible desarrollar una guía que combine los requisitos de ambas?"
          }
        ],
        votaciones: {
          favor: 12,
          contra: 2,
          abstencion: 4
        }
      },
      {
        id: "1-2",
        titulo: "Gestión de residuos en puertos deportivos",
        autor: "María López",
        fecha: "08/05/2025",
        comisionId: 1
      }
    ]
  },
  {
    id: 2,
    nombre: "Digitalización y Nuevas Tecnologías",
    imagen: "/images/digitalizacion.jpg",
    descripcion: "Comisión enfocada en la transformación digital de las marinas españolas. Exploramos soluciones tecnológicas para mejorar la gestión, la experiencia del usuario y la eficiencia operativa de los puertos deportivos.",
    lider: "Roberto Sánchez",
    miembros: 15,
    temas: [
      {
        id: "2-1",
        titulo: "Sistemas de reserva online de amarres",
        autor: "Pablo Martín",
        fecha: "07/05/2025",
        comisionId: 2
      },
      {
        id: "2-2",
        titulo: "IoT aplicado a la monitorización de instalaciones",
        autor: "Laura Fernández",
        fecha: "09/05/2025",
        comisionId: 2
      }
    ]
  },
  {
    id: 3,
    nombre: "Normativa y Regulación",
    imagen: "/images/normativa.jpg",
    descripcion: "Comisión dedicada al análisis y propuestas sobre el marco legal que afecta a las marinas españolas. Trabajamos para armonizar normativas, simplificar trámites administrativos y mejorar la seguridad jurídica del sector.",
    lider: "Javier López",
    miembros: 12,
    temas: [
      {
        id: "3-1",
        titulo: "Armonización de normativas autonómicas",
        autor: "Carmen Ruiz",
        fecha: "05/05/2025",
        comisionId: 3
      }
    ]
  },
  {
    id: 4,
    nombre: "Formación y Capacitación",
    imagen: "/images/formacion.jpg",
    descripcion: "Comisión enfocada en el desarrollo de competencias profesionales en el sector náutico. Promovemos programas formativos, certificaciones profesionales y colaboraciones con centros educativos para mejorar la cualificación del personal.",
    lider: "Lucía Fernández",
    miembros: 14,
    temas: [
      {
        id: "4-1",
        titulo: "Programas de formación para personal de marinas",
        autor: "Daniel García",
        fecha: "11/05/2025",
        comisionId: 4
      }
    ]
  },
  {
    id: 5,
    nombre: "Promoción y Marketing",
    imagen: "/images/promocion.jpg",
    descripcion: "Comisión dedicada a estrategias para la promoción del turismo náutico y marinas españolas. Trabajamos en campañas de marketing, presencia en ferias internacionales y desarrollo de la marca 'Marinas de España'.",
    lider: "Sofía Martínez",
    miembros: 16,
    temas: [
      {
        id: "5-1",
        titulo: "Estrategia de marca para Marinas de España",
        autor: "Alejandro Ruiz",
        fecha: "06/05/2025",
        comisionId: 5
      }
    ]
  },
  {
    id: 6,
    nombre: "Infraestructuras y Equipamientos",
    imagen: "/images/infraestructuras.jpg",
    descripcion: "Comisión enfocada en la mejora y modernización de instalaciones portuarias deportivas. Analizamos tendencias en diseño, materiales, equipamientos y soluciones constructivas para marinas más eficientes y funcionales.",
    lider: "Miguel Torres",
    miembros: 17,
    temas: [
      {
        id: "6-1",
        titulo: "Nuevos materiales para pantalanes flotantes",
        autor: "Isabel Sánchez",
        fecha: "08/05/2025",
        comisionId: 6
      }
    ]
  }
];

// Función para encontrar un tema específico
const findTema = (comisionId: number, temaId: string) => {
  const comision = comisiones.find(c => c.id === comisionId);
  if (!comision) return null;
  
  return comision.temas.find(t => t.id === temaId);
};

function App() {
  const [view, setView] = useState('home');
  const [selectedComision, setSelectedComision] = useState<any>(null);
  const [selectedTema, setSelectedTema] = useState<any>(null);

  const handleNavigate = (to: string, comisionId?: number, temaId?: string) => {
    setView(to);
    
    if (to === 'comision' && comisionId) {
      const comision = comisiones.find(c => c.id === comisionId);
      setSelectedComision(comision);
      setSelectedTema(null);
    } else if (to === 'tema' && comisionId && temaId) {
      const comision = comisiones.find(c => c.id === comisionId);
      const tema = findTema(comisionId, temaId);
      setSelectedComision(comision);
      setSelectedTema(tema);
    } else if (to === 'home' || to === 'comisiones') {
      setSelectedComision(null);
      setSelectedTema(null);
    }
  };

  const renderContent = () => {
    switch (view) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'comisiones':
        return (
          <div className="comisiones-container">
            <h1>Comisiones de Trabajo</h1>
            <div className="comisiones-grid">
              {comisiones.map(comision => (
                <div 
                  key={comision.id} 
                  className="comision-card" 
                  onClick={() => handleNavigate('comision', comision.id)}
                >
                  <img src={comision.imagen} alt={comision.nombre} />
                  <div className="comision-card-content">
                    <h3>{comision.nombre}</h3>
                    <p>{comision.descripcion.substring(0, 100)}...</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'comision':
        return selectedComision ? (
          <ComisionDetail 
            comision={selectedComision} 
            onNavigate={handleNavigate} 
          />
        ) : (
          <div>Comisión no encontrada</div>
        );
      case 'tema':
        return selectedTema ? (
          <TemaDetail 
            tema={selectedTema} 
            onNavigate={handleNavigate} 
          />
        ) : (
          <div>Tema no encontrado</div>
        );
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="app">
      <Header onNavigate={handleNavigate} />
      <div className="main-container">
        <Sidebar comisiones={comisiones} onNavigate={handleNavigate} />
        <main className="content">
          {renderContent()}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
