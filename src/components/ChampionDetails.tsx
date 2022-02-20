import styles from "./ChampionDetails.module.css";
import { useContext, useEffect } from "react";
import { ImageContext } from "../ImageContextProvider";
import { useParams, useNavigate } from "react-router-dom";
import ChampionDetailsHeader from "./ChampionDetailsHeader";
import ChampionDetailsImage from "./ChampionDetailsImage";
import ChampionDetailsFooter from "./ChampionDetailsFooter";
import { ROUTES } from "./constants";
import { useTimeout } from "../customHooks";

const DETAILS_PAGE_TIMEOUT = 60000;

const ChampionDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { images } = useContext(ImageContext);
  const imageToShowIndex = id
    ? images?.findIndex((image) => image.id === id)
    : 0; // start from zero if not specified
  const imageToShow = images[Math.max(0, imageToShowIndex)];

  useTimeout(() => navigate(ROUTES.MAIN), DETAILS_PAGE_TIMEOUT);

  const handleNext = () => {
    console.log("next champion");
    navigate(`${ROUTES.DETAILS}/${images[imageToShowIndex + 1]?.id}`);
  };
  const handlePrevious = () => {
    console.log("previous champion");
    navigate(`${ROUTES.DETAILS}/${images[imageToShowIndex - 1]?.id}`);
  };
  return imageToShow ? (
    <div className={styles.championDetails}>
      <ChampionDetailsHeader {...imageToShow} />
      <ChampionDetailsImage imageSrc={imageToShow.fileName} />
      <ChampionDetailsFooter
        description={imageToShow.description}
        onNext={imageToShowIndex < images.length - 1 ? handleNext : undefined}
        onPrevious={imageToShowIndex > 0 ? handlePrevious : undefined}
      />
    </div>
  ) : null;
};

export default ChampionDetails;
