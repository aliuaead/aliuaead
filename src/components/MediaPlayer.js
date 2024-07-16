import React, { useState, useEffect, useRef } from 'react';
import { Howl } from 'howler'; // Removed unused Howler import
import './MediaPlayer.css';

const MediaPlayer = ({ station }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const soundRef = useRef(null);

  useEffect(() => {
    if (station) {
      if (soundRef.current) {
        soundRef.current.unload();
      }
      soundRef.current = new Howl({
        src: [station.url],
        html5: true,
      });
    }
  }, [station]);

  const handlePlayPause = () => {
    if (isPlaying) {
      soundRef.current.pause();
    } else {
      soundRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="media-player">
      <button onClick={handlePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default MediaPlayer;
