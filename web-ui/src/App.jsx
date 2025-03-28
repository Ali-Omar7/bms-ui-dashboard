import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import CellTemperaturePage from './components/CellTemperaturePage';

export default function App() {
  return (
    <Router>
      <Routes>
  <Route path="/" element={<DashboardLayout />} />
  <Route path="/temperature" element={<CellTemperaturePage />} />
</Routes>
    </Router>
  );
}




