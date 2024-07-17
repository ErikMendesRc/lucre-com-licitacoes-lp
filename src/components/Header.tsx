import React from 'react';
import 'tailwindcss/tailwind.css';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-primary via-secondary to-primary text-textLight py-10 md:py-20">
      <div className="container mx-auto px-6 flex flex-col items-center md:items-start text-center md:text-left">
        <img src="/logo.svg" alt="Código da Lucratividade" className="mb-6 w-32 md:w-64 h-auto animate-fadeIn" />
        <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-slideInLeft">Código da Lucratividade</h1>
        <h2 className="text-2xl md:text-4xl font-semibold mt-4 animate-slideInRight">Potencialize suas vendas para o governo</h2>
        <p className="mt-6 text-lg max-w-2xl animate-fadeIn">
          Somos especialistas em processos licitatórios, garantindo alta rentabilidade e simplificando o trabalho durante essas etapas. Nossa equipe de especialistas, com mais de 15 anos de experiência, está pronta para ajudar sua empresa a ganhar licitações e aumentar seus lucros.
        </p>
        <a
          href="https://wa.me/557597155023?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20como%20potencializar%20minhas%20vendas%20para%20o%20governo."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 bg-accent text-textDark px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300 shadow-lg animate-fadeIn"
        >
          Fale com um especialista
        </a>
      </div>
    </header>
  );
};

export default Header;