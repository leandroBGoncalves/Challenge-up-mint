import styles from "./styleHome.module.scss";

import theLodgeTopImg from "../../assets/backgrounTop.svg";
import logoImg from "../../assets/logoSavage.svg";

export function MintHome() {
  return (
    <div className={styles.ContainerAll}>
      <img src={theLodgeTopImg} alt="bacground" />
      <div className={styles.ContentAbsolut}>
        <header className={styles.headerHome}>
          <div className={styles.ContainerHeader}>
            <img src={logoImg} alt="logo" />
            <div className={styles.boxButton}>
              <button>Farm</button>
              <button>Stake</button>
              <button>My Snowmen</button>
              <button>Connect Wallet</button>
            </div>
          </div>
        </header>
        <div className={styles.boxGif}>
            <img src="https://s3-alpha-sig.figma.com/img/d6bc/946c/bd831f9047fff36fa9b03934a8fe6eb4?Expires=1639958400&Signature=MMpi7S7gdzL9Z2pykWwr-qBSndtFUq9MPz1dgApVEY4GTbtf4eJmOAGTXSS6m~3YFSr3Qv7KfqEZWHNqflbtI3QSeC5gqZD-UQqSHgAJ8nwGDnqIvDpW8JGWasx~LkI~GORyeHAOepGSWuHKYOpm0hh1Acg6xpepEA6MTq17O6WGiD0uNBWOCZjE3Uka-xn~-~YJuZppnXa3dZiz-4SUCavLDivNNBMR~uLYalJqdj34AmfF1jzieWfiLheNsVK~wkpIgCLZ1L8svhEJ7-Y3Y2E9nLAO4Q3Sfm2lvK1fRoQyDBRVoZ5rfa-sgzRjns92qhidHaRBEmHFhhQIHbmZDQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
        </div>
      </div>
    </div>
  );
}
