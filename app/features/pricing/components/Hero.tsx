import { Flex, Text, Container, Spacer, Box } from "@chakra-ui/react";

export const Hero = () => {
  return (
    <Flex p={10} direction="column">
      <Container maxW="900px" centerContent textAlign="center">
        <Text fontWeight="medium" color="#ff6c5a" letterSpacing="wide">
          PRICING
        </Text>
        <Spacer h={2} />
        <Flex maxW="60ch" flexWrap="wrap" flexDirection={["column"]} gap={5}>
          <Text flex={1} fontSize={["4xl", "5xl", "5xl"]} fontWeight="bold">
            Find the right plan for
            <br />
            <Box as="span" color="#6dd2da">
              your business
            </Box>
          </Text>
          <Text flex={1}>
            We operate with a clear pricing model and there's a plan for
            business of all sizes.
          </Text>
        </Flex>
      </Container>
    </Flex>
  );
};
