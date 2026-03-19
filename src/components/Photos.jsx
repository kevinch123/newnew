import { useState, useEffect } from 'react';
import foto1 from '../assets/photos/foto1.jpg';

export default function Photos({ onBack }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-950 via-orange-900 to-rose-900 flex flex-col items-center justify-center p-4 py-20 relative overflow-x-hidden overflow-y-auto">
            
            {/* Botón Volver */}
            <button
                onClick={onBack}
                className="fixed top-6 left-6 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 hover:scale-105"
            >
                <span>←</span> Volver
            </button>

            {/* Fondo decorativo (luces desenfocadas) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-float"></div>
                {/* Textura sutil en el fondo */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
            </div>

            <div className={`relative z-10 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                {/* Título */}
                <h1 className="text-4xl md:text-5xl font-bold text-amber-100 mb-12 text-center drop-shadow-xl">
                    Nuestros Recuerdos 📸
                </h1>
            </div>

            {/* Contenedor de la Galería */}
            <div className="relative z-10 w-full max-w-lg flex flex-col items-center gap-12">
                
                {/* Foto estilo Polaroid */}
                <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 scale-100 rotate-[-3deg]' : 'opacity-0 scale-90 rotate-0'} hover:rotate-0 hover:scale-[1.02] duration-500 cursor-pointer`}>
                    
                    <div className="bg-[#fcfcfc] p-4 md:p-6 pb-20 md:pb-24 rounded-sm shadow-2xl relative w-full border border-gray-100">
                        {/* Cinta adhesiva (Washi tape) en la parte de arriba */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-10 bg-amber-200/50 rotate-[2deg] backdrop-blur-sm shadow-sm z-20"></div>
                        <div className="absolute -top-3 right-4 transform w-20 h-6 bg-rose-200/50 rotate-[-15deg] backdrop-blur-sm shadow-sm z-20 opacity-60"></div>
                        
                        {/* Imagen */}
                        <div className="aspect-[4/5] overflow-hidden bg-gray-100 shadow-inner">
                            <img 
                                src={foto1} 
                                alt="Nuestro recuerdo especial" 
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        
                        {/* Mensaje escrito a mano en la parte blanca inferior de la polaroid */}
                        <div className="absolute bottom-6 md:bottom-8 left-0 right-0 flex justify-center items-center">
                            <p className="font-handwriting text-3xl md:text-4xl text-gray-800 opacity-90 rotate-[-2deg]">
                                Tú y Yo ❤️
                            </p>
                        </div>
                    </div>

                </div>

            </div>

            {/* Mensaje inferior */}
            <div className={`relative z-10 mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <p className="text-amber-200/80 font-serif italic text-lg md:text-xl">
                    "Coleccionando momentos a tu lado..."
                </p>
            </div>

        </div>
    );
}
