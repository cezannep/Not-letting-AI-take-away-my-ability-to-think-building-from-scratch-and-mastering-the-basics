import { useState } from "react";
import { motion } from "motion/react";

import img1 from "/images/10001.webp";
import img2 from "/images/10002.webp";
import img3 from "/images/10003.webp";
import img4 from "/images/10004.webp";
import img5 from "/images/10005.webp";
import img6 from "/images/10006.webp";
import img7 from "/images/10007.webp";
import img8 from "/images/10008.webp";
import img9 from "/images/10009.webp";

interface Props {
  sendIndex: (val: number) => void;
}

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const ImageBar = ({ sendIndex }: Props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className="flex items-center justify-center mt-35 cursor-pointer py-3 ">
      <div className="flex imagebar gap-2">
        {images.map((img, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <motion.img
              key={index}
              src={img}
              alt={`img-${index}`}
              className=" rounded-xl cursor-pointer object-cover"
              onHoverStart={() => {
                setHoveredIndex(index);
                sendIndex(Number(index));
              }}
              onHoverEnd={() => {
                setHoveredIndex(null);
                sendIndex(-1);
              }}
              initial={{ scale: 1, x: 0 }}
              animate={{
                scale: isHovered ? 1.1 : 1,
                /* prettier-ignore */
                x: hoveredIndex !== null ? index < hoveredIndex ? -50 : index > hoveredIndex ? 50 : 0 : 0,
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

export default ImageBar;
