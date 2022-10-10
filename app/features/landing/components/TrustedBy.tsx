import { Center, Flex, Img, Text } from "@chakra-ui/react";
import Image, { remixImageLoader } from "remix-image";

const TRUSTED_BY = [
  {
    name: "Hep Olis",
    url: "hepoil-logo.png",
  },
  {
    name: "Aligned With Love",
    url: "awl.png",
  },
  {
    name: "Hep Skip Hire",
    url: "hsh.png",
  },
];

export const TrustedBy = () => (
  <Center flexDirection="column" py={28} bg="#0b1121">
    <Text fontWeight="medium" color="#6dd2da" letterSpacing="wide">
      TRUSTED BY
    </Text>
    <Flex
      p={2}
      flexWrap="wrap"
      gap={10}
      alignItems="center"
      justify="center"
      w="full"
    >
      {TRUSTED_BY.map((company) => (
        <Center
          flex={"1 1 0px"}
          key={company.name}
          p={2}
          bg="white"
          rounded="md"
          minWidth="200px"
          maxWidth="200px"
        >
          <Img
            minWidth="200px"
            maxWidth="200px"
            height="75"
            width="150"
            alt={company.name}
            as={Image}
            title={company.name}
            loaderUrl="/api/image"
            src={company.url}
            loader={remixImageLoader}
            placeholder="blur"
            responsive={[
              {
                size: {
                  width: 75,
                },
              },
            ]}
            dprVariants={[1, 3]}
          />
        </Center>
      ))}
    </Flex>
  </Center>
);
