import React, { useState } from 'react';

const RemoveStation = () => {
  const [name, setName] = useState('');

  const handleRemoveStation = (e) => {
    e.preventDefault();
    // Logic to remove station from JSON database
    console.log('Station Removed:', { name });
  };

  return (
    <div className="remove-station">
      <h2>Remove Station</h2>
      <form onSubmit={handleRemoveStation}>
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
        <button type="submit">Remove Station</button>
      </form>
    </div>
  );
};

export default RemoveStation;
