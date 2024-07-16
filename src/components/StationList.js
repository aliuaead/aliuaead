import React, { useEffect, useState } from 'react';
import { getStations } from '../data/stationService';

const StationList = () => {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    setStations(getStations());
  }, []);

  return (
    <div className="station-list">
      <h2>Active Stations</h2>
      <ul>
        {stations.map((station, index) => (
          <li key={index}>{station.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default StationList;
