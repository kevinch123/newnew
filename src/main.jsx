/**
 * 🚀 PUNTO DE ENTRADA DE LA APLICACIÓN
 * 
 * Este es el archivo que React carga primero.
 * 
 * CÓMO FUNCIONA:
 * 1. Importa React y ReactDOM (las librerías principales)
 * 2. Importa nuestro componente App (que contiene el MusicPlayer)
 * 3. Importa los estilos CSS
 * 4. Renderiza (muestra) la aplicación en el elemento con id="root" del HTML
 * 
 * NO NECESITAS MODIFICAR ESTE ARCHIVO
 * Todos tus cambios van en App.jsx o MusicPlayer.jsx
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Busca el elemento <div id="root"> en index.html
// y renderiza nuestra aplicación ahí
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

