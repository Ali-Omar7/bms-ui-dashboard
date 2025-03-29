import React from "react";

const SOHIndicator = ({ soh }) => {
  return (
    <div style={{ fontSize: "16px", color: "#333" }}>
      State of Health (SOH): <strong>{soh}%</strong>
    </div>
  );
};

export default SOHIndicator;

