import savageLeftRevisedImg from "../../assets/SAVAGEMAPREVISED.svg";

import styles from "./styleRoadMap.module.scss";

export function RevisedRoadMap() {
  return (
    <div className={styles.ContainerAll}>
        <h1>Savage Snowmen Roadmap</h1>
      <div className={styles.Content}>
        <img src={savageLeftRevisedImg} alt="savageLeftRevisedImg" />
        <div className={styles.boxLeft}>
          <div className={styles.boxRowInformation}>
            <div>Phase 1</div>
            <span>
              Mint a Snowman to join like-minded Avax Chads in The Lodge. We all
              just like to have a good time and enjoy Avalanche.
            </span>
          </div>
          <div className={styles.boxRowInformation}>
            <div>Phase 2</div>
            <span>
              Stake your Snowman and start earning $LODGE! The earlier you
              accumulate the better. $LODGE is our ecosystem token and the
              currency of The Lodge.
            </span>
          </div>
          <div className={styles.boxRowInformation}>
            <div>Phase 3</div>
            <span>
              Get your team to The Lodge first! Collaborate with fellow
              giga-brain Snowmen to solve the mystery of the Savage Snowmen.
              This is only the beginning...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
