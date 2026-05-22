
import { useState, useEffect } from 'react';
import LetterDisplay from './LetterDisplay';

/**
 * 💌 COMPONENTE: Letters (Colección de Cartas)
 * 
 * Muestra una galería de cartas/sobres.
 * Al hacer clic en una, se abre la lectura detallada.
 */
function Letters({ onBack }) {
    const [selectedLetter, setSelectedLetter] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // DATOS DE EJEMPLO DE LAS CARTAS
    // Puedes agregar más cartas aquí
    const letters = [
        {
            id: 1,
            title: "Para esa nena linda",
            date: "----",
            preview: "He vivido muchas cosas, pero contigo han sido de las mejores...",
            content: `He vivido muchas cosas, pero contigo han sido de las mejores.
            Sin darme cuenta, te fuiste volviendo alguien muy especial para mí.

            Me gusta pensar en todo lo que podemos vivir juntos, en los momentos simples que terminan siendo los más bonitos.
            Eres de esas personas que se quedan en la mente durante el día y sacan sonrisas sin razón.

            A veces todo puede ser un poco confuso, pero contigo todo se siente más tranquilo, más claro.
            Y aunque no siempre sepa cómo explicarlo, sé que me gusta estar contigo y compartir lo que soy..`,
            color: "from-rose-400 to-pink-500",
            icon: "🌹"
        },
        {
            id: 2,
            title: "Días y mas días",
            date: "----",
            preview: "Pasa el tiempo demasiado rápido cuando estoy contigo...",
            content: `Pasa el tiempo demasiado rápido cuando estoy contigo.
            Lo disfruto mucho, pero siempre siento que hace falta un poco más.

            No entiendo cómo unas cuantas horas se vuelven tan poco a tu lado.
            Cada momento contigo se pasa volando, como si el tiempo no quisiera quedarse.

            Me gusta perderme en esos ratos, hablar, reír, simplemente verte y compartir.
            Son cosas simples, pero se sienten diferentes cuando estoy contigo.

            Ojalá podamos seguir sumando muchos momentos así,
            sin pensar tanto en el tiempo, solo dejándolo pasar…
            mientras lo único que hacemos es disfrutar y ser felices.`,
            color: "from-violet-400 to-purple-500",
            icon: "✨"
        },
        {
            id: 3,
            title: "Simplemente Gracias",
            date: "Hoy",
            preview: "A veces no te digo todo lo que siento por ti...",
            content: `A veces no te digo todo lo que siento por ti, y por eso te escribo esto hoy. Simplemente para recordarte que eres increíble, inteligente, hermosa y capaz de lograr todo lo que te propongas.

            Nunca dudes de ti misma, porque yo veo en ti una luz maravillosa. Estoy muy orgulloso de la persona que eres y de todo lo que estás logrando.

            Gracias por existir y por hacerme tan feliz.`,
            color: "from-amber-400 to-orange-500",
            icon: "💖"
        },
        {
            id: 4,
            title: "Te Quiero Mucho",
            date: "Hoy",
            preview: "Amor, no sé si te canses de escucharlo una y mil veces...",
            content: `Amor, no sé si te canses de escucharlo una y mil veces. Y no me molesta repetirlo una y mil veces: eres lo mejor de mi vida. Te quiero mucho, gracias por estar y por ser una persona muy linda.

            Fue algo tan inusual y bonito que aún no sé cómo explicarlo. De la nada pasó, y hoy estamos aquí. Siento una felicidad inefable y espero que no sea efímera.

            Quiero recordarte lo feliz que me haces y lo mucho que me ayudas cuando me abrazas y simplemente somos tú y yo. Me haces perderme en una tranquilidad absoluta de la cual no quiero salir. Cuando me besas, sentir tus labios con los míos creando una conexión tan bonita que simplemente quiero cuidar; sentir tu piel con la mía y sentirme arropado por un calor que no quiero que desaparezca.

            Simplemente te quiero, te quiero, y te lo diría una y mil veces. Lo gritaría para que sepan lo feliz que me haces. Simplemente, gracias.`,
            color: "from-rose-400 to-fuchsia-500",
            icon: "❤️"
        },
        {
            id: 5,
            title: "La Luz de Mis Ojos",
            date: "Hoy",
            preview: "Quiero que sepas que me enamoré de tu esencia...",
            content: `Quiero que sepas que me enamoré de tu esencia, de esa forma tan tuya de ser que llamó mi atención desde el principio. Te sentí tan diferente a lo común, y aunque había cosas que no me convencian, dentro de mí empezó a crecer un sentimiento hacia ti, algo que no quería volver a sentir… pero de la nada apareció.

            Me enamoré de tu bonita forma de ser, y cada día me enamoras más. Conocerte fue como un premio sorpresa; ya no tenía fe en muchas cosas, pero llegaste tú y me sorprendiste de una manera muy bonita.

            No me cansaría de verte sonreír, de mirar esos ojitos hermosos que me hipnotizan y me hacen sentir en paz. Quiero pasar mucho tiempo contigo, y espero que ese tiempo esté lleno de tranquilidad, cariño y momentos bonitos. Que al final solo seamos tú y yo contra el mundo, encontrándonos siempre el uno al otro sin importar lo que pase.

            Simplemente gracias por llegar a mi vida de la manera en que lo hiciste.`,
            color: "from-cyan-400 to-blue-500",
            icon: "🌟"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 animate-gradient p-4 md:p-8 relative overflow-hidden">

            {/* Fondo decorativo */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
                <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-float"></div>
            </div>

            {/* Header con botón de volver */}
            <div className="relative z-10 max-w-6xl mx-auto mb-12 flex items-center justify-between">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105"
                >
                    <span>←</span> Volver
                </button>
                <h1 className="text-3xl md:text-4xl font-bold text-white text-center flex-grow text-shadow-glow">
                    Mis Cartas para Ti
                </h1>
                <div className="w-24"></div> {/* Espaciador para centrar el título */}
            </div>

            {/* Grid de Cartas */}
            <div className={`relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                {letters.map((letter, index) => (
                    <div
                        key={letter.id}
                        onClick={() => setSelectedLetter(letter)}
                        className="group cursor-pointer perspective-1000"
                        style={{ animationDelay: `${index * 150}ms` }}
                    >
                        <div className="relative h-64 w-full transition-all duration-500 transform group-hover:-translate-y-2 group-hover:rotate-1">

                            {/* Sobre / Tarjeta */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${letter.color} rounded-2xl shadow-xl shadow-black/20 p-6 flex flex-col justify-between border-t border-white/20 overflow-hidden`}>

                                {/* Decoración de fondo del sobre */}
                                <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all"></div>
                                <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-black/10 rounded-full blur-2xl"></div>

                                {/* Contenido Header */}
                                <div className="flex justify-between items-start relative z-10">
                                    <span className="text-4xl filter drop-shadow-md transform group-hover:scale-110 transition-transform duration-300">
                                        {letter.icon}
                                    </span>
                                    <span className="text-white/80 text-xs font-bold uppercase tracking-wider bg-white/10 px-2 py-1 rounded backdrop-blur-sm">
                                        {letter.date}
                                    </span>
                                </div>

                                {/* Contenido Texto */}
                                <div className="relative z-10 mt-auto">
                                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-white/100 transition-colors">
                                        {letter.title}
                                    </h3>
                                    <p className="text-white/80 text-sm line-clamp-2 font-medium">
                                        {letter.preview}
                                    </p>
                                </div>

                                {/* Botón "Leer" simulado */}
                                <div className="mt-4 flex items-center gap-2 text-white/90 text-sm font-bold opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                                    <span>Leer carta</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Tarjeta de "Nueva Carta" (Placeholder para el futuro) */}
                <div className="group cursor-default opacity-60 hover:opacity-100 transition-opacity">
                    <div className="h-64 w-full border-2 border-dashed border-white/20 rounded-2xl flex flex-col items-center justify-center text-white/40 group-hover:text-white/60 group-hover:border-white/40 transition-all bg-white/5">
                        <span className="text-4xl mb-2">🔒</span>
                        <p className="text-sm font-medium">Próximamente...</p>
                    </div>
                </div>
            </div>

            {/* Modal de Lectura */}
            {selectedLetter && (
                <LetterDisplay
                    letter={selectedLetter}
                    onClose={() => setSelectedLetter(null)}
                />
            )}
        </div>
    );
}

export default Letters;
