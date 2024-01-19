import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  useColorModeValue,
  HStack,
  Icon,
  Link,
  Heading,
  Tooltip,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { scrollToId } from '../utils';

const LinkWrapper = ({ href, id, text, ...props }) => {
    const handleClick = e => {
      e.preventDefault();
      scrollToId(id);
    };

    return (
      <Link
        href={href}
        onClick={handleClick}
        {...props}
      >
        {text}
      </Link>
    );
  };

export default function AboutMe() {
  return (
    <Flex
      as={'section'}
      py={useBreakpointValue({ base: 8, md: 20 })}
      id="about"
    >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 8, md: 10 })}
      >
        <Heading py={8} color="orange.500">
          About me
        </Heading>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={useColorModeValue('black', 'white')}
            fontSize={useBreakpointValue({ base: 'md', md: 'lg' })}
          >
            My name is Felipe Ribeiro, and I'm a software developer with a
            passion for crafting applications that address real-world problems.
            My coding approach is simple: clean, efficient, and value-driven.
            Transitioning from a business background, I bring a unique
            perspective to tech, blending strategic planning with technical
            problem-solving.
          </Text>
          <Text
            color={useColorModeValue('black', 'white')}
            fontSize={useBreakpointValue({ base: 'md', md: 'lg' })}
          >
            These past experiences have shaped my ability to navigate complex
            projects with a clear vision and communicate effectively with teams
            and stakeholders. I thrive on turning challenges into opportunities
            and complex concepts into user-friendly solutions.
          </Text>
          <Text
            color={useColorModeValue('black', 'white')}
            fontSize={useBreakpointValue({ base: 'md', md: 'lg' })}
          >
            Outside of work, I'm usually exploring BC's trails, playing guitar,
            or diving into the latest in physics, AI, gastronomy and quantum
            computing. I cherish time with my family and believe in balancing
            hard work with moments that inspire.
          </Text>
          <Text
            color={useColorModeValue('black', 'white')}
            fontSize={useBreakpointValue({ base: 'md', md: 'lg' })}
          >
            I'm on the lookout for opportunities to collaborate and innovate,
            aiming to make technology that's as impactful as it is intelligent.
            If you're interested in working together, please{' '}
            <LinkWrapper href="#contact" id="contact" style={{ color: 'orange' }} text={"reach out"}/>
            !
          </Text>
          <HStack py={8} alignSelf={'center'} spacing={8}>
            {/* <Tooltip label="My Resume" aria-label='PDF Resume'>
                            <Link href='' >
                                <Icon as={FaRegFileAlt} w={12} h={12}
                                    _hover={{ transform: 'scale(1.1)', color: 'cyan.500' }}
                                    sx={{ ':hover > svg': { transform: 'scale(1.1)' } }}
                                    transition="all 0.15s ease"
                                />
                            </Link>
                        </Tooltip>  */}
            <Tooltip label="LinkedIn" aria-label="LinkedIn">
              <Link
                href="https://www.linkedin.com/in/felipe-ribeiro-245a37192/"
                isExternal
              >
                <Icon
                  as={FaLinkedin}
                  w={12}
                  h={12}
                  _hover={{ transform: 'scale(1.1)', color: 'blue.500' }}
                  sx={{ ':hover > svg': { transform: 'scale(1.1)' } }}
                  transition="all 0.15s ease"
                />
              </Link>
            </Tooltip>
            <Tooltip label="GitHub" aria-label="GitHub">
              <Link href="https://github.com/Zenb0t" isExternal>
                <Icon
                  as={FaGithub}
                  w={12}
                  h={12}
                  _hover={{ transform: 'scale(1.1)', color: 'purple.500' }}
                  sx={{ ':hover > svg': { transform: 'scale(1.1)' } }}
                  transition="all 0.15s ease"
                />
              </Link>
            </Tooltip>
          </HStack>
        </Stack>
      </VStack>
    </Flex>
  );
}
