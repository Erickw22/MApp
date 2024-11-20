import React, { createContext, useState, useContext } from 'react';

// Criação do contexto de pontos
const PointsContext = createContext();

export const usePoints = () => {
  const context = useContext(PointsContext);
  if (!context) {
    throw new Error('usePoints deve ser usado dentro de um PointsProvider');
  }
  return context;
};

// Provedor de pontos
export const PointsProvider = ({ children }) => {
  const [points, setPoints] = useState(0);

  const incrementPoints = (value) => {
    setPoints((prevPoints) => prevPoints + value);
  };

  return (
    <PointsContext.Provider value={{ points, incrementPoints }}>
      {children}
    </PointsContext.Provider>
  );
};
