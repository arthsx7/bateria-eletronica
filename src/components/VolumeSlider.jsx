import { useState, useEffect } from "react";

import styles from "./VolumeSlider.module.css";

export const VolumeSlider = () => {
  const [volume, setVolume] = useState(50);

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  useEffect(() => {
    const audioRef = document.querySelector(".clip");
    if (audioRef) {
      audioRef.volume = volume / 100;
    }
  }, [volume]);

  return (
    <div className={styles.volume_slider}>
      <span className={styles.bar}>
        <span className={styles.fill}></span>
      </span>
      <div className={styles.slider}>
        <input
          type="range"
          min="0"
          max="100"
          step={1}
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};
