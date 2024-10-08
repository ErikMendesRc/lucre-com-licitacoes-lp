import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="bg-primary text-textLight py-8 md:py-12">
      <div className="container mx-auto text-center px-4 md:px-6 max-w-full overflow-hidden">
        <h2 className={`text-3xl md:text-4xl font-bold mb-8 md:mb-12 ${inView ? 'animate-fadeIn' : ''}`}>Depoimentos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`p-4 md:p-6 bg-secondary text-textLight shadow-lg rounded-lg ${inView ? 'animate-slideInUp' : ''}`}>
              <div className="flex items-center justify-start mb-4 text-accent">
                <FaQuoteLeft className="mr-2" size={16} />
                <p className="italic">{testimonial.text}</p>
                <FaQuoteRight className="ml-2" size={16} />
              </div>
              <p className="font-bold text-right mt-4">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;