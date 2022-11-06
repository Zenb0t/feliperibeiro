import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
    Stack,
    Textarea,
    Tooltip,
    useClipboard,
    useColorModeValue,
    VStack,
    useToast,
} from '@chakra-ui/react';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdPerson } from 'react-icons/md';
import { useFormik } from "formik";
import axios from 'axios';

export default function ContactForm() {
    const { hasCopied, onCopy } = useClipboard('estudiopf@gmail.com');

    const toast = useToast();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        onSubmit: values => {
            console.log(values);
            axios({
                method: "POST",
                url: "https://formbold.com/s/3G1p6",
                data: values,
            })
                .then((r) => {
                    toast({
                        title: 'Message sent.',
                        description: 'I will get back to you as soon as possible.',
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                    });
                })
                .catch((r) => {
                    toast({
                        title: 'Ops, something went wrong.',
                        description: 'Please try to reach me in a different way. Also, tell me this is broken. Thanks!',
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                    });
                });
        },
    });


    return (
        <Flex
            bg={useColorModeValue('gray.100', 'gray.900')}
            align="center"
            justify="center"
            id="contact">
            <Box
                borderRadius="lg"
                m={{ base: 5, md: 16, lg: 10 }}
                p={{ base: 5, lg: 16 }}>
                <Box>
                    <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
                        <Heading
                            fontSize={{
                                base: '4xl',
                                md: '5xl',
                            }}>
                            Get in Touch
                        </Heading>
                        <Stack
                            spacing={{ base: 4, md: 8, lg: 20 }}
                            direction={{ base: 'column', md: 'row' }}>
                            <Stack
                                align="center"
                                justify="space-around"
                                direction={{ base: 'row', md: 'column' }}>
                                <Tooltip
                                    label={hasCopied ? 'Email Copied!' : 'Copy Email'}
                                    closeOnClick={false}
                                    hasArrow>
                                    <IconButton
                                        aria-label="email"
                                        variant="ghost"
                                        size="lg"
                                        fontSize="3xl"
                                        icon={<MdEmail />}
                                        _hover={{
                                            bg: 'orange.500',
                                            color: useColorModeValue('white', 'gray.700'),
                                        }}
                                        onClick={onCopy}
                                        isRound
                                    />
                                </Tooltip>
                                <Link href="#">
                                    <IconButton
                                        aria-label="github"
                                        variant="ghost"
                                        size="lg"
                                        fontSize="3xl"
                                        icon={<FaGithub />}
                                        _hover={{
                                            bg: 'orange.500',
                                            color: useColorModeValue('white', 'gray.700'),
                                        }}
                                        isRound
                                    />
                                </Link>
                                <Link href="#">
                                    <IconButton
                                        aria-label="linkedin"
                                        variant="ghost"
                                        size="lg"
                                        icon={<FaLinkedin size="28px" />}
                                        _hover={{
                                            bg: 'orange.500',
                                            color: useColorModeValue('white', 'gray.700'),
                                        }}
                                        isRound
                                    />
                                </Link>
                            </Stack>
                            <Box as='form'
                                onSubmit={formik.handleSubmit}
                                bg={useColorModeValue('white', 'gray.700')}
                                borderRadius="lg"
                                p={8}
                                color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                                shadow="base">
                                <VStack spacing={5}>
                                    <FormControl isRequired>
                                        <FormLabel>Name</FormLabel>
                                        <InputGroup>
                                            <InputLeftElement children={<MdPerson />} />
                                            <Input 
                                            type="text" 
                                            name="name" 
                                            placeholder="Your Name"
                                            onChange={formik.handleChange}
                                            value={formik.values.name}
                                             />
                                        </InputGroup>
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>Email</FormLabel>

                                        <InputGroup>
                                            <InputLeftElement children={<MdEmail />} />
                                            <Input
                                                type="email"
                                                name="email"
                                                placeholder="Your Email"
                                                onChange={formik.handleChange}
                                                value={formik.values.email}
                                            />
                                        </InputGroup>
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>Message</FormLabel>

                                        <Textarea
                                            name="message"
                                            placeholder="Your Message"
                                            rows={6}
                                            resize="none"
                                            onChange={formik.handleChange}
                                            value={formik.values.message}
                                        />
                                    </FormControl>
                                    <Button
                                        type="submit"
                                        colorScheme="orange"
                                        bg="orange.400"
                                        color="white"
                                        _hover={{
                                            bg: 'orange.500',
                                        }}
                                    >
                                        Send Message
                                    </Button>
                                </VStack>
                            </Box>
                        </Stack>
                    </VStack>
                </Box>
            </Box>
        </Flex>
    );
}