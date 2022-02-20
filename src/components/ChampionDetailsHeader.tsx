import { VFC } from "react";
import teamsHeader from "./images/12.3-2A-Teams-TopSection.png";
import styles from "./ChampionDetailsHeader.module.css";

export interface ChampionDetailsHeaderProps {
  sport: string;
  award: string;
  year: number;
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
          {sport.toLocaleUpperCase()}
        </span>
        <span className={styles.championDetailsHeaderTopText}>
          {award.toLocaleUpperCase()}
        </span>
        <span className={styles.championDetailsHeaderBottomText}>
          {year.toString()}
        </span>
      </div>
      <img src={teamsHeader} />
    </div>
  );
};

export default ChampionDetailsHeader;
