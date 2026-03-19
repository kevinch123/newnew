import { useState, useEffect, useRef } from 'react';
import songFile from '../assets/music/Carla Morrison Te Regalo (official video).mp3';

/**
 * 🎵 COMPONENTE PRINCIPAL: MusicPlayer
 * 
 * Este componente muestra una página con:
 * - Un reproductor de música
 * - Letra sincronizada que aparece al ritmo de la canción
 * - Animaciones y efectos visuales hermosos
 */
function MusicPlayer() {

    // ========================================
    // 📦 ESTADOS (State) - Variables que React observa y actualiza la UI cuando cambian
    // ========================================

    /**
     * isPlaying: Controla si la música está sonando o pausada
     * - true = música reproduciéndose
     * - false = música pausada
     */
    const [isPlaying, setIsPlaying] = useState(false);

    /**
     * currentTime: Guarda el tiempo actual de la canción en SEGUNDOS
     * Ejemplo: 45.5 significa que van 45.5 segundos de la canción
     * Lo usamos para saber qué línea de letra mostrar
     */
    const [currentTime, setCurrentTime] = useState(0);

    /**
     * currentLineIndex: Índice de la línea actual de la letra
     * Ejemplo: 0 = primera línea, 1 = segunda línea, etc.
     */
    const [currentLineIndex, setCurrentLineIndex] = useState(-1);

    // ========================================
    // 🎤 LETRA DE LA CANCIÓN
    // ========================================

    /**
     * AQUÍ PONES LA LETRA DE TU CANCIÓN
     * 
     * Cada objeto tiene:
     * - time: Tiempo en SEGUNDOS cuando debe aparecer esa línea
     * - text: El texto de la línea
     * 
     * CÓMO MODIFICAR:
     * 1. Pon tu canción y escúchala con un cronómetro
     * 2. Anota en qué segundo empieza cada línea
     * 3. Reemplaza estos datos con tu letra y tiempos
     * 
     * Ejemplo:
     * { time: 5.5, text: "Primera línea de tu canción" }
     * significa que a los 5.5 segundos aparece esa línea
     */
    // 💕 AQUÍ PON LA LETRA DE LA CANCIÓN QUE LE DEDICARÁS
    // Cambia estos textos y tiempos por la canción real
    const lyrics = [
        { time: 0, text: "💖 Te Regalo - Carla Morrison 💖" },
        { time: 19, text: "Déjame tomarte de la mano" },
        { time: 22, text: "Déjame mirarte a los ojos" },
        { time: 27, text: "Déjame a través de mi mirada" },
        { time: 29, text: "Darte todo mi esplendor" },
        { time: 35, text: "Déjame quedarme aquí" },
        { time: 38, text: "Déjame besarte ahí" },
        { time: 42, text: "Donde guardas tus secretos" },
        { time: 44, text: "Los más oscuros y los más bellos" },
        { time: 50, text: "Te regalo mis piernas" },
        { time: 55, text: "Recuesta tu cabeza en ellas" },
        { time: 58, text: "Te regalo mis fuerzas" },
        { time: 64, text: "Úsalas cada que no tengas" },
        { time: 69, text: "Te regalo los pedazos" },
        { time: 73, text: "Que a mi alma le sobran" },
        { time: 77, text: "Y aunque yo esté rota" },
        { time: 81, text: "Tú tienes mi amor" },
        { time: 88, text: "(🎶 Instrumental 🎶)" },
        { time: 91, text: "Déjame pintarte caricias" },
        { time: 95, text: "Déjame abrazarte en mis días" },
        { time: 100, text: "Déjame verte despertar" },
        { time: 103, text: "Para marcharme en paz" },
        { time: 111, text: "Te regalo mis piernas" },
        { time: 115, text: "Recuesta tu cabeza en ellas" },
        { time: 121, text: "Te regalo mis fuerzas" },
        { time: 125, text: "Úsalas cada que no tengas" },
        { time: 130, text: "Te regalo los pedazos" },
        { time: 135, text: "Que a mi alma le sobran" },
        { time: 138, text: "Y aunque yo esté rota" },
        { time: 141, text: "Tú tienes mi amor" },
        { time: 145, text: "(🎶 aah... aah... ah... 🎶)" },
        { time: 165, text: "Te regalo mis piernas" },
        { time: 170, text: "Recuesta tu cabeza en ellas" },
        { time: 175, text: "Te regalo mis fuerzas" },
        { time: 180, text: "Úsalas cada que no tengas" },
        { time: 185, text: "Te regalo los pedazos" },
        { time: 190, text: "Que a mi alma le sobran" },
        { time: 195, text: "Y aunque yo esté rota" },
        { time: 198, text: "Tú tienes mi amor" },
        { time: 204, text: "Tú tienes mi amor..." },
        { time: 209, text: "Tú tienes mi amor ✨" }
    ];

    // ========================================
    // 🔗 REFERENCIAS (Refs) - Para acceder directamente a elementos HTML
    // ========================================

    /**
     * audioRef: Referencia al elemento <audio> de HTML
     * Nos permite controlar la música (play, pause, obtener tiempo actual, etc.)
     * Es como tener un "control remoto" del reproductor
     */
    const audioRef = useRef(null);
    const lyricsContainerRef = useRef(null); // Referencia para hacer scroll en la letra

    // ========================================
    // 🎮 FUNCIONES - Acciones que puede hacer el usuario
    // ========================================

    /**
     * togglePlay: Alterna entre reproducir y pausar
     * 
     * CÓMO FUNCIONA:
     * 1. Si está pausada (isPlaying = false), la reproduce
     * 2. Si está sonando (isPlaying = true), la pausa
     */
    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                // Pausar la música
                audioRef.current.pause();
            } else {
                // Reproducir la música
                audioRef.current.play();
            }
            // Cambiar el estado (true <-> false)
            setIsPlaying(!isPlaying);
        }
    };

    /**
     * handleTimeUpdate: Se ejecuta constantemente mientras la música suena
     * 
     * CÓMO FUNCIONA:
     * 1. Obtiene el tiempo actual de la canción
     * 2. Actualiza el estado currentTime
     * 3. Busca qué línea de letra debe mostrarse según el tiempo
     */
    const handleTimeUpdate = () => {
        if (audioRef.current) {
            const time = audioRef.current.currentTime; // Tiempo actual en segundos
            setCurrentTime(time);

            // Buscar la línea correcta de la letra
            // Recorremos la letra de atrás hacia adelante
            for (let i = lyrics.length - 1; i >= 0; i--) {
                // Si el tiempo actual es mayor o igual al tiempo de esta línea
                // entonces esta es la línea que debe mostrarse
                if (time >= lyrics[i].time) {
                    setCurrentLineIndex(i);
                    break; // Salir del bucle, ya encontramos la línea
                }
            }
        }
    };

    /**
     * formatTime: Convierte segundos a formato MM:SS
     * Ejemplo: 125 segundos -> "02:05"
     */
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    // ========================================
    // ⚡ EFECTOS (Effects) - Código que se ejecuta automáticamente
    // ========================================

    /**
     * useEffect: Se ejecuta cuando el componente se monta (aparece en pantalla)
     * 
     * CÓMO FUNCIONA:
     * 1. Agrega un "listener" (escuchador) al audio
     * 2. Cada vez que el tiempo cambia, ejecuta handleTimeUpdate
     * 3. Cuando el componente se desmonta, limpia el listener
     */
    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            // Agregar el listener
            audio.addEventListener('timeupdate', handleTimeUpdate);

            // Función de limpieza (se ejecuta cuando el componente se destruye)
            return () => {
                audio.removeEventListener('timeupdate', handleTimeUpdate);
            };
        }
    }, []); // [] significa: ejecutar solo una vez al montar

    // Efecto para el autoscroll de la letra
    useEffect(() => {
        if (currentLineIndex >= 0 && lyricsContainerRef.current) {
            const activeLyric = lyricsContainerRef.current.children[currentLineIndex];
            if (activeLyric) {
                // Hace scroll para centrar la letra activa
                activeLyric.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }, [currentLineIndex]);

    // ========================================
    // 🎨 RENDERIZADO - Lo que se muestra en pantalla
    // ========================================

    // PERSONALIZA AQUÍ: Cambia estos textos
    const nombreDeElla = "Mi Amor"; // 👈 Cambia por su nombre
    const tituloCancion = "Te Regalo - Carla Morrison"; // 👈 Título de la canción

    return (
        <div className="music-player-container">
            {/* FONDO ROMÁNTICO CON GRADIENTE */}
            <div className="min-h-screen bg-gradient-to-br from-rose-950 via-pink-900 to-red-900 animate-gradient flex items-center justify-center p-4 relative overflow-hidden">

                {/* Corazones flotantes de fondo */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-10 left-10 text-6xl animate-float opacity-10">💖</div>
                    <div className="absolute top-1/4 right-20 text-5xl animate-float-delayed opacity-10">💕</div>
                    <div className="absolute bottom-20 left-1/4 text-7xl animate-float opacity-10">❤️</div>
                    <div className="absolute top-1/2 right-1/3 text-4xl animate-float-delayed opacity-10">💗</div>
                </div>

                {/* CONTENEDOR PRINCIPAL CON GLASSMORPHISM ROMÁNTICO */}
                <div className="relative z-10 max-w-2xl w-full backdrop-blur-xl bg-white/10 rounded-3xl border border-pink-200/30 shadow-2xl shadow-pink-500/20 p-8 md:p-12">

                    {/* DEDICATORIA */}
                    <div className="text-center mb-8">
                        <div className="text-6xl mb-4 animate-pulse">💖</div>
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 animate-fade-in">
                            {tituloCancion}
                        </h1>
                        <p className="text-xl text-pink-200 animate-fade-in-delayed">
                            Dedicada para {nombreDeElla} ✨
                        </p>
                    </div>

                    {/* 
            CONTENEDOR DE LA LETRA
            - h-64: altura fija
            - overflow-y-auto: scroll vertical si hay mucho texto
            - mb-8: margen inferior
          */}
                    <div
                        ref={lyricsContainerRef}
                        className="lyrics-container h-64 overflow-y-auto mb-8 flex flex-col items-center py-28 space-y-4 no-scrollbar scroll-smooth"
                    >
                        {lyrics.map((line, index) => (
                            <div
                                key={index}
                                className={`
                  lyric-line transition-all duration-700 text-center px-4
                  ${index === currentLineIndex
                                        ? 'text-3xl md:text-4xl font-bold text-white scale-110 lyric-active'
                                        : index < currentLineIndex
                                            ? 'text-lg text-gray-400 opacity-50'
                                            : 'text-lg text-gray-500 opacity-30'
                                    }
                `}
                            >
                                {line.text}
                            </div>
                        ))}
                    </div>

                    {/* BARRA DE PROGRESO ROMÁNTICA */}
                    <div className="mb-6">
                        <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                            <div
                                className="bg-gradient-to-r from-pink-400 to-rose-500 h-full transition-all duration-300 rounded-full shadow-lg shadow-pink-500/50"
                                style={{
                                    width: audioRef.current
                                        ? `${(currentTime / audioRef.current.duration) * 100}%`
                                        : '0%'
                                }}
                            />
                        </div>
                        {/* Tiempo actual / Duración total */}
                        <div className="flex justify-between text-sm text-pink-200 mt-2">
                            <span>{formatTime(currentTime)}</span>
                            <span>
                                {audioRef.current && audioRef.current.duration
                                    ? formatTime(audioRef.current.duration)
                                    : '00:00'}
                            </span>
                        </div>
                    </div>

                    {/* CONTROLES DEL REPRODUCTOR */}
                    <div className="flex justify-center items-center space-x-4">
                        <button
                            onClick={togglePlay}
                            className="
                bg-gradient-to-r from-pink-500 to-rose-600 
                hover:from-pink-400 hover:to-rose-500
                text-white font-bold py-4 px-8 rounded-full
                transform hover:scale-105 active:scale-95
                transition-all duration-300
                shadow-lg shadow-pink-500/50
                flex items-center space-x-2
              "
                        >
                            <span className="text-2xl">
                                {isPlaying ? '⏸️' : '▶️'}
                            </span>
                            <span className="text-lg">
                                {isPlaying ? 'Pausar' : 'Reproducir'}
                            </span>
                        </button>
                    </div>

                    {/* ELEMENTO DE AUDIO */}
                    <audio
                        ref={audioRef}
                        src={songFile}
                        onEnded={() => setIsPlaying(false)}
                    />

                    {/* MENSAJE ROMÁNTICO FINAL */}
                    <div className="mt-8 p-4 bg-pink-500/10 rounded-xl border border-pink-200/20">
                        <p className="text-sm text-pink-100 text-center italic">
                            💕 Cada palabra de esta canción me hace pensar en ti 💕
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MusicPlayer;
