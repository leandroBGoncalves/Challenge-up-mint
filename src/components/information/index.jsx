import { useState } from "react";
import SnowmanLeftImg from "../../assets/SnowmanLeft.svg";
import SnowmanRightImg from "../../assets/SnowmanRight.svg";

import styles from './styleInformation.module.scss';

export function InformationMenber() {
    const [counter, setCounter] = useState(0);

    function handleCounterAdd() {
        setCounter(counter + 1)
    }

    function handleCounterWithdraw() {
        if (counter !== 0)
        return setCounter(counter - 1)
    }

  return (
    <div className={styles.ContainerAll}>
      <div className={styles.ShowTextInformatiom}>
        <img src={SnowmanLeftImg} alt="SnowmanLeft" />
        <p>
          Welcome to The Lodge. If you want to be a member you’ll need a snowman
          first. Nothing personal, just want to make sure you aren’t just
          anybody. The Lodge consists of only the most savage, laid back avax
          chads in all the snow caps. Fresh pow on deck, heaters inside, beer on
          tap, nothing beats The Lodge. You understand now right?
        </p>
        <img src={SnowmanRightImg} alt="SnowmanRight" />
      </div>
      <div className={styles.BoxCounter}>
          <div className={styles.counter}>
              <span onClick={handleCounterWithdraw}>-</span>
              <p>{counter}</p>
              <span onClick={handleCounterAdd} >+</span>
          </div>
          <button>MINT SNOWMEN</button>
      </div>
      <div className={styles.BottonInformation}>
          <p>9999/10000</p>
          <span>Have Joined The Lodge</span>
      </div>
    </div>
  );
}
