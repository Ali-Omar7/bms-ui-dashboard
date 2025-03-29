import React from "react";

const SOCIndicator = ({ soc }) => {
  return (
    <div style={{ fontSize: "16px", marginTop: "10px", color: "#333" }}>
      State of Charge (SOC): <strong>{soc}%</strong>
    </div>
  );
};

export default SOCIndicator;
