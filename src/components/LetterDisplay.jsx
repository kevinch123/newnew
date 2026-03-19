
import { useEffect, useState } from 'react';

/**
 * 💌 COMPONENTE: LetterDisplay (Vista de Lectura de Carta)
 * 
 * Muestra el contenido de la carta con una animación de apertura
 * y un diseño elegante de papel.
 */
function LetterDisplay({ letter, onClose }) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Pequeño delay para la animación de entrada
        const timer = setTimeout(() => setIsOpen(true), 100);
        return () => clearTimeout(timer);
    }, []);

    // Cerramos también si se presiona la tecla Escape para mayor accesibilidad
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 py-12 md:p-8">
            {/* Overlay oscuro con blur */}
            <div
                className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-1000 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                onClick={onClose}
            ></div>

            {/* Botón de cerrar fijo visible siempre (incluso si la carta es muy larga) */}
            <button
                onClick={onClose}
                className="fixed top-4 right-4 md:top-8 md:right-8 z-[60] text-white/80 hover:text-white hover:scale-110 transition-all bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md shadow-xl border border-white/20"
                aria-label="Cerrar carta"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Contenedor de la carta con altura máxima responsiva */}
            <div className={`relative w-full max-w-2xl max-h-[85vh] flex flex-col transform transition-all duration-1000 ${isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'}`}>

                {/* El Papel de la Carta con scroll interno */}
                <div className="bg-[#fffdf7] rounded-sm shadow-2xl relative rotate-1 hover:rotate-0 transition-transform duration-500 overflow-y-auto max-h-[85vh]">

                    {/* Decoración de borde superior (Washi tape style) */}
                    <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-r from-pink-200/50 via-rose-200/50 to-pink-200/50 opacity-50"></div>

                    {/* Textura de papel sutil */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")' }}>
                    </div>

                    <div className="p-6 md:p-12 pt-12 md:pt-16 relative z-10">
                        {/* Fecha */}
                        <div className="text-right text-rose-400 font-serif italic mb-6 md:mb-8 opacity-80 text-sm md:text-base">
                            {letter.date}
                        </div>

                        {/* Título */}
                        <h2 className="text-2xl md:text-4xl font-serif text-rose-900 mb-6 md:mb-8 text-center font-bold px-2">
                            {letter.title}
                        </h2>

                        {/* Contenido */}
                        <div className="prose prose-rose max-w-none px-2">
                            {letter.content.split('\n').map((paragraph, index) => (
                                <p key={index} className="text-gray-700 text-base md:text-lg leading-relaxed font-serif mb-4 first-letter:text-4xl first-letter:text-rose-500 first-letter:font-bold first-letter:float-left first-letter:mr-2">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Despedida */}
                        <div className="mt-10 md:mt-12 text-center pb-8">
                            <p className="text-rose-400 font-handwriting text-2xl rotate-[-2deg]">
                                de todo corazón,
                            </p>
                            <p className="text-gray-600 mt-2 font-serif font-bold text-sm md:text-base">
                                {letter.author || 'kevin'}
                            </p>
                        </div>

                        {/* Decoración inferior */}
                        <div className="flex justify-center mt-4 md:mt-6 text-rose-300 gap-4">
                            <span>❤</span><span>❤</span><span>❤</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LetterDisplay;
