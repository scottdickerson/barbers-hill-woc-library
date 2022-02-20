import { useContext } from "react";
import { ImageContext } from "./ImageContextProvider";
import { useParams } from "react-router-dom";

export const ImagesTest = () => {
  const { id } = useParams();
  const { images } = useContext(ImageContext);
  const imageToShow = id
    ? images?.find((image) => image.id === id)
    : images?.[0];
  return <div>{JSON.stringify(imageToShow)}</div>;
};
