import React, { useState } from 'react';
import { editStation } from '../data/stationService';

const EditStation = () => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  const handleEditStation = (e) => {
    e.preventDefault();
    editStation({ name, url });
    console.log('Station Edited:', { name, url });
  };

  return (
    <div className="edit-station">
      <h2>Edit Station</h2>
      <form onSubmit={handleEditStation}>
        <div>
          <label htmlFor="name">Station Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="url">Station URL:</label>
          <input
            type="url"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </div>
        <button type="submit">Edit Station</button>
      </form>
    </div>
  );
};

export default EditStation;
