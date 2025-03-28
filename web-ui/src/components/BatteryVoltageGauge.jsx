import React from 'react';

const BatteryVoltageGauge = ({ voltage = 3.7 }) => {
  return (
    <div className="widget">
      <h3>Avg Battery Voltage</h3>
      <div>{voltage.toFixed(2)} V</div>
    </div>
  );
};

export default BatteryVoltageGauge;
