import React, { useEffect, useState } from "react";

const cardStyle = {
  background: "white",
  borderRadius: "12px",
  padding: "24px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  flex: 1,
  minWidth: "250px",
  minHeight: "150px",
};

const BatteryHealth = () => {
  const [soc, setSoc] = useState(76);
  const [soh, setSoh] = useState(91);

  useEffect(() => {
    const interval = setInterval(() => {
      const newSoc = (Math.random() * 40 + 60).toFixed(0); // 60% - 100%
      const newSoh = (Math.random() * 20 + 80).toFixed(0); // 80% - 100%
      setSoc(newSoc);
      setSoh(newSoh);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={cardStyle}>
      <h2>Battery Health</h2>
      <p>State of Charge (SOC): {soc}%</p>
      <p>State of Health (SOH): {soh}%</p>
    </div>
  );
};

export default BatteryHealth;
