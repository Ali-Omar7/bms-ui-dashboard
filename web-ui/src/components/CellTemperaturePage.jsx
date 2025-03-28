// src/components/CellTemperature.jsx
import React, { useEffect, useState } from 'react';

const generateRandomTemperature = () => {
  return parseFloat((Math.random() * 20 + 20).toFixed(1)); // Between 20°C to 40°C
};

const CellTemperature = () => {
  const [cellTemps, setCellTemps] = useState([30.2, 31.5, 29.8, 35.6]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTemps = Array.from({ length: 4 }, () => generateRandomTemperature());
      setCellTemps(newTemps);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#1e1e1e',
        color: '#fff',
        padding: '40px',
        boxSizing: 'border-box',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#884d4d' }}>
        Individual Cell Temperatures
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '30px',
        }}
      >
        {cellTemps.map((temp, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#f2f2f2',
              color: '#222',
              borderRadius: '12px',
              padding: '30px',
              width: '200px',
              textAlign: 'center',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
              fontWeight: '600',
              fontSize: '1.2rem',
            }}
          >
            <div style={{ marginBottom: '10px', fontSize: '1.5rem' }}>Cell {index + 1}</div>
            <div style={{ fontSize: '2rem' }}>{temp}°C</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CellTemperature;



