import { useState } from "react";

import { Controls } from "./Controls.jsx";

import styles from "./DrumPad.module.css";

export const DrumPad = ({ drums }) => {
  const [name, setName] = useState("");

  const playAudio = (letter, name) => {
    setName(name);

    const audioRef = document.getElementById(letter);
    if (audioRef) {
      audioRef.currentTime = 0;
      audioRef.play();
    }
  };

  const handleKeyDown = (event) => {
    const keyClicked = event.key.toUpperCase();
    const buttonRef = buttonRefs[keyClicked];
    if (buttonRef) {
      buttonRef.click();
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  const buttonRefs = {};

  return (
    <div className="container" id="drum-machine">
      <div className={`pad-bank ${styles.padBank}`}>
        {drums.map((drum, key) => (
          <div
            className={`drum-pad ${styles.drumPad}`}
            id={drum.name}
            onClick={() => {
              playAudio(drum.letter, drum.name);
            }}
            key={key}
            ref={(element) => {
              buttonRefs[drum.letter] = element;
            }}
          >
            <audio className="clip" id={drum.letter} src={drum.url}></audio>
            {drum.letter}
          </div>
        ))}
      </div>
      <div className="controls">
        <Controls name={name} />
      </div>
    </div>
  );
};
