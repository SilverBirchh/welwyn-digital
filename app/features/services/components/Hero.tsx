import { Box, Container, Flex, Text } from "@chakra-ui/react";

import Header from "~/components/Layout/Header";

export const Hero = () => (
  <Box
    backgroundColor="#edeffc"
    backgroundImage="radial-gradient(at 0% 0%, hsla(60,79%,68%,1) 0px, transparent 50%), radial-gradient(at 100% 0%, hsla(300,100%,84%,1) 0px, transparent 50%)"
  >
    <Header backgroundColor="transparent" />
    <Flex flex={1} direction="column" mt={10}>
      <Container maxW="900px">
        <Text fontWeight="medium" color={["#ff6c5a"]} letterSpacing="wide">
          OUR SERVICES
        </Text>
        <Text flex={1} fontSize={["3xl", "4xl"]} fontWeight="bold">
          Move even faster with Welwyn Digital
        </Text>
        <Text mt={4} maxW={"3xl"} color="gray.600">
          We're dedicated to your project and want to see you succeed. That's
          why all you have to do is give us the brief and we'll handle the rest.
          We get ads in front of the right people and websites that morph to any
          device size. We keep your budget low but offer first class services.
          Free updates in lighting quick speed means your business can move
          faster than ever before.
        </Text>
      </Container>
    </Flex>
  </Box>
);
