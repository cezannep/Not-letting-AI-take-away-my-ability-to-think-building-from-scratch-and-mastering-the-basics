import ImageBar from "./Components/ImageBar/ImageBar";
import TextBar from "./Components/TextBar/TextBar";
import { useState } from "react";
import NameTag from "../Partials/NameTag/NameTag";

const HoverMe = () => {
  const [index, setIndex] = useState(-1);
  function receiveIndex(id: number) {
    setIndex(id);
  }
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      <NameTag
          color={["#ffffff", "#ff0000", "#ffffff"]}
          title="Scroll Text!"
        />
      <ImageBar sendIndex={receiveIndex} />
      <TextBar index={index} />
    </div>
  );
};

export default HoverMe;
