import React from 'react';
import { FaTrophy, FaHandshake, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const WhyChooseUs: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardData = [
    {
      icon: <FaTrophy />,
      title: 'Excelência',
      description: 'Buscamos a vitória dos nossos clientes não apenas no preço, mas também na excelência das propostas.',
    },
    {
      icon: <FaHandshake />,
      title: 'Parcerias',
      description: 'Construímos parcerias duradouras e de confiança, focando sempre nos melhores resultados.',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Segurança',
      description: 'Garantimos segurança em todo o processo, desde a preparação até a entrega final.',
    },
    {
      icon: <FaChartLine />,
      title: 'Resultados',
      description: 'Focamos em resultados excepcionais, com estratégias comprovadas e personalizadas.',
    },
  ];

  return (
    <section ref={ref} className="bg-secondary text-textLight py-8 md:py-12">
      <div className="container mx-auto text-center px-4 md:px-6 max-w-full overflow-hidden">
        <h2 className={`text-3xl md:text-4xl font-bold mb-8 md:mb-12 ${inView ? 'animate-fadeIn' : ''}`}>Por que escolher a Lucre com Licitações?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-4 md:p-6 bg-primary rounded-lg shadow-lg transition-opacity duration-500 ease-out ${inView ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${index * 1000}ms` }}
            >
              <div className="text-5xl md:text-6xl text-accent mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">{card.title}</h3>
              <p className="text-sm md:text-base">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;