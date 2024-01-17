import { Text, useBreakpointValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const text = 'Hello World!';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 2,
      staggerChildren: 0.1,
      delayChildren: 2.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const cursor = {
  show: { 
    opacity: [1, 0, 1], 
    x: [0, text.length * 8],
    transition: { repeat: Infinity, duration: 0.8 },
  },
};

export const HelloText = ({ text }) => {
  const fontSize = useBreakpointValue({ base: '4xl', md: '5xl' });

  return (
    <motion.h1 variants={container} initial="hidden" animate="show">
      <Text
        as={motion.span}
        color={'white'}
        fontWeight={700}
        lineHeight={1.2}
        fontSize={fontSize}
        variants={cursor}
        animate="show"
      >
        |
      </Text>
      {text.split('').map((char, index) => (
        <AnimateChar key={index} fontSize={fontSize}>
          {char}
        </AnimateChar>
      ))}
    </motion.h1>
  );
};

export const AnimateChar = ({ children, fontSize }) => {
  return (
    <Text
      as={motion.span}
      color={'white'}
      fontWeight={700}
      lineHeight={1.2}
      fontSize={fontSize}
      variants={item}
    >
      {children}
    </Text>
  );
};