import {
    Flex,
    Text,
    VStack,
    useBreakpointValue,
    useColorModeValue,
    Heading,
    Link,
    Image,
    Icon,
    Wrap,
    WrapItem,
    Box,
    Button
} from '@chakra-ui/react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import chameleonImg from '../assets/chameleon_website.png';

const ProjectList = [
    {
        id: 1,
        name: 'Panela App',
        description: [`A recipe book app for saving and calculating costs of a recipe.`,
            `The app is built in TypeScript with React, Redux, Node, Express, MongoDB and deployed on DigitalOcean.`],
        img: 'https://via.placeholder.com/300',
        url: 'https://www.panela.app'
    },
    {
        id: 2,
        name: 'Chameleon Shades',
        description: ['Built a website for a blinds and shades company to showcase their products and services.',
            'Designed and built the website using Squarespace, according to the client’s specifications.'],
        img:  chameleonImg,
        url: 'https://www.chameleonshades.ca'
    },
];

const ProjectItem = ({ img, name, description, url }) => {
    return (
        <WrapItem>
            <Box
                bg={useColorModeValue('white', 'gray.700')}
                borderWidth="1px"
                borderColor={useColorModeValue('gray.200', 'gray.700')}
                color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                boxShadow={'md'}
                rounded={'md'}
                overflow={'hidden'}
                pb={4}
            >
                <VStack w={'300px'} justifyContent='flex-start' alignSelf='flex-start'>
                    <Image src={img} alt={name} boxSize='300px' />
                    <Heading as='h3' size='lg' pt={4}>
                        {name}
                    </Heading>
                    {description.map((item, index) => (
                        <Text px={4} key={index}>{item}</Text>
                    ))}
                    <Link py={4} href={url} isExternal>
                        <Button >
                            {name} <Icon as={FaExternalLinkAlt} mx='2px' />
                        </Button>
                    </Link>
                </VStack>
            </Box>
        </WrapItem>
    )
}

export default function Projects() {
    return (
        <Flex as={'section'} py={useBreakpointValue({ base: 8, md: 20 })} id="projects">
            <VStack
                w={'full'}
                justify={'center'}
                alignContent={'center'}
                px={useBreakpointValue({ base: 8, md: 10 })}
            >
                <Heading py={8} color='orange.500'>
                    Projects
                </Heading>
                <Wrap justify='center' spacing={'60px'} pb={1}>
                    {ProjectList.map((project) => (
                        <ProjectItem key={project.id} {...project} />
                    ))}
                </Wrap>
            </VStack>
        </Flex>
    );
}