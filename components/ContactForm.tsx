
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">¿Interesado? Contáctanos</h2>
          <p className="text-lg text-gray-400 mt-2">Déjanos tu mensaje y sé de los primeros en probar Avizor.</p>
        </div>
        <div className="max-w-xl mx-auto">
          {submitted ? (
             <p className="text-center text-lg text-[#00BFA6]">¡Gracias por tu mensaje! Nos pondremos en contacto pronto.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nombre</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#00BFA6]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#00BFA6]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Mensaje</label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#00BFA6]"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-[#00BFA6] text-[#0D1B2A] font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
