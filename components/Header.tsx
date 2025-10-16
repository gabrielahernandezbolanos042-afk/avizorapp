import React, { useState } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-gray-300 hover:text-[#00BFA6] transition-colors duration-300">
    {children}
  </a>
);

const Header: React.FC<{ onLoginClick: () => void }> = ({ onLoginClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#0D1B2A] relative overflow-hidden">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            <a href="#">Avizor</a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#features">Características</NavLink>
            <NavLink href="#about">Sobre la App</NavLink>
            <NavLink href="#testimonials">Testimonios</NavLink>
            <NavLink href="#contact">Contacto</NavLink>
            <button 
                onClick={onLoginClick} 
                className="border border-[#00BFA6] text-[#00BFA6] font-semibold py-2 px-4 rounded-lg hover:bg-[#00BFA6] hover:text-[#0D1B2A] transition-all duration-300"
            >
                Iniciar Sesión
            </button>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-2 items-start">
                <NavLink href="#features">Características</NavLink>
                <NavLink href="#about">Sobre la App</NavLink>
                <NavLink href="#testimonials">Testimonios</NavLink>
                <NavLink href="#contact">Contacto</NavLink>
                <button 
                    onClick={() => {
                        onLoginClick();
                        setIsMenuOpen(false);
                    }}
                    className="mt-2 border border-[#00BFA6] text-[#00BFA6] font-semibold py-2 px-4 rounded-lg hover:bg-[#00BFA6] hover:text-[#0D1B2A] transition-all duration-300 w-full text-left"
                >
                    Iniciar Sesión
                </button>
            </nav>
          </div>
        )}
      </div>

      <div className="container mx-auto px-6 py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Conecta. Informa.
          <span className="text-[#00BFA6]"> Avizor.</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          La comunicación escolar, reinventada. Mantente al día con avisos y eventos importantes en tiempo real.
        </p>
        <div className="mt-8 flex justify-center">
          <a href="#contact" className="bg-[#00BFA6] text-[#0D1B2A] font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300">
            Regístrate Ahora
          </a>
        </div>
        <div className="mt-12 md:mt-20 flex justify-center">
            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                <div className="rounded-[2rem] overflow-hidden w-full h-full bg-[#0D1B2A] p-4 flex flex-col text-white">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-xl font-bold text-[#00BFA6]">Avizor</span>
                        <div className="w-6 h-6 rounded-full bg-gray-600"></div>
                    </div>
                    <div className="space-y-3 overflow-y-auto">
                        <div className="bg-gray-700/50 p-3 rounded-lg">
                            <h3 className="font-semibold text-sm">Reunión de Padres</h3>
                            <p className="text-xs text-gray-400">Jueves 18, 19:00hs - Salón Principal.</p>
                        </div>
                        <div className="bg-gray-700/50 p-3 rounded-lg">
                            <h3 className="font-semibold text-sm">¡Día de Deportes!</h3>
                            <p className="text-xs text-gray-400">Viernes 19, no olvidar traer ropa cómoda.</p>
                        </div>
                        <div className="bg-[#00BFA6]/20 p-3 rounded-lg border border-[#00BFA6]">
                            <h3 className="font-semibold text-sm text-[#00BFA6]">URGENTE: Suspensión de clases</h3>
                            <p className="text-xs text-gray-300">Se suspenden las clases del turno mañana por alerta meteorológica.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
