import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import AddStation from './AddStation';
import EditStation from './EditStation';
import { getStations, removeStation, addStation } from '../data/stationService';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    setStations(getStations());
  }, []);

  const handleRemoveStation = (name) => {
    const updatedStations = removeStation(name);
    setStations(updatedStations);
  };

  const handleAddStation = (newStation) => {
    const updatedStations = addStation(newStation);
    setStations(updatedStations);
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/admin/add">Add Station</Link></li>
          <li><Link to="/admin/edit">Edit Station</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="add" element={<AddStation onAddStation={handleAddStation} />} />
        <Route path="edit" element={<EditStation />} />
      </Routes>
      <div className="station-list">
        <h2>Active Stations</h2>
        <ul>
          {stations.map((station, index) => (
            <li key={index} className="station-item">
              {station.name}
              <button 
                className="remove-button" 
                onClick={() => handleRemoveStation(station.name)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
