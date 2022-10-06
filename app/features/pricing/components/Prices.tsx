import {
  Box,
  Button,
  Container,
  Flex,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import { MdCheckCircle } from "react-icons/md";

const FEATURES = [
  "Free initial call",
  "Free requirements assessment",
  "48hr support response",
  "Free updates",
  "Fully managed service",
  "Predictable Pricing",
  "Regular site review",
  "Regular visitor statistics report",
];

export const Prices = () => (
  <Flex
    mt={-28}
    p={{ base: 5, md: 10 }}
    justifyContent="center"
    alignItems="center"
    direction="column"
  >
    <Flex
      bg="#1a202c"
      justifyContent="center"
      direction="column"
      shadow="2xl"
      borderRadius="md"
      maxW="5xl"
      p={{ base: 5, md: 8 }}
    >
      <Container maxW="900px" py={5}>
        <Text fontWeight={"bold"} fontSize="2xl" color="white">
          Project Based
        </Text>
        <Text color="gray.300" mt={5}>
          Get in touch to discuss your digital project. There are no hourly
          rates here. We know every project is unique and take care to discuss
          with you your exact needs and requirements.
        </Text>
        <Flex alignItems="center" mt={5}>
          <Text color="#6dd2da" fontWeight="bold">
            What's included
          </Text>
          <Box height="1px" width="full" flex={1} bg="gray.300" ml={5} />
        </Flex>
        <SimpleGrid mt={5} columns={{ base: 1, md: 2 }} gap={2}>
          {FEATURES.map((feature) => (
            <List key={feature}>
              <ListItem
                display="flex"
                alignItems="center"
                fontSize="sm"
                color="gray.300"
              >
                <ListIcon as={MdCheckCircle} color="green.500" />
                {feature}
              </ListItem>
            </List>
          ))}
        </SimpleGrid>
        <Button
          mt={10}
          as={Link}
          to="contact"
          colorScheme="teal"
          bgColor="#6dd2da"
          shadow="md"
          prefetch="intent"
        >
          Contact Us
        </Button>
      </Container>
    </Flex>
  </Flex>
);
