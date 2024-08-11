import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="bg-secondary text-textLight py-8 md:py-12">
      <div className="container mx-auto text-center px-4 md:px-6 max-w-full overflow-hidden">
        <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${inView ? 'animate-fadeIn' : ''}`}>Entre em Contato</h2>
        <p className={`text-lg md:text-xl mb-6 ${inView ? 'animate-slideInLeft' : ''}`}>
          Se você deseja expandir seus negócios e garantir o sucesso da sua empresa no mercado de licitações, entre em contato conosco agora mesmo!
        </p>
        <div className={`flex justify-center items-center ${inView ? 'animate-slideInUp' : ''}`}>
          <a
            href="https://wa.me/556298402599?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20como%20potencializar%20minhas%20vendas%20para%20o%20governo."
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