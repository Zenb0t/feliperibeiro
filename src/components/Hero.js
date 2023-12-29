import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import bgImage from '../assets/cup-of-coffee-g32e28e62d_1920.jpg';
import { scrollToId } from '../utils';

export default function HeroWithBackgroundImage({ id }) {
  return (
    <Flex
      w={'full'}
      h={'93vh'}
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
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
          >
            Hi, I'm Felipe Ribeiro, a full-stack software developer.
          </Text>
          <Text
            color={'white'}
            fontSize={useBreakpointValue({ base: 'md', md: 'lg' })}
          >
            With a strategic mindset and insightful approach to technology, I am
            a Vancouver-based software developer who builds mobile and web
            applications that solve real challenges and create lasting value.
          </Text>
          <Stack direction={'row'}>
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
        </Stack>
      </VStack>
    </Flex>
  );
}
