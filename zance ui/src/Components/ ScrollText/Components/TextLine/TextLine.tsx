import { motion, useScroll, useTransform } from "motion/react";

interface Props {
  word: string;
  direction: "left" | "right";
}

const TextLine = ({ word, direction }: Props) => {
  const { scrollY } = useScroll();
  const x1 = useTransform(
    scrollY,
    [0, 1000],
    direction === "left" ? [-500, 0] : [0, 500],
  );
  return (
    <motion.h1
      style={{ x: x1 }}
      className="text-white text-[5vw] whitespace-nowrap"
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <span key={index}>
          {word.toUpperCase()}{" "}
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "2px #4b5563" }}
          >
            {word.toUpperCase()}{" "}
          </span>
        </span>
      ))}
    </motion.h1>
  );
};

export default TextLine;
