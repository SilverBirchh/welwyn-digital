import { Flex, Text, Container, Spacer, Box } from "@chakra-ui/react";

export const Hero = () => {
  return (
    <Flex p={10} direction="column">
      <Container maxW="900px" centerContent textAlign="center">
        <Text fontWeight="medium" color="#ff6c5a" letterSpacing="wide">
          OUR WORK
        </Text>
        <Spacer h={2} />
        <Flex maxW="60ch" flexWrap="wrap" flexDirection={["column"]} gap={5}>
          <Text flex={1} fontSize={["4xl", "5xl", "5xl"]} fontWeight="bold">
            Full of{" "}
            <Box as="span" color="#6dd2da">
              creativity
            </Box>
          </Text>
          <Text flex={1}>
            Have a look through some of our recent work. We specialise in sleek,
            premium feeling user interfaces that delight users.
          </Text>
        </Flex>
      </Container>
    </Flex>
  );
};
