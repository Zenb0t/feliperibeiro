import React from 'react';
import { motion } from 'framer-motion';

export const AnimateBox = ({ children, variants, delay }) => {
  const description = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { delay: delay } },
  };

  return (
    <motion.div
      variants={variants || description}
      initial="hidden"
      animate="show"
      style={{ width: 'fit-content' }}
    >
      {children}
    </motion.div>
  );
};
