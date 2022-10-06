import { Flex, Text, Container, Spacer, Box } from "@chakra-ui/react";

export const Hero = () => (
  <Box
    backgroundColor="#0b1121"
    // backgroundImage="radial-gradient(at 0% 0%, hsla(60,79%,68%,1) 0px, transparent 50%), radial-gradient(at 100% 0%, hsla(300,100%,84%,1) 0px, transparent 50%)"
  >
    <Flex p={10} direction="column">
      <Container maxW="900px" centerContent textAlign="center">
        <Text fontWeight="medium" color="#ff6c5a" letterSpacing="wide">
          OUR WORK
        </Text>
        <Spacer h={2} />
        <Flex
          maxW="60ch"
          color="white"
          flexWrap="wrap"
          flexDirection={["column"]}
          gap={2}
        >
          <Text flex={1} fontSize={["4xl", "5xl", "5xl"]} fontWeight="bold">
            Full of{" "}
            <Box as="span" color="#6dd2da">
              creativity
            </Box>
          </Text>
          <Text flex={1} color="gray.300">
            Have a look through some of our recent work. We specialise in sleek,
            premium feeling user interfaces that delight users.
          </Text>
        </Flex>
      </Container>
    </Flex>
  </Box>
);
