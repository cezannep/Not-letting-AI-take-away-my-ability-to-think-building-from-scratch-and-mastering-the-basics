import TextLine from "../TextLine/TextLine";

const ScrollTextBar = () => {
  return (
    <div className="overflow-hidden leading-35">
      <TextLine word="Creative" direction="right" />
      <TextLine word="Design" direction="left" />
      <TextLine word="Zance" direction="right"/>
      <TextLine word="studio" direction="left" />
    </div>
  );
};

export default ScrollTextBar;
