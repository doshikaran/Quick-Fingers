import React from "react";
import { motion } from "framer-motion";
import { formatPercentage } from "../utils/helper";

interface Props {
  errors: number;
  accuracy: number;
  total: number;
  className?: string;
}

const Analysis = ({ errors, accuracy, total, className }: Props) => {
  const initial = { opacity: 0 };
  const animate = { opacity: 1 };
  return (
    <motion.ul
      initial={initial}
      animate={animate}
      className={`flex flex-col items-center text-primary-400 space-y-3 ${className}`}
    >
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ duration: 0.2 }}
        className=" font-semibold text-black uppercase text-2xl underline"
      >
        Analysis:
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ duration: 0.2, delay: 0.5 }}
        className=" font-semibold text-black"
      >
        Accuracy: {formatPercentage(accuracy)}
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ duration: 0.2, delay: 1 }}
        className="text-red-500"
      >
        Errors: {errors}
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ duration: 0.3, delay: 1.4 }}
        className=" font-semibold text-black"
      >
        Typed: {total}
      </motion.li>
    </motion.ul>
  );
};

export default Analysis;
