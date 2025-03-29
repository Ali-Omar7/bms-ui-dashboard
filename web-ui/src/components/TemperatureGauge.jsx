import React from "react";

const TemperatureGauge = ({ temperature }) => {
  const displayTemp =
    typeof temperature === "number" ? temperature.toFixed(1) : "--";

  const getColor = (temp) => {
    if (temp >= 32) return "red";
    if (temp >= 28) return "orange";
    return "green";
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Avg Cell Temperature</h2>
      <p
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          color: getColor(temperature),
        }}
      >
        {displayTemp}℃ 
      </p>
    </div>
  );
};

export default TemperatureGauge;












