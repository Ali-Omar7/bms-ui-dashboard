import React from "react";

const cardStyle = {
  backgroundColor: "#fff",
  borderRadius: "12px",
  padding: "20px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  margin: "10px",
  textAlign: "center",
  minWidth: "150px",
};

const CellTemperaturePage = ({ cellTemperatures }) => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f4f4",
        padding: "30px",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ fontSize: "40px", fontWeight: "bold", color: "#333" }}>
        Individual Cell Temperatures
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {cellTemperatures.map((temp, index) => (
          <div key={index} style={cardStyle}>
            <h2>Cell {index + 1}</h2>
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>{temp}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CellTemperaturePage;




