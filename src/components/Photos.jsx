import { useState, useEffect } from 'react';

import foto1 from '../assets/photos/foto1.jpg';
import foto2 from '../assets/photos/foto2.jpeg';
import foto3 from '../assets/photos/foto3.jpeg';
import foto4 from '../assets/photos/foto4.jpeg';

export default function Photos({ onBack }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Aquí guardas todas las fotos
    const photos = [
        {
            image: foto1,
            text: 'Tú y Yo ❤️'
        },
        {
            image: foto2,
            text: 'Nuestro día ✨'
        },
        {
            image: foto3,
            text: 'Momentos felices 🌸'
        },
        {
            image: foto4,
            text: 'Recuerdos inolvidables 🌟'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-950 via-orange-900 to-rose-900 flex flex-col items-center justify-center p-4 py-20 relative overflow-x-hidden overflow-y-auto">

            {/* Botón volver */}
            <button
                onClick={onBack}
                className="fixed top-6 left-6 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 hover:scale-105"
            >
                ← Volver
            </button>

            {/* Título */}
            <h1 className="text-4xl md:text-5xl font-bold text-amber-100 mb-12 text-center drop-shadow-xl z-10">
                Nuestros Recuerdos 📸
            </h1>

            {/* Galería */}
            <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                {photos.map((photo, index) => (
                    <div
                        key={index}
                        className={`transition-all duration-1000 transform
                        ${isVisible
                            ? 'opacity-100 scale-100'
                            : 'opacity-0 scale-90'}
                        hover:scale-105 hover:rotate-0`}
                    >

                        <div className="bg-[#fcfcfc] p-4 md:p-6 pb-20 md:pb-24 rounded-sm shadow-2xl relative border border-gray-100 rotate-[-3deg]">

                            {/* Cintas */}
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-10 bg-amber-200/50 rotate-[2deg]"></div>

                            {/* Imagen */}
                            <div className="aspect-[4/5] overflow-hidden bg-gray-100 shadow-inner">
                                <img
                                    src={photo.image}
                                    alt={photo.text}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Texto */}
                            <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                                <p className="font-handwriting text-3xl text-gray-800 rotate-[-2deg]">
                                    {photo.text}
                                </p>
                            </div>

                        </div>
                    </div>
                ))}

            </div>

            {/* Mensaje */}
            <div className="relative z-10 mt-16 text-center">
                <p className="text-amber-200/80 font-serif italic text-lg md:text-xl">
                    "Coleccionando momentos a tu lado..."
                </p>
            </div>

        </div>
    );
}