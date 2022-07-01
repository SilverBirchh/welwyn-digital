import {
  Box,
  Container,
  Flex,
  Grid,
  Spacer,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { MdDesignServices } from "react-icons/md";
import { AiOutlineMobile } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { ChakraBox } from "~/components/Layout/ChakraBox";

const ITEMS = [
  {
    icon: <MdDesignServices size={50} color="#ffc840" />,
    color: "#ffc840",
    title: "Websites",
    description:
      "We can build affordable websites that are fast, responsive and SEO friendly. Grow your business with marketing sites, collect form submissions or take bookings.",
  },
  {
    icon: <CgWebsite size={50} color="#ff6c5a" />,
    color: "#ff6c5a",
    title: "Web Apps",
    description:
      "Full-stack web apps including authentication, storage and a database. We specialise in building highly available apps that can scale to millions of users.",
  },
  {
    icon: <AiOutlineMobile size={50} color="#21d497" />,
    color: "#21d497",
    title: "Mobile Apps",
    description:
      "We can build apps for a range of devices for internal and external users. We build delightful and snappy mobile experiences.",
  },
];

const WhatWeDo = () => {
  const isSmall = useBreakpointValue([true, false]);

  return (
    <>
      <Flex
        bgColor="white"
        p={10}
        minH="100vh"
        justifyContent="center"
        direction="column"
        backgroundImage="url(/blob.svg)"
        backgroundSize="cover"
        backgroundPosition="right"
      >
        <Container maxW="900px" centerContent>
          <Text fontWeight="medium" color="#ff6c5a" letterSpacing="wide">
            WHAT WE DO
          </Text>
          <Spacer h={2} />
          <Flex
            textAlign="center"
            maxW={"60ch"}
            flexWrap="wrap"
            flexDirection={["column"]}
            gap={5}
          >
            <Text flex={1} fontSize="3xl" fontWeight="bold">
              Perfect{" "}
              <Box as="span" color="#6dd2da">
                solutions
              </Box>{" "}
              for your business
            </Text>
            <Text flex={1} textColor="black" fontWeight="light">
              Welwyn Digital can build your marketing website to a full-stack
              web or mobile app and everything in between. We will work closely
              with you, making sure to understand every requirement you have. We
              will design, build, host and monitor keeping you up to date every
              step of the way.
            </Text>
          </Flex>
        </Container>
        <Spacer flexBasis={16} flexGrow={0} />
        <Flex
          alignItems="center"
          justifyContent="center"
          gap={10}
          flexWrap="wrap"
        >
          {ITEMS.map((item, index) => (
            <ChakraBox
              minWidth={["275px", "350px"]}
              maxWidth={["275px", "350px"]}
              bg="transparent"
              borderRadius="md"
              key={item.title}
              display="flex"
              h="full"
              alignItems="center"
              textAlign="center"
              flexDirection="column"
              gap={5}
              p={5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              // @ts-ignore no problem in operation, although type error appears.
              transition={{ duration: 1, delay: isSmall ? 0.75 : index * 0.5 }}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                },
                hidden: { opacity: 0, y: 50 },
              }}
            >
              <Flex borderRadius="md" padding="10px">
                {item.icon}
              </Flex>

              <Text fontWeight="semibold" fontSize="xl">
                {item.title}
              </Text>
              <Text flexGrow={1} textColor="gray.500">
                {item.description}
              </Text>
            </ChakraBox>
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export default WhatWeDo;
