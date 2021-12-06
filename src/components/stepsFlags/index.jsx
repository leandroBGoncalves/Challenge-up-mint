import StepImg from "../../assets/BackGroundSteps.svg";

import styles from "./styleStep.module.scss";

export function StepsFlags() {
  return (
    <div className={styles.ContainerAllSteps}>
      <img src={StepImg} alt="StepImg" />
      <div className={styles.ContentAbsolutSteps}>
        <h1>Mint Roadmap</h1>
        <div className={styles.boxInfoRed}>
          <span>25%</span>
          <div>
            <p>-1,250 AVAX allocated to the Snowmen Treasury.</p>
            <p>-Liquidity Pool (LDOGE-AVAX) opens on Trader Joe.</p>
            <p>
              -625 AVAX paired with LODGE and added to the pool as initial
              liquidity.
            </p>
          </div>
        </div>
        <div className={styles.boxInfoRed}>
          <span>50%</span>
          <div>
            <p>-2,500 AVAX allocated to the Snowmen Treasury.</p>
            <p>-The Snowmen Treasury begins $LODGE buy backs.</p>
            <p>-Random airdrops to stakers & LP farmers begin.</p>
          </div>
        </div>
        <div className={styles.boxInfoRed}>
          <span>75%</span>
          <div>
            <p>-3,750 AVAX allocated to the Snowmen Treasury.</p>
            <p>-The Snowmen Treasury begins burning $LODGE.</p>
            <p>-Giveaway of 10 Snowmen to Snowmen stakers.</p>
          </div>
        </div>
        <div className={styles.boxInfoRed}>
          <span>100%</span>
          <div>
            <p>-Phase 3 begins.</p>
            <p>-Snowmen Treasury is chalk full of AVAX.</p>
            <p>
              -Savage Snowmen launch party (special guests, holders free entry)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
