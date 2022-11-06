import React from 'react';
import {
  ChakraProvider,
  Divider,
  theme,
} from '@chakra-ui/react';
import HeroWithBackgroundImage from './components/Hero';
import Navigation from './components/Nav';
import AboutMe from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/Contact';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navigation />
      <HeroWithBackgroundImage id='home' />
      <AboutMe />
      <Divider />
      <Projects />
      <Divider />
      <ContactForm/>
    </ChakraProvider>
  );
}

export default App;
