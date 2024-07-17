import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { date: '09/2022', initial: 70000, final: 317844 },
  { date: '12/2022', initial: 95017.32, final: 300000 },
  { date: '12/2023', initial: 224000, final: 798000 },
  { date: '12/2023', initial: 25000000, final: 90000000 },
  { date: '12/2023', initial: 1500000, final: 5800000 },
  { date: '01/2024', initial: 180000000, final: 200000000 },
  { date: '02/2024', initial: 180000000, final: 200000000 },
  { date: '03/2024', initial: 180000000, final: 200000000 },
  { date: '04/2024', initial: 180000000, final: 200000000 },
  { date: '05/2024', initial: 130000, final: 540000 },
  { date: '06/2024', initial: 180000000, final: 200000000 },
  { date: '07/2024', initial: 1084, final: 34000 },
  { date: '08/2024', initial: 180000000, final: 200000000 },
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

interface CustomTooltipProps {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-secondary text-textLight p-2 rounded shadow-md">
        <p className="label font-bold">{`${label}`}</p>
        <p className="intro">{`Valor Inicial: ${formatCurrency(payload[0].value)}`}</p>
        <p className="intro">{`Valor Final: ${formatCurrency(payload[1].value)}`}</p>
      </div>
    );
  }

  return null;
};

const Services: React.FC = () => {
  return (
    <section className="bg-primary text-textLight py-8 md:py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 md:px-6">
        <div className="w-full lg:w-1/2 pr-0 lg:pr-6 mb-8 lg:mb-0">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 animate-fadeIn">Nosso Impacto em Números</h2>
          <p className="text-lg md:text-xl mb-6 animate-slideInLeft">
            Veja abaixo alguns exemplos de vendas realizadas com margens de lucro excepcionais.
            Nosso foco é sempre garantir os melhores resultados para nossos clientes.
          </p>
          <p className="text-md md:text-lg animate-slideInRight">
            Cada gráfico representa um caso de sucesso, mostrando como a "Código da Lucratividade" ajuda empresas a alcançar resultados excepcionais em processos licitatórios. Nosso objetivo é maximizar seus lucros com estratégias personalizadas e eficientes.
          </p>
          <p className="text-md md:text-lg animate-slideInRight mt-4">
            Entre em contato para saber mais sobre como podemos ajudar sua empresa a crescer no mercado de licitações.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <defs>
                <linearGradient id="colorInitial" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4caf50" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#4caf50" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorFinal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f0a500" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#f0a500" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e1dd" />
              <XAxis dataKey="date" tick={{ fill: '#e0e1dd' }} />
              <YAxis tickFormatter={formatCurrency} tick={{ fill: '#e0e1dd' }} />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }} />
              <Legend wrapperStyle={{ color: '#e0e1dd' }} />
              <Area type="monotone" dataKey="initial" stroke="#4caf50" fillOpacity={1} fill="url(#colorInitial)" name="Valor Inicial" />
              <Area type="monotone" dataKey="final" stroke="#f0a500" fillOpacity={1} fill="url(#colorFinal)" name="Valor Final" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default Services;