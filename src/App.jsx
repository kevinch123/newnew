/**
 * 📱 APP PRINCIPAL
 * 
 * Este es el componente raíz de la aplicación.
 * Maneja la navegación entre diferentes pantallas.
 * 
 * CÓMO FUNCIONA:
 * 1. Usa useState para controlar qué pantalla mostrar
 * 2. Home es la pantalla principal
 * 3. MusicPlayer es el reproductor de música
 */

import { useState } from 'react';
import Home from './components/Home';
import MusicPlayer from './components/MusicPlayer';
import Letters from './components/Letters';
import YellowFlowers from './components/YellowFlowers';
import Photos from './components/Photos';

function App() {
  // Estado para controlar qué pantalla mostrar
  // 'home' = pantalla principal
  // 'music' = reproductor de música
  // 'letter' = cartas
  const [currentPage, setCurrentPage] = useState('home');

  // Función para cambiar de página
  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app-container">
      {/* Mostrar la pantalla según el estado */}
      {currentPage === 'home' && (
        <Home onNavigate={handleNavigate} />
      )}

      {currentPage === 'music' && (
        <div className="relative">
          <BackButton onClick={() => handleNavigate('home')} />
          <MusicPlayer />
        </div>
      )}

      {/* PANTALLA DE CARTAS */}
      {currentPage === 'letter' && (
        <Letters onBack={() => handleNavigate('home')} />
      )}

      {/* PANTALLA RECUERDOS (FOTOS) */}
      {currentPage === 'photos' && (
        <Photos onBack={() => handleNavigate('home')} />
      )}

      {/* PANTALLA FLORES AMARILLAS */}
      {currentPage === 'flowers' && (
        <YellowFlowers onBack={() => handleNavigate('home')} />
      )}
    </div>
  );
}

// Componente pequeño para el botón de volver (para no repetir código)
function BackButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed top-6 left-6 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 hover:scale-105"
    >
      <span>←</span> Volver
    </button>
  );
}

export default App;
