import { Flex, Text, Container, Spacer, Box } from "@chakra-ui/react";

export const Hero = () => (
  <Box bg="#1e293b" pb={28} pt={5}>
    <Flex px={{ base: 2, sm: 5, md: 10 }} py={10} direction="column">
      <Container maxW="900px" centerContent textAlign="center">
        <Text fontWeight="medium" color="#ff6c5a" letterSpacing="wide">
          PRICING
        </Text>
        <Spacer h={2} />
        <Flex flexWrap="wrap" flexDirection={["column"]} gap={5} color="white">
          <Text flex={1} fontSize={["4xl", "5xl", "5xl"]} fontWeight="bold">
            Simple no-tricks pricing
          </Text>
          <Text flex={1} fontSize="lg" color="gray.300">
            Every project gets a free initial assessment with no obligation to
            go ahead. We scope every project separately to give you the best
            deal and so you know the cost upfront.
          </Text>
        </Flex>
      </Container>
    </Flex>
  </Box>
);
