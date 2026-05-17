import { motion } from "motion/react";

interface Props {
  index: number;
}

const TextBar = ({ index }: Props) => {
  const defaultString = "#kiper-ui";
  console.log("text bar is rendering");
  const data = [
    "faffa",
    "kaint",
    "att",
    "bamb",
    "sira",
    "koka",
    "pappi",
    "sawad",
    "khatham",
  ];
  return (
    <div className="flex flex-col items-center justify-center cursor-pointer will-change-transform mt-10"> 
      <div className="flex gap-3">
        {index !== -1 &&
          data[index].split("").map((letter, index) => {
            const oddeven = index % 2;
            return (

              <motion.span
                initial={{ opacity:0,y: oddeven ? 50 : -50 }}
                animate={{  opacity:1,y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className=" text-[20vw] font-bold text-red-700 select-none"
                key={index}
              >
                {letter.toUpperCase()}
              </motion.span>
            );
          })}

        {index == -1 &&
          defaultString.split("").map((letter, index) => {
            const oddeven = index % 2;
            return (

              <motion.span
                initial={{ opacity:0,y: oddeven ? 50 : -50 }}
                animate={{ opacity:1,y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="block text-[20vw] font-bold text-white select-none"
                key={index}
              >
                {letter.toUpperCase()}
              </motion.span>
            );
          })}
      </div>
    </div>
  );
};

export default TextBar;
