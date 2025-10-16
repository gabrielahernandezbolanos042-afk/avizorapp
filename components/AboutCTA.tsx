
import React from 'react';

const AboutCTA: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
             <div className="w-full h-80 bg-gray-800 rounded-lg flex items-center justify-center">
                <img src="https://picsum.photos/500/320?grayscale" alt="Ilustración de la app" className="rounded-lg object-cover w-full h-full" />
             </div>
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Nuestra Misión: Unir a la Comunidad Educativa</h2>
            <p className="text-gray-300 mt-4 mb-8">
              En Avizor, creemos que una comunicación transparente y ágil es la base del éxito estudiantil. Nuestra misión es derribar las barreras de comunicación, creando un ecosistema donde padres, estudiantes y docentes colaboren de forma activa para un mejor futuro educativo.
            </p>
            <a href="#" className="bg-[#00BFA6] text-[#0D1B2A] font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300">
              Únete a la lista de espera
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
