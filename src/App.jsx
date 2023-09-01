import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Nav from './Components/Navbar';
import SplitScreen from './Components/Hero';
import SimpleThreeColumns from './Components/Feature';
import BasicStatistics from './Components/Statics';
import CenterMode from './Components/Slider';
import WithSpeechBubbles from './Components/Test';
import ThreeTierPricingHorizontal from './Components/Pricing';
import LargeWithLogoCentered from './Components/footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <br />
      <SplitScreen />
      <br />
      <SimpleThreeColumns />
      <br />
      <CenterMode />
      <br />
      <BasicStatistics />
      <br />
      <WithSpeechBubbles />
      <br />
      <ThreeTierPricingHorizontal />
      <br />
      <LargeWithLogoCentered />
    </ChakraProvider>
  );
}

export default App;
