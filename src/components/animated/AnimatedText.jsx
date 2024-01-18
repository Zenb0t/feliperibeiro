import { Text, useBreakpointValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const AnimateText = ({ children, variants, delay }) => {
  const description = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { delay: delay } },
  };
  return (
    <Text
      as={motion.span}
      variants={description}
      initial="hidden"
      animate="show"
      color={'white'}
      fontSize={useBreakpointValue({ base: 'md', md: 'lg' })}
    >
      {children}
    </Text>
  );
};
