import topBanner from "./images/12.3-1A-Pull-TopSection.png";
import centerVideo from "./images/12.3-1B-Pull-CenterVideo-FPO.png";
import bottomBanner from "./images/12.3-1C-Pull-BottomSection.png";
import styles from "./PullScreen.module.css";
import { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import classnames from "classnames";
import { ROUTES } from "./constants";

const PullScreen = () => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    if (window.location.pathname === ROUTES.MAIN) {
      navigate(ROUTES.DETAILS);
      console.log("screen clicked");
    }
  }, [navigate]);

  useEffect(() => {
    document.addEventListener("click", handleClick);
  }, [handleClick]);

  return (
    <div
      className={classnames({
        [styles.pullScreen]: true,
      })}
    >
      <img src={topBanner} alt="Decorative Banner" />
      <img src={centerVideo} alt="Voices of Mont Belview" />
      <img src={bottomBanner} alt="Decorative Banner" />
    </div>
  );
};

export default PullScreen;
