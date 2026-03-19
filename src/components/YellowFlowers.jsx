import { useState, useEffect } from 'react';
import './YellowFlowers.css';

export default function YellowFlowers({ onBack }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`flowers-wrapper ${!isLoaded ? 'not-loaded' : ''}`}>
      <button onClick={onBack} className="fixed top-6 left-6 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 hover:scale-105">
        <span>←</span> Volver
      </button>

      <div className="night"></div>
      
      <div className={`absolute top-20 z-50 text-center transition-all duration-2000 w-full ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
         <h1 className="text-4xl md:text-5xl font-bold text-yellow-300 drop-shadow-[0_0_15px_rgba(253,224,71,0.8)] mb-4">
            Flores Amarillas
         </h1>
         <p className="text-xl text-yellow-100/90 italic drop-shadow-md max-w-lg px-4 mx-auto">
            "Para ti, porque un día especial merece flores que iluminen como tu sonrisa." 💛🌻
         </p>
      </div>

      <div className="flowers">
        {[1, 2, 3].map(i => (
          <div key={`flower-${i}`} className={`flower flower--${i}`}>
            <div className={`flower__leafs flower__leafs--${i}`}>
              <div className="flower__leaf flower__leaf--1"></div>
              <div className="flower__leaf flower__leaf--2"></div>
              <div className="flower__leaf flower__leaf--3"></div>
              <div className="flower__leaf flower__leaf--4"></div>
              <div className="flower__white-circle"></div>
              {[...Array(8)].map((_, j) => (
                <div key={`light-${j}`} className={`flower__light flower__light--${j + 1}`}></div>
              ))}
            </div>
            <div className="flower__line">
              {[...Array(i === 1 ? 6 : 4)].map((_, j) => (
                <div key={`line-leaf-${j}`} className={`flower__line__leaf flower__line__leaf--${j + 1}`}></div>
              ))}
            </div>
          </div>
        ))}

        <div className="grow-ans" style={{ '--d': '1.2s' }}>
          <div className="flower__g-long">
             <div className="flower__g-long__top"></div>
             <div className="flower__g-long__bottom"></div>
          </div>
        </div>

        {[1, 2].map(i => (
          <div key={`grass-${i}`} className="growing-grass">
            <div className={`flower__grass flower__grass--${i}`}>
              <div className="flower__grass--top"></div>
              <div className="flower__grass--bottom"></div>
              {[...Array(8)].map((_, j) => (
                <div key={`grass-leaf-${j}`} className={`flower__grass__leaf flower__grass__leaf--${j + 1}`}></div>
              ))}
              <div className="flower__grass__overlay"></div>
            </div>
          </div>
        ))}

        {[1, 2].map(i => (
          <div key={`g-right-${i}`} className="grow-ans" style={{ '--d': i === 1 ? '2.4s' : '2.8s' }}>
            <div className={`flower__g-right flower__g-right--${i}`}>
              <div className="leaf"></div>
            </div>
          </div>
        ))}

        <div className="grow-ans" style={{ '--d': '2.8s' }}>
          <div className="flower__g-front">
            {[...Array(8)].map((_, i) => (
              <div key={`front-leaf-${i}`} className={`flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--${i + 1}`}>
                <div className="flower__g-front__leaf"></div>
              </div>
            ))}
            <div className="flower__g-front__line"></div>
          </div>
        </div>

        <div className="grow-ans" style={{ '--d': '3.2s' }}>
          <div className="flower__g-fr">
            <div className="leaf"></div>
            {[...Array(8)].map((_, i) => (
              <div key={`fr-leaf-${i}`} className={`flower__g-fr__leaf flower__g-fr__leaf--${i + 1}`}></div>
            ))}
          </div>
        </div>

        {/* Long grass groups */}
        <div className="long-g long-g--0">
          <div className="grow-ans" style={{ '--d': '3s' }}><div className="leaf leaf--0"></div></div>
          <div className="grow-ans" style={{ '--d': '2.2s' }}><div className="leaf leaf--1"></div></div>
          <div className="grow-ans" style={{ '--d': '3.4s' }}><div className="leaf leaf--2"></div></div>
          <div className="grow-ans" style={{ '--d': '3.6s' }}><div className="leaf leaf--3"></div></div>
        </div>
        <div className="long-g long-g--1">
          <div className="grow-ans" style={{ '--d': '3.6s' }}><div className="leaf leaf--0"></div></div>
          <div className="grow-ans" style={{ '--d': '3.8s' }}><div className="leaf leaf--1"></div></div>
          <div className="grow-ans" style={{ '--d': '4s' }}><div className="leaf leaf--2"></div></div>
          <div className="grow-ans" style={{ '--d': '4.2s' }}><div className="leaf leaf--3"></div></div>
        </div>
        <div className="long-g long-g--2">
          <div className="grow-ans" style={{ '--d': '4s' }}><div className="leaf leaf--0"></div></div>
          <div className="grow-ans" style={{ '--d': '4.2s' }}><div className="leaf leaf--1"></div></div>
          <div className="grow-ans" style={{ '--d': '4.4s' }}><div className="leaf leaf--2"></div></div>
          <div className="grow-ans" style={{ '--d': '4.6s' }}><div className="leaf leaf--3"></div></div>
        </div>
        <div className="long-g long-g--3">
          <div className="grow-ans" style={{ '--d': '4s' }}><div className="leaf leaf--0"></div></div>
          <div className="grow-ans" style={{ '--d': '4.2s' }}><div className="leaf leaf--1"></div></div>
          <div className="grow-ans" style={{ '--d': '3s' }}><div className="leaf leaf--2"></div></div>
          <div className="grow-ans" style={{ '--d': '3.6s' }}><div className="leaf leaf--3"></div></div>
        </div>
        <div className="long-g long-g--4">
          <div className="grow-ans" style={{ '--d': '4s' }}><div className="leaf leaf--0"></div></div>
          <div className="grow-ans" style={{ '--d': '4.2s' }}><div className="leaf leaf--1"></div></div>
          <div className="grow-ans" style={{ '--d': '3s' }}><div className="leaf leaf--2"></div></div>
          <div className="grow-ans" style={{ '--d': '3.6s' }}><div className="leaf leaf--3"></div></div>
        </div>
        <div className="long-g long-g--5">
          <div className="grow-ans" style={{ '--d': '4s' }}><div className="leaf leaf--0"></div></div>
          <div className="grow-ans" style={{ '--d': '4.2s' }}><div className="leaf leaf--1"></div></div>
          <div className="grow-ans" style={{ '--d': '3s' }}><div className="leaf leaf--2"></div></div>
          <div className="grow-ans" style={{ '--d': '3.6s' }}><div className="leaf leaf--3"></div></div>
        </div>
        <div className="long-g long-g--6">
          <div className="grow-ans" style={{ '--d': '4.2s' }}><div className="leaf leaf--0"></div></div>
          <div className="grow-ans" style={{ '--d': '4.4s' }}><div className="leaf leaf--1"></div></div>
          <div className="grow-ans" style={{ '--d': '4.6s' }}><div className="leaf leaf--2"></div></div>
          <div className="grow-ans" style={{ '--d': '4.8s' }}><div className="leaf leaf--3"></div></div>
        </div>
        <div className="long-g long-g--7">
          <div className="grow-ans" style={{ '--d': '3s' }}><div className="leaf leaf--0"></div></div>
          <div className="grow-ans" style={{ '--d': '3.2s' }}><div className="leaf leaf--1"></div></div>
          <div className="grow-ans" style={{ '--d': '3.5s' }}><div className="leaf leaf--2"></div></div>
          <div className="grow-ans" style={{ '--d': '3.6s' }}><div className="leaf leaf--3"></div></div>
        </div>
      </div>
    </div>
  );
}
