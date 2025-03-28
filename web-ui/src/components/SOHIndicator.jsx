import React from 'react';

const SOHIndicator = ({ soc = 80, soh = 90 }) => {
  return (
    <div className="widget">
      <h3>Battery Health</h3>
      <p>State of Charge (SOC): {soc}%</p>
      <p>State of Health (SOH): {soh}%</p>
    </div>
  );
};

export default SOHIndicator;
