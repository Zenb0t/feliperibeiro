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
    Tooltip
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaRegFileAlt } from 'react-icons/fa';

export default function AboutMe() {
    return (
        <Flex as={'section'} py={useBreakpointValue({ base: 8, md: 20 })} id="about">
            <VStack
                w={'full'}
                justify={'center'}
                px={useBreakpointValue({ base: 8, md: 10 })}
            >
                <Heading py={8} color='orange.500'>
                    About me
                </Heading>
                <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
                    <Text
                        color={useColorModeValue('black', 'white')}
                        fontSize={useBreakpointValue({ base: 'md', md: 'lg' })}>
                        I'm a passionate software engineer who loves intellectual challenges. My aim is clean, readable and high-value code,
                        doing what needs to be done efficiently and elegantly.
                    </Text>
                    <Text
                        color={useColorModeValue('black', 'white')}
                        fontSize={useBreakpointValue({ base: 'md', md: 'lg' })}>
                        For the majority of my professional life, I have been a businessperson, which honed my ability to adapt, plan and communicate.
                        I bring with me domain analysis, problem-solving and conflict management as core skills from my past experiences.
                    </Text>
                    <Text
                        color={useColorModeValue('black', 'white')}
                        fontSize={useBreakpointValue({ base: 'md', md: 'lg' })}>
                        On a personal note, I love hiking around BCs parks and mountains,
                        playing with my daughter, fiddling some jazz and bossa-nova on my guitar and geeking out about physics and quantum computers.
                    </Text>
                    <HStack py={8} alignSelf={'center'} spacing={8}>
                        <Tooltip label="My Resume" aria-label='PDF Resume'>
                            <Link href='' >
                                <Icon as={FaRegFileAlt} w={12} h={12}
                                    _hover={{ transform: 'scale(1.1)', color: 'cyan.500' }}
                                    sx={{ ':hover > svg': { transform: 'scale(1.1)' } }}
                                    transition="all 0.15s ease"
                                />
                            </Link>
                        </Tooltip> 
                        <Tooltip label="LinkedIn" aria-label='LinkedIn'>

                            <Link href='https://www.linkedin.com/in/felipe-ribeiro-245a37192/' isExternal>
                                <Icon as={FaLinkedin} w={12} h={12}
                                    _hover={{ transform: 'scale(1.1)', color: 'blue.500' }}
                                    sx={{ ':hover > svg': { transform: 'scale(1.1)' } }}
                                    transition="all 0.15s ease"
                                />
                            </Link>
                        </Tooltip>
                        <Tooltip label="GitHub" aria-label='GitHub'>
                            <Link href='https://github.com/Zenb0t' isExternal>
                                <Icon as={FaGithub} w={12} h={12}
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