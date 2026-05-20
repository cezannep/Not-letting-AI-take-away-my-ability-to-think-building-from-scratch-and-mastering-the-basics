import ScrollTextBar from "./Components/ScrollTextBar/ScrollTextBar";
import NameTag from "../Partials/NameTag/NameTag";

const ScrollText = () => {
  return (
    <>
      <div className="relative flex min-h-screen w-full items-center justify-center">
        <NameTag
          color={["#ffffff", "#ff0000", "#ffffff"]}
          title="Scroll Text!"
        />
        Scroll Text!
        <ScrollTextBar />
      </div>
    </>
  );
};

export default ScrollText;
