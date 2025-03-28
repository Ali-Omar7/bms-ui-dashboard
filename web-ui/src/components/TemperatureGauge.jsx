import React from 'react';

const TemperatureGauge = ({ temperature }) => {
  const displayTemp =
    typeof temperature === 'number' ? `${temperature.toFixed(1)}°C` : '--°C';

  const getColor = () => {
    if (temperature < 30) return '#4CAF50';
    if (temperature < 40) return '#FFC107';
    return '#F44336';
  };

  return (
    <div style={{ fontSize: '1.5rem', color: getColor(), fontWeight: 'bold' }}>
      {displayTemp}
    </div>
  );
};

export default TemperatureGauge;






