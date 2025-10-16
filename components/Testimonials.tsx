
import React from 'react';

const TestimonialCard: React.FC<{ quote: string; name: string; role: string }> = ({ quote, name, role }) => (
  <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg">
    <p className="text-gray-300 italic">"{quote}"</p>
    <div className="mt-4">
      <p className="font-bold text-white">{name}</p>
      <p className="text-sm text-[#00BFA6]">{role}</p>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-opacity-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Lo que dicen de nosotros</h2>
          <p className="text-lg text-gray-400 mt-2">Opiniones de quienes ya forman parte de la comunidad Avizor.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="Finalmente una app que centraliza todo. Ya no tengo que revisar mails, grupos de WhatsApp y el cuaderno de mi hijo. ¡Un alivio!"
            name="Laura Gómez"
            role="Madre"
          />
          <TestimonialCard 
            quote="Me permite enviar comunicados masivos en segundos. La confirmación de lectura es una función clave para asegurar que todos están informados."
            name="Carlos Fernandez"
            role="Profesor"
          />
          <TestimonialCard 
            quote="Sé exactamente cuándo tengo exámenes y entregas de trabajos. Me ayuda a organizarme mucho mejor y no olvidarme de nada."
            name="Sofía Martinez"
            role="Estudiante"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
