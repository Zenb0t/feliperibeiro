
import { Text, useBreakpointValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const DELAY = 0.5;
const STAGGER = 0.2;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: DELAY,
      staggerChildren: 0.1,
      delayChildren: DELAY + STAGGER,
    },
  },
};

const item = {
  hidden: { y: 0, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export const HelloText = ({ text }) => {
	const fontSize = useBreakpointValue({ base: '4xl', md: '5xl' });
	const [displayedText, setDisplayedText] = useState('');
  
	useEffect(() => {
	  // Calculate the total initial delay
	  const initialDelay = DELAY + text.length * STAGGER * 1000;
  
	  // Start the typing effect after the initial delay
	  const timeoutId = setTimeout(() => {
		const interval = setInterval(() => {
		  setDisplayedText((prev) => (prev.length < text.length ? text.substr(0, prev.length + 1) : prev));
		}, 100); // Adjust typing speed
  
		return () => clearInterval(interval);
	  }, initialDelay);
  
	  return () => clearTimeout(timeoutId);
	}, [text]);
  
	return (
	  <motion.h1 variants={container} initial="hidden" animate="show">
		{displayedText.split('').map((char, index) => (
		  <AnimateChar key={index} fontSize={fontSize}>
			{char}
		  </AnimateChar>
		))}
		<BlinkingPipe fontSize={fontSize} />
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

const BlinkingPipe = ({ fontSize }) => {
	const pipeAnimation = {
	  blink: {
		opacity: [1, 0],
		transition: { repeat: 8, duration: 0.8 },
	  },
	};
  
	return (
		<Text
		as={motion.span}
		color={'white'}
		fontSize={fontSize}
		variants={pipeAnimation}
		initial="blink"
		animate="blink"
	  >
		|
	  </Text>
	);
  };