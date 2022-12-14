import { Text, Box, Flex, Img, Spacer } from "@chakra-ui/react";
import Image, { remixImageLoader } from "remix-image";

const PROJECTS = [
  {
    title: "Hep Oils",
    image: "/hepoils.webp",
    link: "https://hepoils.com",
    sizes: [500, 450, 300],
  },
  {
    title: "Soar Education",
    image: "/soar.webp",
    link: "https://soar.study",
    sizes: [500, 450, 300],
  },
  {
    title: "Hep Skip Hire",
    image: "/hepskiphire.webp",
    link: "https://hepskiphire.co.uk",
    sizes: [600, 450, 300],
  },
];

export const OurProjects = () => (
  <Flex pt={20} bg="#334155" direction="column" textAlign={"center"}>
    <Text fontWeight="medium" color="#6dd2da" letterSpacing="wide">
      OUR WORK
    </Text>
    <Spacer h={2} />
    <Text
      flex={1}
      color="white"
      fontSize={["4xl", "5xl", "5xl"]}
      fontWeight="bold"
    >
      Full of{" "}
      <Box as="span" color="#ff6c5a">
        creativity
      </Box>
    </Text>
    <Spacer flexBasis={5} />
    <Flex
      pb={20}
      gap={20}
      px={10}
      alignItems="center"
      justifyContent={"center"}
      flexWrap="wrap"
    >
      {PROJECTS.map((project) => (
        <Box
          minW={["300px", "350px", "400px"]}
          maxW={["300px", "350px", "400px"]}
          key={project.title}
        >
          <Img
            alt={project.title}
            as={Image}
            loaderUrl="/api/image"
            src={project.image}
            loader={remixImageLoader}
            width={{ base: '300px', md: '500px', lg: '600px' }}
            style={{
              maxWidth: "100%",
              minWidth: "100% !important",
              maxHeight: "100%",
              minHeight: "100% !important",
            }}
            responsive={[
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
            dprVariants={[3, 6]}
          />
        </Box>
      ))}
    </Flex>
  </Flex>
);
