import {
  Stack,
  Flex,
  Button,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import bgImage from '../assets/cup-of-coffee-g32e28e62d_1920.jpg';
import { scrollToId } from '../utils';
import { HelloText } from './animated/HelloText';
import { AnimateText } from './animated/AnimatedText';
import { AnimateBox } from './animated/AnimatedBox';

export default function HeroWithBackgroundImage({ id }) {
  return (
    <Flex
      w={'full'}
      h={'99vh'}
      backgroundImage={bgImage}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
      id={id}
    >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
      >
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <HelloText text={"Hi, I'm Felipe"} />
          <AnimateText delay={4.6}>
            A Vancouver-based Full Stack Developer. With a strategic mindset and
            insightful approach to technology, I love building mobile and web
            applications that solve real challenges and create lasting value.
          </AnimateText>
          <AnimateBox delay={4.6}>
            <Stack direction={'row'} gap={2} pt={2}>
              <Button
                bg={'whiteAlpha.300'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'orange.500' }}
                onClick={() => scrollToId('about')}
              >
                About me
              </Button>
              <Button
                bg={'whiteAlpha.300'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'orange.500' }}
                onClick={() => scrollToId('projects')}
              >
                Check my projects
              </Button>
            </Stack>
          </AnimateBox>
        </Stack>
      </VStack>
    </Flex>
  );
}
