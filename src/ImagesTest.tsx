import { useContext } from "react";
import { ImageContext } from "./ImageContextProvider";

export const ImagesTest = () => {
  const imageValues = useContext(ImageContext);
  return <div>{JSON.stringify(imageValues)}</div>;
};
