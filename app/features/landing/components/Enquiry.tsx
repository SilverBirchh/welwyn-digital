import type { FC } from "react";
import { useEffect, useRef } from "react";

import {
  Flex,
  Container,
  Text,
  Spacer,
  Box,
  Link,
  Icon,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "@formspree/react";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import { ChakraBox } from "~/components/Layout/ChakraBox";

type Props = {
  bg?: string;
};

export const Enquiry: FC<Props> = ({ bg = "#0b1121" }: Props) => {
  const [state, handleSubmit] = useForm("mpzbkpzl");
  const formRef = useRef<HTMLFormElement | null>(null);
  const toast = useToast();

  useEffect(() => {
    if (state.succeeded) {
      formRef.current?.reset();
      toast({
        title: "Enquiry Sent.",
        description: "We've got your message and will be in touch shortly!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [state.succeeded, toast]);

  return (
    <Flex
      id="get-in-touch"
      bgColor={bg}
      p={{ base: 5, md: 10 }}
      direction="column"
    >
      <Container maxW="900px">
        <Text fontWeight="medium" color="#6dd2da" letterSpacing="wide">
          GET IN TOUCH
        </Text>
        <Spacer h={2} />
        <Flex
          flexWrap="wrap"
          flexDirection={["column"]}
          gap={5}
          color={"white"}
          maxW={"60ch"}
        >
          <Text flex={1} fontSize={["4xl", "5xl", "5xl"]} fontWeight="bold">
            Contact us
          </Text>
          <Text flex={1} textColor={"gray.300"}>
            If you have would like to work with us or have any question please
            fill out the form, give us a call or drop us an email.
          </Text>
        </Flex>
        <Spacer h={10} />
        <ChakraBox
          bg={bg}
          shadow={"lg"}
          borderRadius="md"
          h="full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          // @ts-expect-error no problem in operation, although type error appears.
          transition={{ duration: 1 }}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
            },
            hidden: { opacity: 0, y: 50 },
          }}
        >
          <Flex
            flexWrap="wrap"
            gap={10}
            justifyContent="space-between"
            flexDirection={["column", "row"]}
            borderRadius="md"
            padding="15px"
            pt={"25px"}
          >
            <Flex
              order={[0, 1]}
              flexDirection={["column"]}
              gap={10}
              justifyContent="flex-start"
              color={"white"}
            >
              <Flex gap={5} alignItems="center">
                <Icon as={MdEmail} h={7} w={7} color="#6dd2da" />
                <Box>
                  <Link fontWeight="medium" href="mailto:hey@welwyn.digital">
                    Email
                    <br />
                    <Box as="span" fontWeight="hairline">
                      hey@welwyn.digital
                    </Box>
                  </Link>
                </Box>
              </Flex>
              <Flex gap={5} alignItems="center">
                <Icon as={BsFillPhoneVibrateFill} h={7} w={7} color="#6dd2da" />
                <Box>
                  <Link fontWeight="medium" href="tel:07903001468">
                    Call
                    <br />
                    <Box as="span" fontWeight="hairline">
                      (+44) 7903001468
                    </Box>
                  </Link>
                </Box>
              </Flex>
            </Flex>
            <form style={{ flex: 1 }} ref={formRef} onSubmit={handleSubmit}>
              <Flex
                gap={5}
                color={"black"}
                flexDirection="column"
                sx={{
                  caretColor: "white",
                }}
              >
                <FormControl variant="floating" id="name">
                  <Input
                    name="name"
                    required
                    focusBorderColor="#6dd2da"
                    color={"white"}
                    placeholder=""
                  />
                  <FormLabel bg={bg} color={"white"}>
                    Name{" "}
                    <Box as="span" color="red.500">
                      *
                    </Box>
                  </FormLabel>
                </FormControl>
                <FormControl variant="floating" id="email">
                  <Input
                    name="email"
                    required
                    color={"white"}
                    focusBorderColor="#6dd2da"
                    placeholder=""
                  />
                  <FormLabel color={"white"} bg={bg}>
                    Email{" "}
                    <Box as="span" color="red.500">
                      *
                    </Box>
                  </FormLabel>
                </FormControl>
                <FormControl variant="floating" id="email-message">
                  <Textarea
                    name="email-message"
                    focusBorderColor="#6dd2da"
                    placeholder=""
                    color={"white"}
                  />
                  <FormLabel color={"white"} bg={bg}>
                    Message
                  </FormLabel>
                </FormControl>
                <Text fontSize="xs" color="gray.400">
                  <Box as="span" color="red.500">
                    *
                  </Box>{" "}
                  required field
                </Text>
                <Button
                  type="submit"
                  colorScheme="teal"
                  bgColor="#6dd2da"
                  alignSelf="flex-start"
                  disabled={state.submitting}
                  isLoading={state.submitting}
                  shadow="md"
                >
                  Submit
                </Button>
              </Flex>
            </form>
          </Flex>
        </ChakraBox>
      </Container>
    </Flex>
  );
};
