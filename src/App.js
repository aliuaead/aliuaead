import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import WaveEffect from './components/WaveEffect';
import MediaPlayer from './components/MediaPlayer';
import useSwipeHandler from './components/SwipeHandler';
import { getStations } from './data/stationService';
import './App.css';

const App = () => {
  const [stations, setStations] = useState([]);
  const [currentStationIndex, setCurrentStationIndex] = useState(0);

  useEffect(() => {
    setStations(getStations());
  }, []);

  const handleSwipe = (direction) => {
    if (direction === 'up') {
      setCurrentStationIndex((prevIndex) => (prevIndex + 1) % stations.length);
    } else if (direction === 'down') {
      setCurrentStationIndex((prevIndex) => (prevIndex - 1 + stations.length) % stations.length);
    }
  };

  useSwipeHandler(handleSwipe);

  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<AdminDashboard />} />
        <Route path="/" exact element={
          <div className="app">
            {stations.length > 0 && (
              <>
                <div className="station-name">{stations[currentStationIndex].name}</div>
                <WaveEffect />
                <MediaPlayer station={stations[currentStationIndex]} />
              </>
            )}
          </div>
        } />
      </Routes>
    </Router>
  );
};

export default App;
