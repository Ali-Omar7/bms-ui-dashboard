import React from "react";

const BatteryVoltageGauge = ({ voltage }) => {
  const displayVoltage =
    typeof voltage === "number" ? voltage.toFixed(2) : "--";

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Avg Battery Voltage</h2>
      <p style={{ fontSize: "36px", fontWeight: "bold" }}>{displayVoltage} V</p>
    </div>
  );
};

export default BatteryVoltageGauge;








