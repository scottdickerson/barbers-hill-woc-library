import styles from "./ChampionDetailsImage.module.css";
import { VFC } from "react";

const ChampionDetailsImage: VFC<{ imageSrc: string }> = ({ imageSrc }) => (
  <div className={styles.imageBackground}>
    <img src={`http://localhost:3000/api/${imageSrc}`} />
  </div>
);

export default ChampionDetailsImage;
