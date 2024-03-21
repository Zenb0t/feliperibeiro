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
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
} from '@chakra-ui/react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import chameleonImg from '../assets/chameleon_website.png';
import panela from '../assets/panela.png';
import terminalImg from '../assets/Terminal.jpg';
import r1 from '../assets/roy/r1.png';
import r2 from '../assets/roy/r2.png';
import r3 from '../assets/roy/r3.png';
import r4 from '../assets/roy/r4.png';
import r5 from '../assets/roy/r5.png';
import r6 from '../assets/roy/r6.png';
import r7 from '../assets/roy/r7.png';
import r8 from '../assets/roy/r8.png';
import ChakraCarousel from './ChakraCarousel';

const ProjectList = [
  {
    id: 1,
    name: 'Royals App',
    description: [
      'Refactored the whole app, improving the performance and adding new features. It involved new API routes, new database models, and new UI components.',
      'The stack used to built it was TypeScript with React Native, Expo,  Node, Keystone.js, Express, MongoDB, GraphQL and deployments on DigitalOcean and AWS.',
    ],
    img: r2, // TODO: Add the correct image
    gallery: {
      images: [r4, r5, r6, r7, r8],
      alt: 'Royals App',
    },
  },
  {
    id: 2,
    name: 'Panela App',
    description: [
      `A SaaS app for managing recipes and costs, with a handy import recipe feature.`,
      `The app is built in TypeScript with React, Redux, Node, Express, MongoDB and deployed on DigitalOcean.`,
    ],
    img: panela,
    url: 'https://panela.app',
  },
  {
    id: 3,
    name: 'Chameleon Shades',
    description: [
      'Built a website for a blinds and shades company to showcase their products and services.',
      'Designed and built the website using Squarespace, according to the client’s specifications.',
    ],
    img: chameleonImg,
    url: 'https://www.chameleonshades.ca',
  },
  //   {
  //     id: 4,
  //     name: 'Books Manager',
  //     description: [
  //       'Built a full cli and GUI application for a book management system in pure Java. It features a series of reports on the different objects',
  //       'Created using best practices and design patterns such as MVC, DAO, and Singleton.',
  //     ],
  //     img: terminalImg,
  //     url: 'https://github.com/Zenb0t/booksmana',
  //   },
];

const ProjectItem = ({ img, name, description, url, gallery }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <VStack h={'650px'} w={'300px'} align={'center'} justify={'flex-start'}>
          <Image src={img} alt={name} boxSize="300px" objectFit={'cover'} />
          <Heading as="h3" size="lg" pt={4}>
            {name}
          </Heading>
          {description.map((item, index) => (
            <Text px={4} key={index}>
              {item}
            </Text>
          ))}
        </VStack>
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          p={4}
        >
          {gallery ? (
            <>
              <Button py={4} my={4} onClick={onOpen}>
                Open Galery
              </Button>
              <GalleryModal
                isOpen={isOpen}
                onClose={onClose}
                images={gallery.images}
              />
            </>
          ) : (
            <Link py={4} href={url} isExternal>
              <Button>
                {name} <Icon as={FaExternalLinkAlt} mx="8px" />
              </Button>
            </Link>
          )}
        </Box>
      </Box>
    </WrapItem>
  );
};

// TODO: Update the ProjectCard component
const ProjectCard = ({ img, name, description, url, onClick }) => {
  return (
    <Flex
      as={'div'}
      py={useBreakpointValue({ base: 8, md: 20 })}
      // add a border for debugging
      borderWidth="1px"
      borderColor={useColorModeValue('red.200', 'red.700')}
      justify={'center'}
      alignContent={'center'}
      // Span the full width of the container
      w={'full'}
    >
      <Text>{name}</Text>
    </Flex>
  );
};

const GalleryModal = ({ isOpen, onClose, images }) => {
  return (
    // Add a box to hold the modal and ensure it spans the full width of the container
    <Modal isOpen={isOpen} onClose={onClose} size={'full'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Gallery</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <ChakraCarousel gap={32}>
            {ProjectList[0].gallery?.images.map((img, index) => (
              <Flex
                w={'60dvw'}
                h={'85vh'}
                key={index}
                justifyContent="space-between"
                flexDirection="column"
                overflow="hidden"
                color="gray.300"
                bg="base.d100"
                rounded={5}
                flex={1}
                p={5}
                // add a background image
                bgImage={`url(${img})`}
                bgSize={'cover'}
                // offset the background image
                bgPosition={'center'}
              />
            ))}
          </ChakraCarousel>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default function Projects() {
  return (
    <Flex
      as={'section'}
      py={useBreakpointValue({ base: 8, md: 20 })}
      id="projects"
    >
      <VStack
        w={'full'}
        justify={'center'}
        alignContent={'center'}
        px={useBreakpointValue({ base: 8, md: 10 })}
      >
        <Heading py={8} color="orange.500">
          Projects
        </Heading>
        <Wrap justify="center" spacing={'60px'} pb={1}>
          {ProjectList.map(project => (
            <ProjectItem key={project.id} {...project} />
          ))}
        </Wrap>
      </VStack>
    </Flex>
  );
}
