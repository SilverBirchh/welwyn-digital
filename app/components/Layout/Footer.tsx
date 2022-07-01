import {
  Center,
  Container,
  Divider,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Logo from "../Logo";

const Footer = () => {
  return (
    <Flex bgColor="#062238">
      <Container p={5} maxW="900px">
        <Flex>
          <Logo height={25} />
          <Spacer flexBasis={"10px"} flexGrow={0} />
          <Center>
            <Divider orientation="vertical" w={1} height="25px" />
          </Center>
          <Spacer flexBasis={"5px"} flexGrow={0} />
          <Text color="white">Welwyn Digital</Text>
        </Flex>
        <Spacer h={5} />
        <Text fontSize="xs" color="gray.400">
          Welwyn Digital is a trading name of Soar Education LTD • Registered in
          England • 13213972.
        </Text>
      </Container>
    </Flex>
  );
};

export default Footer;
