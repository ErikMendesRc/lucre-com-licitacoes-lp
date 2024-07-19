import React from 'react';
import { FaTrophy, FaHandshake, FaShieldAlt, FaChartLine } from 'react-icons/fa';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-secondary text-textLight py-8 md:py-12">
      <div className="container mx-auto text-center px-4 md:px-6 max-w-full overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 animate-fadeIn">Por que escolher a Lucre com Licitações?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="flex flex-col items-center p-4 md:p-6 bg-primary rounded-lg shadow-lg animate-slideInUp">
            <div className="text-5xl md:text-6xl text-accent mb-4">
              <FaTrophy />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Excelência</h3>
            <p className="text-sm md:text-base">Buscamos a vitória dos nossos clientes não apenas no preço, mas também na excelência das propostas.</p>
          </div>
          <div className="flex flex-col items-center p-4 md:p-6 bg-primary rounded-lg shadow-lg animate-slideInUp">
            <div className="text-5xl md:text-6xl text-accent mb-4">
              <FaHandshake />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Parcerias</h3>
            <p className="text-sm md:text-base">Construímos parcerias duradouras e de confiança, focando sempre nos melhores resultados.</p>
          </div>
          <div className="flex flex-col items-center p-4 md:p-6 bg-primary rounded-lg shadow-lg animate-slideInUp">
            <div className="text-5xl md:text-6xl text-accent mb-4">
              <FaShieldAlt />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Segurança</h3>
            <p className="text-sm md:text-base">Garantimos segurança em todo o processo, desde a preparação até a entrega final.</p>
          </div>
          <div className="flex flex-col items-center p-4 md:p-6 bg-primary rounded-lg shadow-lg animate-slideInUp">
            <div className="text-5xl md:text-6xl text-accent mb-4">
              <FaChartLine />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Resultados</h3>
            <p className="text-sm md:text-base">Focamos em resultados excepcionais, com estratégias comprovadas e personalizadas.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;