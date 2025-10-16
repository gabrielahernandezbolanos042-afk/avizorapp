import React, { useState } from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Intento de inicio de sesión con:', { email, password });
    // Aquí se implementaría la lógica de autenticación.
    onClose(); // Cierra el modal después del intento.
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-modal-title"
    >
      <div 
        className="bg-[#0D1B2A] rounded-lg shadow-2xl p-8 w-full max-w-md m-4 relative border border-gray-700"
        onClick={(e) => e.stopPropagation()} // Evita que el modal se cierre al hacer clic dentro de él.
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Cerrar modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <h2 id="login-modal-title" className="text-2xl font-bold text-white text-center mb-6">Iniciar Sesión en Avizor</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="login-email" className="block text-sm font-medium text-gray-300 mb-2">Correo Electrónico</label>
            <input
              type="email"
              id="login-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#00BFA6]"
              placeholder="tu@email.com"
            />
          </div>
          <div>
             <label htmlFor="login-password" className="block text-sm font-medium text-gray-300 mb-2">Contraseña</label>
             <input
               type="password"
               id="login-password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               required
               className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#00BFA6]"
               placeholder="********"
             />
          </div>
          
          <div className="text-right">
              <a href="#" className="text-sm text-gray-400 hover:text-[#00BFA6] transition-colors">¿Olvidaste tu Contraseña?</a>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-[#00BFA6] text-[#0D1B2A] font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
            <p className="text-gray-400">
                ¿No tienes una cuenta?{' '}
                <a href="#" className="font-semibold text-[#00BFA6] hover:underline">
                    Nuevo Registro
                </a>
            </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
