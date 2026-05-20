import ImageBar from "./Components/ImageBar/ImageBar";
import TextBar from "./Components/TextBar/TextBar";
import NameTag from "../Partials/NameTag/NameTag";
import { useMotionValue } from "motion/react";

const HoverMe = () => {
  const hoveredIndex = useMotionValue(-1);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full bg-black ">
      <NameTag
          color={["#ffffff", "#ff0000", "#ffffff"]}
          title="Hover Me!"
        />
      <ImageBar hoveredIndex={hoveredIndex} />
      <TextBar hoveredIndex={hoveredIndex} />
    </div>
  );
};

export default HoverMe;
