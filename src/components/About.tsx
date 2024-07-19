import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Ativa apenas uma vez
    threshold: 0.1, // Ativa quando 10% do componente está visível
  });

  return (
    <section ref={ref} className="bg-secondary text-textLight p-6 md:p-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center max-w-full overflow-hidden">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div className="relative w-full">
            <img
              src="/diego-macedo.jpeg"
              alt="Diego Macedo"
              className="w-full max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-lg mx-auto"
            />
            <div className="caption text-center mt-2 text-sm text-gray-400">Na foto, vemos um de nossos analistas participando de uma licitação no valor de 6 milhões para um cliente de Brasília.</div>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${inView ? 'animate-fadeIn' : ''}`}>Sobre a Código da Lucratividade</h2>
          <p className={`mb-6 ${inView ? 'animate-slideInLeft' : ''}`}>
            A Código da Lucratividade se destaca por sua equipe altamente qualificada, contando com profissionais com mais de 15 anos de experiência no mercado. Nosso grande diferencial é a capacidade de gerar lucros exponenciais para nossos clientes. Temos exemplos recentes de vendas com margens superiores a 1000%, que podemos apresentar para a sua análise.
          </p>
          <div className="flex flex-col md:flex-row md:space-x-12">
            <div className={`mb-6 md:mb-0 ${inView ? 'animate-slideInRight' : ''}`}>
              <div className="flex items-baseline text-2xl md:text-3xl font-bold">
                <span className="mr-1">R$</span>
                {inView && <CountUp start={0} end={90000000} duration={10} separator="." />}
              </div>
              <p>Homologações em 2021</p>
            </div>
            <div className={`mb-6 md:mb-0 ${inView ? 'animate-slideInRight' : ''}`}>
              <div className="flex items-baseline text-2xl md:text-3xl font-bold">
                <span className="mr-1">R$</span>
                {inView && <CountUp start={0} end={130000000} duration={10} separator="." />}
              </div>
              <p>Homologações em 2022</p>
            </div>
            <div className={`${inView ? 'animate-slideInRight' : ''}`}>
              <div className="flex items-baseline text-2xl md:text-3xl font-bold">
                <span className="mr-1">R$</span>
                {inView && <CountUp start={0} end={200000000} duration={10} separator="." />}
              </div>
              <p>Homologações em 2023</p>
            </div>
          </div>
          <a
            href="/plano-de-negocios.pdf"
            download
            className={`mt-8 bg-accent text-textDark px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300 shadow-lg inline-block ${inView ? 'animate-fadeIn' : ''}`}
          >
            Baixar Plano de Negócios
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;