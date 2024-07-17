import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section className="bg-secondary text-textLight py-8 md:py-12">
      <div className="container mx-auto text-center px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fadeIn">Entre em Contato</h2>
        <p className="text-lg md:text-xl mb-6 animate-slideInLeft">
          Se você deseja expandir seus negócios e garantir o sucesso da sua empresa no mercado de licitações, entre em contato conosco agora mesmo!
        </p>
        <div className="flex justify-center items-center animate-slideInUp">
          <a
            href="https://wa.me/557597155023"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-accent text-textDark px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300 flex items-center shadow-lg"
          >
            <span className="mr-2">
              <FaWhatsapp size={24} />
            </span>
            Fale com um especialista
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;