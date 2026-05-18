import ImageBar from "./Components/ImageBar/ImageBar";
import TextBar from "./Components/TextBar/TextBar";
import { useState } from "react";

const HoverMe = () => {
  const [index, setIndex] = useState(-1);
  function receiveIndex(id: number) {
    setIndex(id);
  }
  return (
    <>
      <ImageBar sendIndex={receiveIndex} />
      <TextBar index={index} />
    </>
  );
};

export default HoverMe;
