import styles from "./ChampionDetailsImage.module.css";
import { VFC, useContext } from "react";
import { ImageContext } from "../ImageContextProvider";

const ChampionDetailsImage: VFC<{ imageSrc: string }> = ({ imageSrc }) => {
  const { serverURL } = useContext(ImageContext);
  return (
    <div className={styles.imageBackground}>
      <img src={`${serverURL}/${imageSrc}`} />
    </div>
  );
};

export default ChampionDetailsImage;
