import React, { useEffect, useState } from "react";

const generateCellData = () => {
  return Array.from({ length: 6 }, (_, i) => {
    const voltage = +(Math.random() * (4.2 - 3.0) + 3.0).toFixed(2);
    const temperature = +(Math.random() * (50 - 20) + 20).toFixed(1);
    return { id: i + 1, voltage, temperature };
  });
};

const getAlertsFromCells = (cells) => {
  const alerts = [];

  cells.forEach((cell) => {
    if (cell.voltage > 4.15) alerts.push(`Cell ${cell.id} overcharged`);
    else if (cell.voltage < 3.2) alerts.push(`Cell ${cell.id} undervoltage`);

    if (cell.temperature > 45) alerts.push(`Cell ${cell.id} overheating`);
  });

  const fullyCharged = cells.every((c) => c.voltage > 4.0);
  const nearEmpty = cells.every((c) => c.voltage < 3.3);

  if (fullyCharged) alerts.push("All cells fully charged");
  if (nearEmpty) alerts.push("All cells nearing depletion");

  return alerts;
};

const AlertsList = () => {
  const [alerts, setAlerts] = useState([]);
  const [banner, setBanner] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const cells = generateCellData();
      const newAlerts = getAlertsFromCells(cells);
      setAlerts(newAlerts);

      const criticalAlert = newAlerts.find((msg) =>
        msg.toLowerCase().includes("overcharged" || "overheating")
      );
      setBanner(criticalAlert || "");
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {banner && (
        <div
          style={{
            position: "fixed",
            top: 0,
            width: "100%",
            background: "#ff4d4d",
            color: "white",
            padding: "10px",
            fontWeight: "bold",
            textAlign: "center",
            zIndex: 999,
          }}
        >
          🚨 {banner}
        </div>
      )}

      <div>
        <h2>Alerts & Warnings</h2>
        <ul>
          {alerts.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AlertsList;


