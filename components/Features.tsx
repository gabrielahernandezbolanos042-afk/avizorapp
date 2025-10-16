
import React from 'react';

const FeatureCard: React.FC<{ icon: string; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-gray-800/50 p-6 rounded-lg border border-transparent hover:border-[#00BFA6] hover:shadow-lg hover:shadow-[#00bfa6]/10 transform hover:-translate-y-1 transition-all duration-300">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{children}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-opacity-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">¿Por qué Avizor?</h2>
          <p className="text-lg text-gray-400 mt-2">Todo lo que necesitas para una comunicación escolar fluida y eficaz.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard icon="⚡️" title="Notificaciones Instantáneas">
            Recibe alertas en tiempo real sobre eventos, calificaciones y comunicados urgentes. Nunca te pierdas una actualización importante.
          </FeatureCard>
          <FeatureCard icon="💬" title="Comunicación Directa">
            Un canal seguro y directo para conectar a padres, docentes y estudiantes, facilitando la colaboración y resolviendo dudas al instante.
          </FeatureCard>
          <FeatureCard icon="📅" title="Calendario Integrado">
            Accede fácilmente al calendario escolar, consulta fechas de exámenes, eventos y feriados. Todo organizado en un solo lugar.
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default Features;
