import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Header from "~/components/Layout/Header";

export const Hero = () => {
  return (
    <Box
      minH="100vh"
      color="black"
      bgColor="#edf9f5"
      backgroundImage="url(/topo.svg)"
      backgroundSize="cover"
      backgroundPosition="center"
      display="flex"
      flexDirection="column"
    >
      <Header backgroundColor="transparent" />
      <Container
        p={5}
        maxW="900px"
        display="flex"
        flex={1}
        justifyContent="left"
      >
        <Flex
          gap={50}
          alignItems="center"
          justifyContent={["center", "left"]}
          flexDirection={["column", "column", "row"]}
        >
          <Flex
            direction="column"
            gap={10}
            maxW="450px"
            justifyContent="center"
          >
            <Heading as="h1" fontSize={["2rem", "3rem"]} fontWeight="bold">
              A digital agency
              <br />
              to grow your
              <br />
              business with.
            </Heading>
            <Text color="gray.600">
              Based in Welwyn Garden City, we create first-class websites and
              apps to transform your digital presence and expand your reach.
            </Text>
            <Button
              as="a"
              href="#get-in-touch"
              colorScheme="teal"
              bgColor="#6dd2da"
              alignSelf="flex-start"
              shadow="md"
            >
              Get In Touch
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
