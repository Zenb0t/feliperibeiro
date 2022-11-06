import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { scrollToId } from '../utils';

const NavLink = ({ href, text }) => {
    return (
        <Link
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
            }}
            href={href}
            onClick={() => scrollToId(href)}>
            {text}
        </Link>
    );
};

const NavLinks = () => {
    return (
        <>
            <NavLink href='#home' text='Home' />
            <NavLink href="#about" text="About" />
            <NavLink href="#projects" text="Projects" />
            <NavLink href="#contact" text="Contact" />
        </>
    );
}


export default function Navigation() {
    const { isOpen, onOpen, onClose } = useDisclosure();



    return (
        <>
            <Box id='Im+the+pesky' bg={useColorModeValue('gray.100', 'gray.900')} px={4} position='sticky' top={0} zIndex={1}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'lg'}
                        icon={isOpen ? <FaTimes /> : <FaBars />}
                        aria-label={'Open Menu'}
                        display={{ base: 'inline', md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                        variant='ghost'
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}
                        >
                            <NavLinks />
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <ColorModeSwitcher />
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            <NavLinks />
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}