import {
  Box,
  Container,
  Flex,
  Grid,
  Icon,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { ChakraBox } from "~/components/Layout/ChakraBox";
import { IoMdPricetags } from "react-icons/io";
import { BsClockHistory, BsFillPeopleFill } from "react-icons/bs";
import { MdTipsAndUpdates } from "react-icons/md";

const ITEMS = [
  {
    title: "Experts in Development",
    icon: <Icon as={BsFillPeopleFill} h={10} w={10} color="#f5b9bb" />,
    description:
      "At Welwyn Digital we do two things and we do them well. Websites and apps are our bread and butter. We work hard to understand your needs and execute the project exactly how you need it.",
  },
  {
    title: "Clear Pricing",
    icon: <Icon as={IoMdPricetags} h={10} w={10} color="#05abb6" />,
    description:
      "We have no hidden fees and will make very clear the price you will have to pay for the project. There are no surprises here.",
  },
  {
    title: "Updates at Every Stage",
    icon: <Icon as={MdTipsAndUpdates} h={10} w={10} color="#e85a4e" />,
    description:
      "We keep you updated at every stage of the project. We provide access to individual project boards that detail exactly how far along the project is.",
  },
  {
    title: "Make Changes Anytime",
    icon: <Icon as={BsClockHistory} h={10} w={10} color="#37612a" />,
    description:
      "We know that requirements change that's why you will be able to request changes and modifications at any time.",
  },
];

export const OurProcess = () => {
  return (
    <Flex
      bgColor="white"
      p={10}
      minH="100vh"
      justifyContent="center"
      direction="column"
      backgroundImage="url(/wave.svg)"
      backgroundSize="cover"
      backgroundPosition={["unset", "center", "center", "unset"]}
    >
      <Container maxW="900px" centerContent>
        <Text
          fontWeight="medium"
          color={["#062238", "#ff6c5a"]}
          letterSpacing="wide"
        >
          WHY CHOOSE US
        </Text>
        <Flex
          flexWrap="wrap"
          flexDirection={["column"]}
          gap={10}
          textAlign="center"
          maxW="60ch"
        >
          <Text flex={1} fontSize="3xl" fontWeight="bold">
            <Box as="span" color="#6dd2da">
              Experts
            </Box>{" "}
            in what we do
          </Text>
          <Text flex={1} textColor="black" fontWeight="light">
            We are a group of experienced engineers and designers who excel at
            crafting extraordinary digital experiences. We work with you every
            step of the way to make to make sure everything is perfect.
          </Text>
        </Flex>
        <Spacer flexBasis={50} />
        <Grid alignItems="center" justifyContent="center" gap={10} maxW="60ch">
          {ITEMS.map((item, index) => (
            <ChakraBox
              bg="transparent"
              borderRadius="md"
              key={item.title}
              display="flex"
              h="full"
              flexDirection={["column", "row"]}
              gap={5}
              p={5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              // @ts-ignore no problem in operation, although type error appears.
              transition={{ duration: 1, delay: 0.3 }}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                },
                hidden: { opacity: 0, y: 50 },
              }}
            >
              <Flex
                order={[0, index % 2 ? 2 : 0]}
                alignSelf="center"
                borderRadius="md"
                padding="10px"
                textAlign="center"
              >
                {item.icon}
              </Flex>
              <Flex
                direction="column"
                textAlign={["center", "left"]}
                alignItems={["center", "revert"]}
              >
                <Text fontWeight="semibold" fontSize="xl">
                  {item.title}
                </Text>
                <Text flexGrow={1} textColor="gray.500">
                  {item.description}
                </Text>
              </Flex>
            </ChakraBox>
          ))}
        </Grid>
      </Container>
    </Flex>
  );
};
