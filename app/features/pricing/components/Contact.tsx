import { Button, Container, Icon, Spacer, Text } from "@chakra-ui/react";
import { RiQuestionAnswerFill } from "react-icons/ri";
import { Link as RemixLink } from "@remix-run/react";

const Contact = () => {
  return (
    <Container
      maxW="900px"
      borderRadius="md"
      bg="#f7fafc"
      p={5}
      centerContent
      mb={10}
    >
      <Icon as={RiQuestionAnswerFill} color="#6dd2da" w={10} h={10} />
      <Spacer flexBasis={10} />
      <Text fontWeight="bold" fontSize="3xl">
        Still have questions?
      </Text>
      <Text textAlign="center">
        Can't find the answer you're looking for? Our team is happy to answer
        your questions.
      </Text>
      <Spacer flexBasis={10} />
      <Button
        as={RemixLink}
        to="/contact"
        cursor="pointer"
        colorScheme="teal"
        bgColor="#6dd2da"
      >
        Send us an email
      </Button>
    </Container>
  );
};

export default Contact;
