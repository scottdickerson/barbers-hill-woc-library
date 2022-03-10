import { VFC } from "react";
import teamsHeader from "./images/12.3-2A-Teams-TopSection.png";
import styles from "./ChampionDetailsHeader.module.css";

export interface ChampionDetailsHeaderProps {
  sport?: string;
  award?: string;
  year?: number;
}

const ChampionDetailsHeader: VFC<ChampionDetailsHeaderProps> = ({
  sport,
  award,
  year,
}) => {
  return (
    <div className={styles.championDetailsHeader}>
      <div className={styles.championDetailsHeaderText}>
        <span className={styles.championDetailsHeaderTopText}>
          {sport ? sport.toLocaleUpperCase() : "Sport cannot be loaded"}
        </span>
        <span className={styles.championDetailsHeaderTopText}>
          {award ? award.toLocaleUpperCase() : "Award cannot be loaded"}
        </span>
        <span className={styles.championDetailsHeaderBottomText}>
          {year ? year.toString() : "Year cannot be loaded"}
        </span>
      </div>
      <img src={teamsHeader} />
    </div>
  );
};

export default ChampionDetailsHeader;
