import MainText from "./Components/MainText/MainText";
import TitleBar from "./Components/TitleBar/TextBar";

const ScrollHighlight = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <TitleBar />
      <MainText />
    </div>
  );
};

export default ScrollHighlight;
