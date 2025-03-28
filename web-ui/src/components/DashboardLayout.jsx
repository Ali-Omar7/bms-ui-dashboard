import React from 'react';
import { useNavigate } from 'react-router-dom';
import BatteryVoltageGauge from './BatteryVoltageGauge';
import TemperatureGauge from './TemperatureGauge';
import SOHIndicator from './SOHIndicator';
import AlertsList from './AlertsList';
import TemperatureHeatmap from './TemperatureHeatmap';
import TrendCharts from './TrendCharts';

const DashboardLayout = ({ batteryVoltage, averageTemperature, soc, soh, alerts }) => {
  const navigate = useNavigate();

  const styles = {
    container: {
      display: 'flex',
      height: '100vh',
      backgroundColor: '#1e1e1e',
      color: '#4a2e2e',
      fontFamily: 'Arial, sans-serif',
    },
    leftPanel: {
      width: '30%',
      backgroundColor: '#f7f7f7',
      padding: '30px 20px',
      boxSizing: 'border-box',
      overflowY: 'auto',
    },
    rightPanel: {
      flex: 1,
      backgroundColor: '#1e1e1e',
      padding: '30px',
      color: '#f2f2f2',
      overflowY: 'auto',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '30px',
      color: '#7c4d4d',
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: '12px',
      padding: '20px',
      marginBottom: '20px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      color: '#5a2a2a',
    },
    cardTitle: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      marginBottom: '8px',
    },
    clickableCard: {
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftPanel}>
        <h1 style={styles.title}>BMS Dashboard</h1>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Avg Battery Voltage</h2>
          <BatteryVoltageGauge voltage={batteryVoltage} />
        </div>

        <div
          style={{ ...styles.card, ...styles.clickableCard }}
          onClick={() => navigate('/temperature')}
        >
          <h2 style={styles.cardTitle}>Avg Cell Temperature</h2>
          <TemperatureGauge temperature={averageTemperature} />
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Battery Health</h2>
          <SOHIndicator soc={soc} soh={soh} />
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Alerts & Warnings</h2>
          <AlertsList alerts={alerts} />
        </div>
      </div>

      <div style={styles.rightPanel}>
        <h2>Trend Charts</h2>
        <TrendCharts />
        <h2 style={{ marginTop: '40px' }}>Temperature Heatmap</h2>
        <TemperatureHeatmap />
      </div>
    </div>
  );
};

export default DashboardLayout;








