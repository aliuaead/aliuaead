const saveStations = (stations) => {
    localStorage.setItem('stations', JSON.stringify(stations));
  };
  
  export const getStations = () => {
    const storedStations = localStorage.getItem('stations');
    return storedStations ? JSON.parse(storedStations) : [];
  };
  
  export const addStation = (newStation) => {
    const stations = getStations();
    stations.push(newStation);
    saveStations(stations);
    return stations; // Return updated list
  };
  
  export const editStation = (updatedStation) => {
    let stations = getStations();
    const index = stations.findIndex(station => station.name === updatedStation.name);
    if (index !== -1) {
      stations[index] = updatedStation;
      saveStations(stations);
    }
    return stations; // Return updated list
  };
  
  export const removeStation = (stationName) => {
    let stations = getStations();
    stations = stations.filter(station => station.name !== stationName);
    saveStations(stations);
    return stations; // Return updated list
  };
  