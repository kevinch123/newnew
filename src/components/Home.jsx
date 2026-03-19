import { useState, useEffect } from 'react';

/**
 * 💕 COMPONENTE: Home (Pantalla de Bienvenida Romántica)
 * 
 * Una dedicatoria especial llena de amor
 * Con corazones flotantes y mensaje romántico
 */
function Home({ onNavigate }) {
    const [isVisible, setIsVisible] = useState(false);

    // Efecto de aparición al cargar
    useEffect(() => {
        setIsVisible(true);
    }, []);

    // PERSONALIZA AQUÍ: Cambia el nombre de tu chica
    const nombreDeElla = "Mi Amor"; // 👈 Cambia esto por su nombre

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-950 via-pink-900 to-red-900 animate-gradient flex items-center justify-center p-4 py-10 overflow-x-hidden overflow-y-auto relative custom-scrollbar">

            {/* Corazones flotantes decorativos */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Corazones grandes con blur */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-500/30 rounded-full blur-3xl animate-float-delayed"></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-500/30 rounded-full blur-3xl animate-pulse"></div>

                {/* Corazones emoji flotantes */}
                <div className="absolute top-10 left-1/4 text-6xl animate-float opacity-20">💖</div>
                <div className="absolute top-1/3 right-1/4 text-5xl animate-float-delayed opacity-20">💕</div>
                <div className="absolute bottom-1/4 left-1/3 text-7xl animate-float opacity-20">❤️</div>
                <div className="absolute top-2/3 right-1/3 text-4xl animate-float-delayed opacity-20">💗</div>
                <div className="absolute bottom-10 right-10 text-6xl animate-float opacity-20">💝</div>
            </div>

            {/* Contenedor principal */}
            <div className={`relative z-10 max-w-4xl w-full transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>

                {/* Tarjeta principal con glassmorphism */}
                <div className="backdrop-blur-2xl bg-white/10 rounded-3xl border border-pink-200/30 shadow-2xl shadow-pink-500/20 p-6 md:p-12 my-auto">

                    {/* Corazón principal */}
                    <div className="text-center mb-6 md:mb-8">
                        <div className="text-6xl md:text-8xl animate-pulse mb-2 md:mb-6">
                            💖
                        </div>
                    </div>

                    {/* Mensaje romántico */}
                    <div className="text-center mb-8 md:mb-12">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
                            Para <span className="bg-gradient-to-r from-pink-300 via-rose-300 to-red-300 bg-clip-text text-transparent break-words">
                                {nombreDeElla}
                            </span>
                        </h1>
                        <p className="text-lg md:text-2xl text-pink-100 animate-fade-in-delayed leading-relaxed">
                            Hice esto especialmente para ti ✨
                        </p>
                        <p className="text-sm md:text-xl text-pink-200/80 mt-2 md:mt-4 animate-fade-in-delayed hidden sm:block">
                            Porque eres especial y mereces algo único
                        </p>
                    </div>

                    {/* 
                      GRID DE BOTONES 
                      Aquí organizamos los botones en columnas.
                      - grid-cols-2: En móvil se ven 2 columnas (2x2)
                      - md:grid-cols-4: En pc se ven 4 en fila, o md:grid-cols-2 para 2x2 grande
                      - gap-3 md:gap-6: Espacio entre botones
                    */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-8 w-full max-w-2xl mx-auto">

                        {/* ==========================================
                            BOTÓN 1: MÚSICA (Estilo Rosa/Rojo)
                           ========================================== */}
                        <button
                            onClick={() => onNavigate('music')}
                            className="
                                group relative overflow-hidden rounded-2xl p-4 md:p-6 transition-all duration-300 transform hover:scale-105
                                bg-gradient-to-br from-pink-500 to-rose-600 
                                shadow-lg shadow-pink-500/50 hover:shadow-pink-500/80
                            "
                        >
                            {/* Capa de brillo que pasa al hacer hover */}
                            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

                            <div className="relative z-10 flex flex-col items-center text-center">
                                <span className="text-3xl md:text-4xl mb-2">🎵</span>
                                <h3 className="text-base md:text-xl font-bold text-white">Canción</h3>
                                <p className="text-[10px] md:text-xs text-pink-100 mt-1 line-clamp-1">Nuestra melodía</p>
                            </div>
                        </button>

                        {/* ==========================================
                            BOTÓN 2: CARTA (Estilo Violeta/Indigo)
                           ========================================== */}
                        <button
                            onClick={() => onNavigate('letter')}
                            className="
                                group relative overflow-hidden rounded-2xl p-4 md:p-6 transition-all duration-300 transform hover:scale-105
                                bg-gradient-to-br from-violet-500 to-indigo-600
                                shadow-lg shadow-violet-500/50 hover:shadow-violet-500/80
                            "
                        >
                            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

                            <div className="relative z-10 flex flex-col items-center text-center">
                                <span className="text-3xl md:text-4xl mb-2">💌</span>
                                <h3 className="text-base md:text-xl font-bold text-white">Carta</h3>
                                <p className="text-[10px] md:text-xs text-violet-100 mt-1 line-clamp-1">Palabras para ti</p>
                            </div>
                        </button>

                        {/* ==========================================
                            BOTÓN 3: RECUERDOS (Estilo Amber/Naranja)
                           ========================================== */}
                        <button
                            onClick={() => onNavigate('photos')}
                            className="
                                group relative overflow-hidden rounded-2xl p-4 md:p-6 transition-all duration-300 transform hover:scale-105
                                bg-gradient-to-br from-amber-400 to-orange-500
                                shadow-lg shadow-orange-500/50 hover:shadow-orange-500/80
                            "
                        >
                            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

                            <div className="relative z-10 flex flex-col items-center text-center">
                                <span className="text-3xl md:text-4xl mb-2">📸</span>
                                <h3 className="text-base md:text-xl font-bold text-white">Recuerdos</h3>
                                <p className="text-[10px] md:text-xs text-orange-100 mt-1 line-clamp-1">Momentos únicos</p>
                            </div>
                        </button>

                        {/* ==========================================
                            BOTÓN 4: FLORES (Estilo Amarillo)
                           ========================================== */}
                        <button
                            onClick={() => onNavigate('flowers')}
                            className="
                                group relative overflow-hidden rounded-2xl p-4 md:p-6 transition-all duration-300 transform hover:scale-105
                                bg-gradient-to-br from-yellow-400 to-yellow-600
                                shadow-lg shadow-yellow-500/50 hover:shadow-yellow-500/80
                            "
                        >
                            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

                            <div className="relative z-10 flex flex-col items-center text-center">
                                <span className="text-3xl md:text-4xl mb-2">🌻</span>
                                <h3 className="text-base md:text-xl font-bold text-white">Algo especial</h3>
                                <p className="text-[10px] md:text-xs text-yellow-100 mt-1 line-clamp-1">Para ti mi amor</p>
                            </div>
                        </button>

                    </div>

                    {/* Mensaje adicional */}
                    <div className="text-center pt-6 md:pt-8 border-t border-pink-200/20">
                        <p className="text-pink-200 text-sm md:text-lg italic px-2">
                            "Cada línea de esta canción me recuerda a ti" 💫
                        </p>
                    </div>
                </div>

                {/* Firma romántica */}
                <div className="text-center mt-6 md:mt-8 pb-4">
                    <p className="text-pink-200 drop-shadow-md text-sm md:text-lg">
                        Hecho con todo mi ❤️ para ti
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;
