import {
  Container,
  Flex,
  Spacer,
  Text,
  Icon,
  Box,
  Button,
  HStack,
} from "@chakra-ui/react";
import { BiCodeAlt } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import Image from "remix-image";

const PROJECTS = [
  {
    title: "Hep Oils",
    image: "/hepoils.webp",
    description:
      "Hep Oils have over 20 years of experience in the cooking oils and recycling industry. They reached out to us to help build a website to provide product information and to help drive leads and sales.",
    link: "https://hepoils.com",
    type: [
      <>
        <Flex gap={2}>
          <Icon color="#6dd2da" as={BiCodeAlt} h={5} w={5} />
          Web Design & Development
        </Flex>
      </>,
    ],
  },
  {
    title: "Soar Education",
    image: "/soar.webp",
    description:
      "Soar Education are building a platform to transform how educators teach and how they can get compensated for their efforts. We are building their platform and marketing websites for them.",
    link: "https://soar.study",
    type: [
      <>
        <Flex gap={2}>
          <Icon color="#6dd2da" as={BiCodeAlt} h={5} w={5} />
          Web Design & Development
        </Flex>
      </>,
      <>
        <Flex gap={2}>
          <Icon color="#6dd2da" as={CgWebsite} h={5} w={5} />
          Web App
        </Flex>
      </>,
    ],
  },
  {
    title: "Hep Skip Hire",
    image: "/hepskiphire.webp",
    description:
      "Hep Skip Hire provide first class waste management services and needed a website to match their reputation. We build a stunning website that helps them stand out from the crowd.",
    link: "https://hepskiphire.co.uk",
    type: [
      <>
        <Flex gap={2}>
          <Icon color="#6dd2da" as={BiCodeAlt} h={5} w={5} />
          Web Design & Development
        </Flex>
      </>,
    ],
  },
];

export const OurProjects = () => {
  return (
    <Flex
      bgColor="white"
      p={10}
      minH="100vh"
      justifyContent="center"
      direction="column"
      backgroundImage="url(/geog.svg)"
      backgroundSize="cover"
      backgroundPosition={["top", "top", "right"]}
    >
      <Container maxW="900px">
        <Text fontWeight="medium" color="#ff6c5a" letterSpacing="wide">
          OUR WORK
        </Text>
        <Flex flexWrap="wrap" flexDirection={["column", "row"]} gap={5}>
          <Text flex={1} fontSize="3xl" fontWeight="bold">
            Expert{" "}
            <Box as="span" color="#6dd2da">
              craftsmanship
            </Box>{" "}
            every time
          </Text>
          <Text flex={1} textColor="black" fontWeight="light">
            We've worked with some great companies to improve their web
            presence, help drive sales and to build apps.
          </Text>
        </Flex>
        <Spacer h={10} />
        <Flex direction="column" gap={10}>
          {PROJECTS.map((project, index) => (
            <Flex
              key={index}
              direction="column"
              gap={5}
              alignItems="center"
              role="group"
            >
              <Flex direction="column" gap={5}>
                <Box>
                  <HStack>
                    <Text fontWeight="bold" fontSize="2xl">
                      {project.title}
                    </Text>
                    <Button
                      as="a"
                      href={project.link}
                      colorScheme="teal"
                      variant="outline"
                      size="xs"
                      target="_blank"
                    >
                      Visit
                    </Button>
                  </HStack>
                  <Flex gap={5} direction={["column", "row"]}>
                    {project.type}
                  </Flex>
                </Box>
                <Text maxW={"60ch"} color="gray.600">
                  {project.description}
                </Text>
              </Flex>
              <Box
                transition={"transform 500ms ease"}
                transform={["scale(1)", "scale(0.8)"]}
                _groupHover={{ transform: "scale(1)" }}
              >
                <Image
                  alt={project.title}
                  src={project.image}
                  responsive={[
                    {
                      size: {
                        width: 300,
                      },
                      maxWidth: 600,
                    },
                    {
                      size: {
                        width: 500,
                      },
                      maxWidth: 900,
                    },

                    {
                      size: {
                        width: 600,
                      },
                      maxWidth: 1200,
                    },
                  ]}
                />
              </Box>
            </Flex>
          ))}
        </Flex>
      </Container>
    </Flex>
  );
};
