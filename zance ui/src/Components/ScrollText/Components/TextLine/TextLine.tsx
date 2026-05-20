import { motion, useScroll, useTransform } from "motion/react";
import React, { useMemo } from "react";

interface Props {
  word: string;
  direction: "left" | "right";
}

const TextLine = ({ word, direction }: Props) => {
  const upperWord = word.toUpperCase();

  const TextLineMemo = useMemo(() => {
    return Array.from({ length: 12 }).map((_, index) => (
      <span key={index}>
        {upperWord}{" "}
        <span
          className="text-transparent"
          style={{ WebkitTextStroke: "2px #4b5563" }}
        >
          {upperWord}{" "}
        </span>
      </span>
    ));
  }, [upperWord]);

  const { scrollY } = useScroll();
  const x = useTransform(
    scrollY,
    [0, 2000],
    direction === "left" ? [-1000, 0] : [0, -1000],
  );
  return (
    <motion.h1
      style={{ x }}
      className="text-white text-[5vw] whitespace-nowrap"
    >
      {TextLineMemo}
    </motion.h1>
  );
};

export default React.memo(TextLine);
