import {
  Box,
  Button,
  Container,
  Flex,
  SimpleGrid,
  Spacer,
  Text,
  useBreakpointValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import { AiOutlineMobile } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { MdDesignServices } from "react-icons/md";
import { TbSocial } from "react-icons/tb";

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
  {
    icon: <TbSocial size={50} color="#8ce8ef" />,
    color: "#21d497",
    title: "Marketing",
    description:
      "We get ads in front of the right people for the right price. We offer Pay-per-click, search engine optimization and social media advertising",
  },
];

const WhatWeDo = () => {
  const isSmall = useBreakpointValue([true, false]);

  return (
    <Flex
      mt={-14}
      zIndex={30}
      p={{ base: 0, sm: 5, md: 10 }}
      justifyContent="center"
      alignItems="center"
      direction="column"
      pos="relative"
    >
      <Flex
        bg="#334155"
        shadow="md"
        justifyContent="center"
        direction="column"
        borderRadius="md"
        p={{ base: 2, sm: 5, md: 10 }}
      >
        <Container maxW="1200px" centerContent py={5}>
          <Text fontWeight="medium" color="#6dd2da" letterSpacing="wide">
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
            <Text flex={1} fontSize="3xl" fontWeight="bold" color="white">
              Perfect{" "}
              <Box as="span" color="#ff6c5a">
                solutions
              </Box>{" "}
              for your business
            </Text>
            <Text flex={1} fontWeight="light" color="white">
              Welwyn Digital can build your marketing website to a full-stack
              web or mobile app and everything in between. We will work closely
              with you, making sure to understand every requirement you have. We
              will design, build, host and monitor keeping you up to date every
              step of the way.
            </Text>
          </Flex>
        </Container>
        <Spacer flexGrow={0} />
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={5}
          justifyItems="center"
        >
          {ITEMS.map((item, index) => (
            <ChakraBox
              maxWidth={["375px", "450px"]}
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
              // @ts-expect-error no problem in operation, although type error appears.
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

              <Text fontWeight="semibold" fontSize="xl" color="white">
                {item.title}
              </Text>
              <Text flexGrow={1} textColor="gray.300">
                {item.description}
              </Text>
              <Button as={Link} to={`/services?t=${index}`} prefetch="intent" size="xs" colorScheme="blue">
              <VisuallyHidden>View {item.title}</VisuallyHidden>
                Learn more
              </Button>
            </ChakraBox>
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default WhatWeDo;
