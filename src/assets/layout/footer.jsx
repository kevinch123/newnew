import { portfolioData } from '../../data/portfolioData';

const Footer = () => {
    return (
        <footer className="bg-slate-950 py-8 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-gray-400">
                    © 2024 <span className="text-cyan-400 font-semibold">{portfolioData.personal.name}</span>
                    {' '}- Todos los derechos reservados
                </p>
                <p className="text-gray-500 text-sm mt-2">
                    Hecho con ❤️ y React
                </p>
            </div>
        </footer>
    );
};

export default Footer;
