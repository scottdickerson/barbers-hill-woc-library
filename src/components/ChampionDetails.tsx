import teamsFooter from "./images/12.3-2C-Teams-BottomSection.png";
import styles from "./ChampionDetails.module.css";
import { useContext } from "react";
import { ImageContext } from "../ImageContextProvider";
import { useParams } from "react-router-dom";
import ChampionDetailsHeader from "./ChampionDetailsHeader";
import ChampionDetailsImage from "./ChampionDetailsImage";

const ChampionDetails = () => {
  const { id } = useParams();
  const { images } = useContext(ImageContext);
  const imageToShow = id
    ? images?.find((image) => image.id === id)
    : images?.[0];
  return imageToShow ? (
    <div className={styles.championDetails}>
      <ChampionDetailsHeader {...imageToShow} />
      <ChampionDetailsImage imageSrc={imageToShow.fileName} />
      <img src={teamsFooter} />
    </div>
  ) : null;
};

export default ChampionDetails;
