import { useState } from "react";
import { motion, MotionValue } from "motion/react";

import img1 from "/images/10001.webp";
import img2 from "/images/10002.webp";
import img3 from "/images/10003.webp";
import img4 from "/images/10004.webp";
import img5 from "/images/10005.webp";
import img6 from "/images/10006.webp";
import img7 from "/images/10007.webp";
import img8 from "/images/10008.webp";
import img9 from "/images/10009.webp";
import React from "react";

interface Props {
  hoveredIndex: MotionValue<number>;
}

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const ImageBar = ({ hoveredIndex }: Props) => {
  console.count("ImageBar rendered");

  const [hoveredIndexis, setHoveredisIndex] = useState<number>(-1);

  return (
    <div className="flex items-center justify-center mt-35 cursor-pointer py-3 ">
      <div className="flex imagebar gap-2">
        {images.map((img, index) => {
          const isHovered = hoveredIndexis === index;

          return (
            <motion.img
              key={index}
              layout={false}
              src={img}
              alt={`img-${index}`}
              className={`rounded-xl cursor-pointer object-cover ${isHovered ? "z-50" : "z-10"}`}
              onMouseEnter={() => {
                if (hoveredIndexis !== index) {
                  setHoveredisIndex(index);
                  hoveredIndex.set(index);
                }
              }}
              onMouseLeave={() => {
                setHoveredisIndex(-1);
                hoveredIndex.set(-1);
              }}
              initial={{ scale: 1, x: 0 }}
              animate={{
                scale: isHovered ? 2.8 : 1,
                /* prettier-ignore */
                x: hoveredIndexis !== -1 ? index < hoveredIndexis ? -50 : index > hoveredIndexis ? 50 : 0 : 0,
              }}
              transition={{
                scale: {
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                },
                x: {
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                },
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(ImageBar);
