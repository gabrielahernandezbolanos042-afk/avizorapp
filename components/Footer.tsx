
import React from 'react';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900/50">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-400">© 2025 Avizor. Todos los derechos reservados.</p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-[#00BFA6] transition-colors duration-300"><FacebookIcon /></a>
            <a href="#" className="text-gray-400 hover:text-[#00BFA6] transition-colors duration-300"><TwitterIcon /></a>
            <a href="#" className="text-gray-400 hover:text-[#00BFA6] transition-colors duration-300"><InstagramIcon /></a>
            <a href="#" className="text-gray-400 hover:text-[#00BFA6] transition-colors duration-300"><LinkedInIcon /></a>
          </div>
          <div className="mt-4 sm:mt-0">
            <a href="#" className="text-sm text-gray-400 hover:text-white">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
