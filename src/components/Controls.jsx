import styles from "./Controls.module.css";

import { LiaFreeCodeCamp } from "react-icons/lia";
import { VolumeSlider } from "./VolumeSlider";

export const Controls = ({ name }) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <p>
          FCC
          <span>
            <LiaFreeCodeCamp />
          </span>
        </p>
      </div>
      <div className={styles.controls_container}>
        <p id="display" className={styles.display}>
          {name ? name : "Audio"}
        </p>
        <VolumeSlider />
      </div>
    </div>
  );
};
