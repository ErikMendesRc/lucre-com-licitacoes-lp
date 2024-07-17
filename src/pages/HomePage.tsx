import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="bg-primary text-textLight">
      <Helmet>
        <title>Código da Lucratividade | Potencialize suas vendas para o governo</title>
        <meta name="description" content="Somos especialistas em processos licitatórios, garantindo alta rentabilidade e simplificando o trabalho durante essas etapas. Nossa equipe de especialistas, com mais de 15 anos de experiência, está pronta para ajudar sua empresa a ganhar licitações e aumentar seus lucros." />
        <meta name="keywords" content="licitações, vendas para o governo, lucro, negócios, governo" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.codigodalucratividade.com.br/" />
        <meta property="og:title" content="Código da Lucratividade | Potencialize suas vendas para o governo" />
        <meta property="og:description" content="Somos especialistas em processos licitatórios, garantindo alta rentabilidade e simplificando o trabalho durante essas etapas." />
        <meta property="og:url" content="https://www.codigodalucratividade.com.br/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.codigodalucratividade.com.br/path/to/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Código da Lucratividade | Potencialize suas vendas para o governo" />
        <meta name="twitter:description" content="Somos especialistas em processos licitatórios, garantindo alta rentabilidade e simplificando o trabalho durante essas etapas." />
        <meta name="twitter:image" content="https://www.codigodalucratividade.com.br/path/to/twitter-image.jpg" />
      </Helmet>
      <Header />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;