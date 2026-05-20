import { motion } from "motion/react";
interface Props {
  color: string[];
  title: string;
}
const NameTag = ({ title, color }: Props) => {
  console.count("NameTag --------------------------- rendered")
  return (
    <motion.p
      animate={{
        color,
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute top-5 left-5  text-white  z-300 cursor-not-allowed"
    >
      {title}
    </motion.p>
  );
};

export default NameTag;
