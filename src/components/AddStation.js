import React, { useState } from 'react';

const AddStation = ({ onAddStation }) => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  const handleAddStation = (e) => {
    e.preventDefault();
    onAddStation({ name, url });
    setName('');
    setUrl('');
  };

  return (
    <div className="add-station">
      <h2>Add Station</h2>
      <form onSubmit={handleAddStation}>
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
        <button type="submit">Add Station</button>
      </form>
    </div>
  );
};

export default AddStation;
