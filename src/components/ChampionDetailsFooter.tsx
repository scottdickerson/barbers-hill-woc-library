import { VFC } from "react";
import teamsFooter from "./images/12.3-2C-Teams-BottomSection.png";
import styles from "./ChampionDetailsFooter.module.css";
import nextTeamButton from "./images/12.3-2B-Teams-NextTeam.png";
import previousTeamButton from "./images/12.3-2B-Teams-PreviousTeam.png";

export interface ChampionDetailsFooterProps {
  onNext?: () => void;
  onPrevious?: () => void;
  description: string;
}

const ChampionDetailsFooter: VFC<ChampionDetailsFooterProps> = ({
  onNext,
  onPrevious,
  description,
}) => {
  return (
    <div className={styles.championDetailsFooter}>
      <div className={styles.championDetailsButtons}>
        {onPrevious ? (
          <button className={styles.previousTeamButton} onClick={onPrevious}>
            <img src={previousTeamButton} />
          </button>
        ) : null}
        {onNext ? (
          <button className={styles.nextTeamButton} onClick={onNext}>
            <img src={nextTeamButton} />
          </button>
        ) : null}
      </div>
      <img src={teamsFooter} />
      <div className={styles.championDetailsDescription}>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default ChampionDetailsFooter;
