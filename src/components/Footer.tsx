import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-textLight py-4 md:py-6">
      <div className="container mx-auto text-center px-4">
        <p className="mb-2 md:mb-4">&copy; 2024 Lucre com Licitações. Todos os direitos reservados.</p>
        <p className="text-xs md:text-sm">
          Criado por <a href="https://www.eebtecnologia.com.br/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">E&B Tecnologia</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;