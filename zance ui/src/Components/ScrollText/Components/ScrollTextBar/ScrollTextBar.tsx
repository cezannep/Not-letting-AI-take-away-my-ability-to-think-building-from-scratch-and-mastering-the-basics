import TextLine from "../TextLine/TextLine";

const ScrollTextBar = () => {
  return (
    <div className="absolute w-full overflow-hidden ">
      <TextLine direction="left" word="Creative" />
      <TextLine direction="right" word="Design" />
      <TextLine direction="left" word="Zance" />
      <TextLine direction="right" word="studio" />
    </div>
  );
};

export default ScrollTextBar;
