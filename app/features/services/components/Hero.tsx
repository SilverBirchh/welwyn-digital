import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { Devices } from "./Devices";
import Header from "~/components/Layout/Header";

export const Hero = () => {
  return (
    <Flex
      bg="linear-gradient(to right, #E2E2E2, #C9D6FF)"
      minH={["100vh"]}
      direction="column"
    >
      <Header backgroundColor="transparent" />
      <Flex
        marginTop={["-90px", 0]}
        flex={1}
        height={"100%"}
        direction="column"
        justifyContent="center"
      >
        <Container maxW="900px" centerContent>
          <Text fontWeight="medium" color={["#ff6c5a"]} letterSpacing="wide">
            OUR SERVICES
          </Text>
          <Flex
            flexWrap="wrap"
            flexDirection={["column"]}
            gap={10}
            textAlign="center"
          >
            <Text flex={1} fontSize={["3xl", "4xl", "5xl"]} fontWeight="bold">
              What We Can Do
            </Text>
            <Flex
              direction="row"
              w={"full"}
              justifyContent="center"
              alignItems="center"
              gap={2}
              flexWrap="wrap"
            >
              <Button
                as="a"
                href="#websites"
                cursor="pointer"
                variant="link"
                borderTop="10px solid transparent"
                transition="transform 500ms ease"
                marginTop="-10px"
                _hover={{ transform: "translateY(-10px)" }}
              >
                <Text color={"#062238"}>Websites</Text>
              </Button>

              <Divider w="30px" borderColor={"#062238"} />

              <Button
                as="a"
                cursor="pointer"
                variant="link"
                href="#web-apps"
                borderTop="10px solid transparent"
                transition="transform 500ms ease"
                marginTop="-10px"
                _hover={{ transform: "translateY(-10px)" }}
              >
                <Text color={"#062238"}>Web Apps</Text>
              </Button>

              <Divider w="30px" borderColor={"#062238"} />

              <Button
                as="a"
                cursor="pointer"
                href="#mobile-apps"
                variant="link"
                transition="transform 500ms ease"
                borderTop="10px solid transparent"
                marginTop="-10px"
                _hover={{ transform: "translateY(-10px)" }}
              >
                <Text color={"#062238"}>Mobile Apps</Text>
              </Button>
            </Flex>
          </Flex>
          <Spacer flexBasis={50} />
          <Box
            flex={1}
            w={["100%", "100%", "60ch", "60ch"]}
            maxW={["60ch"]}
            sx={{ aspectRatio: "16 : 9" }}
          >
            <Devices />
          </Box>
        </Container>
      </Flex>
    </Flex>
  );
};
