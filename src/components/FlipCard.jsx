import { motion } from 'framer-motion';
import { Box, useTheme, useColorModeValue } from '@chakra-ui/react';
import React, { useState } from 'react';

const FlipCard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const theme = useTheme();
  const bgColor = useColorModeValue('white', 'gray.800');

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Box onClick={flipCard} style={{ perspective: '1000px' }}>
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{
          width: '200px',
          height: '300px',
          position: 'relative',
          transformStyle: 'preserve-3d',
        }}
      >
        <Box
          bgColor={bgColor}
          boxShadow={theme.shadows.md}
          style={{
            position: 'absolute',
            backfaceVisibility: 'hidden',
            width: '100%',
            height: '100%',
            borderRadius: theme.radii.md,
          }}
        >
          {frontContent}
        </Box>
        <Box
          bgColor={bgColor}
          boxShadow={theme.shadows.md}
          style={{
            position: 'absolute',
            backfaceVisibility: 'hidden',
            width: '100%',
            height: '100%',
            borderRadius: theme.radii.md,
            transform: 'rotateY(180deg)',
          }}
        >
          {backContent}
        </Box>
      </motion.div>
    </Box>
  );
};

export default FlipCard;
