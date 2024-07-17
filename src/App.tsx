import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Lucre com Licitações</title>
        <meta name="description" content="Assessoria em licitação para aumentar suas vendas." />
      </Helmet>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default App;