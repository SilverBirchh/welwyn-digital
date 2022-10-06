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
  LightMode,
} from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { ChakraBox } from "~/components/Layout/ChakraBox";
import { useForm } from "@formspree/react";
import type { FC } from "react";
import { useEffect, useRef } from "react";

type Props = {
  theme?: "light" | "dark" | "transparent";
};

export const Enquiry: FC<Props> = ({ theme = "dark" }) => {
  const isLightTheme = theme === "light" || theme === "transparent";
  const isTransparentTheme = theme === "transparent";
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
      bgColor={
        isLightTheme
          ? isTransparentTheme
            ? "transparent"
            : "white"
          : "#062238"
      }
      p={{ base: 5, md: 10 }}
      direction="column"
    >
      <Container maxW="900px">
        <LightMode>
          <Text fontWeight="medium" color="#ff6c5a" letterSpacing="wide">
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
            bg={isTransparentTheme ? "white" : undefined}
            shadow={isTransparentTheme ? "lg" : undefined}
            borderRadius="md"
            h="full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            // @ts-ignore no problem in operation, although type error appears.
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
                color={isLightTheme ? "black" : "white"}
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
                  <Icon
                    as={BsFillPhoneVibrateFill}
                    h={7}
                    w={7}
                    color="#6dd2da"
                  />
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
                  color={isLightTheme ? "white" : "black"}
                  flexDirection="column"
                  sx={{
                    caretColor: isLightTheme ? "black" : "white",
                  }}
                >
                  <FormControl variant="floating" id="name">
                    <Input
                      name="name"
                      required
                      focusBorderColor="#6dd2da"
                      color={isLightTheme ? "black" : "white"}
                      placeholder=""
                    />
                    <FormLabel
                      bg={isLightTheme ? "white" : "#062238"}
                      color={isLightTheme ? "black" : "white"}
                    >
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
                      color={isLightTheme ? "black" : "white"}
                      focusBorderColor="#6dd2da"
                      placeholder=""
                    />
                    <FormLabel
                      color={isLightTheme ? "black" : "white"}
                      bg={isLightTheme ? "white" : "#062238"}
                    >
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
                      color={isLightTheme ? "black" : "white"}
                    />
                    <FormLabel
                      color={isLightTheme ? "black" : "white"}
                      bg={isLightTheme ? "white" : "#062238"}
                    >
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
        </LightMode>
      </Container>
    </Flex>
  );
};
