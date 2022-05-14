import styles from "./ChampionDetails.module.css";
import { useContext } from "react";
import { ImageContext } from "../ImageContextProvider";
import { useParams, useNavigate } from "react-router-dom";
import { BarbersHillDetailsHeader } from "@scottdickerson/barbers-hill-shared-components";
import ChampionDetailsImage from "./ChampionDetailsImage";
import ChampionDetailsFooter from "./ChampionDetailsFooter";
import { ROUTES } from "./constants";
import { useTimeout } from "../customHooks";

const DETAILS_PAGE_TIMEOUT = 60000;
// const DETAILS_PAGE_TIMEOUT = 600000;

const ChampionDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { images } = useContext(ImageContext);
  const imageToShowIndex = id
    ? images?.findIndex((image) => image.id === id)
    : 0; // start from zero if not specified
  const imageToShow = images[Math.max(0, imageToShowIndex)];

  useTimeout(() => navigate(ROUTES.MAIN), DETAILS_PAGE_TIMEOUT, id || "");

  const handleNext = () => {
    console.log("next champion");
    navigate(`${ROUTES.DETAILS}/${images[imageToShowIndex + 1]?.id}`);
  };
  const handlePrevious = () => {
    console.log("previous champion");
    navigate(`${ROUTES.DETAILS}/${images[imageToShowIndex - 1]?.id}`);
  };
  return (
    <div className={styles.championDetails}>
      <BarbersHillDetailsHeader
        title={imageToShow.sport}
        subtitle={imageToShow.award}
        details={imageToShow.year.toString()}
      />
      <ChampionDetailsImage imageSrc={imageToShow?.fileName} />
      <ChampionDetailsFooter
        description={imageToShow?.description}
        onNext={imageToShowIndex < images.length - 1 ? handleNext : undefined}
        onPrevious={imageToShowIndex > 0 ? handlePrevious : undefined}
      />
    </div>
  );
};

export default ChampionDetails;
