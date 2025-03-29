import React, { useEffect, useState } from "react";
import BatteryVoltageGauge from "./BatteryVoltageGauge";
import TemperatureGauge from "./TemperatureGauge";

const cardStyle = {
  background: "white",
  borderRadius: "12px",
  padding: "24px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  minWidth: "250px",
  minHeight: "150px",
};

const DashboardLayout = () => {
  const [batteryVoltage, setBatteryVoltage] = useState(3.72);
  const [temperature, setTemperature] = useState(27.4);
  const [soc, setSoc] = useState(76);
  const [soh, setSoh] = useState(91);
  const [alerts, setAlerts] = useState([]);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const newVoltage = (Math.random() * 0.8 + 3.2).toFixed(2); // 3.2V - 4.0V
      const newTemp = (Math.random() * 10 + 25).toFixed(1); // 25°C - 35°C
      const newSoc = Math.floor(Math.random() * 100);
      const newSoh = Math.floor(Math.random() * 20 + 80); // 80 - 100%

      setBatteryVoltage(parseFloat(newVoltage));
      setTemperature(parseFloat(newTemp));
      setSoc(newSoc);
      setSoh(newSoh);

      const newAlerts = [];
      const randomCell = Math.floor(Math.random() * 4) + 1;

      if (newVoltage < 3.3) {
        newAlerts.push(`Cell ${randomCell} undervoltage`);
        setNotification(`⚠️ Cell ${randomCell} undervoltage!`);
      } else if (newVoltage > 4.1) {
        newAlerts.push(`Cell ${randomCell} overcharge`);
        setNotification(`⚠️ Cell ${randomCell} overcharged!`);
      }

      if (newTemp > 32) {
        newAlerts.push(`Cell ${randomCell} overheating`);
        setNotification(`🔥 Cell ${randomCell} overheating!`);
      }

      if (newSoc >= 98) {
        newAlerts.push("All cells fully charged");
        setNotification("✅ All cells are fully charged!");
      }

      if (newSoc <= 5) {
        newAlerts.push("Battery nearly empty");
        setNotification("🔋 Battery is nearly empty!");
      }

      if (newAlerts.length === 0) {
        setNotification(""); // No active notification
      }

      setAlerts(newAlerts);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "40px", width: "100%" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>BMS Dashboard</h1>

      {notification && (
        <div
          style={{
            backgroundColor: "#ff4d4d",
            color: "white",
            padding: "12px 24px",
            borderRadius: "8px",
            fontSize: "18px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          {notification}
        </div>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "32px",
        }}
      >
        <div style={cardStyle}>
          <BatteryVoltageGauge voltage={batteryVoltage} />
        </div>

        <div style={cardStyle}>
          <TemperatureGauge temperature={temperature} />
        </div>

        <div style={cardStyle}>
          <h2>Battery Health</h2>
          <p>State of Charge (SOC): {soc}%</p>
          <p>State of Health (SOH): {soh}%</p>
        </div>

        <div style={cardStyle}>
          <h2>Alerts & Warnings</h2>
          {alerts.length > 0 ? (
            <ul>
              {alerts.map((alert, index) => (
                <li key={index}>{alert}</li>
              ))}
            </ul>
          ) : (
            <p>No alerts</p>
          )}
        </div>

        <div style={cardStyle}>
          <h2>Temperature Heatmap</h2>
          <div
            style={{
              background: "linear-gradient(to right, green, yellow, red)",
              height: "40px",
              marginTop: "10px",
            }}
          >
            [Placeholder]
          </div>
        </div>

        <div style={cardStyle}>
          <h2>Trend Charts</h2>
          <p>Voltage/Temperature Over Time</p>
          <div style={{ background: "#eee", height: "100px" }}>
            [Graph Placeholder]
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;



















