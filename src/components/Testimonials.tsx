import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const testimonials = [
  {
    text: "A Código da Lucratividade nos ajudou a ganhar nossa primeira licitação, e não poderíamos estar mais felizes!",
    author: "Gabriel",
  },
  {
    text: "Equipe altamente qualificada e sempre disponível para nos ajudar em todas as etapas.",
    author: "Henrique",
  },
  {
    text: "Graças à Código da Lucratividade, conseguimos aumentar significativamente nossos lucros.",
    author: "Augusto",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-primary text-textLight py-8 md:py-12">
      <div className="container mx-auto text-center px-4 md:px-6 max-w-full overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 animate-fadeIn">Depoimentos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4 md:p-6 bg-secondary text-textLight shadow-lg rounded-lg animate-slideInUp">
              <div className="flex items-center justify-start mb-4 text-accent">
                <FaQuoteLeft className="mr-2" size={16} />
                <p className="italic">{testimonial.text}</p>
                <FaQuoteRight className="ml-2" size={16} />
              </div>
              <p className="font-bold text-right mt-4">- {testimonial.author}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 md:mt-12">
          <video controls className="mx-auto rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2">
            <source src="testemonial.mp4" type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;