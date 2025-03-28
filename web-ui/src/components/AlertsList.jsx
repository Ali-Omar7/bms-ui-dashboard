import React from 'react';

const AlertsList = ({ alerts = [] }) => {
  return (
    <div className="widget">
      <h3>Alerts & Warnings</h3>
      {alerts.length === 0 ? (
        <p>No critical alerts.</p>
      ) : (
        <ul>
          {alerts.map((alert, index) => (
            <li key={index}>{alert}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AlertsList;

