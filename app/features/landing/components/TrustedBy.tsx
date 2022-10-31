import { Center, Flex, Img, Text } from "@chakra-ui/react";

import { OptimizedImage } from "~/components/OptimisedImage";

const TRUSTED_BY = [
  {
    name: "Hep Olis",
    url: "/hepoil-logo.png",
    height: 90,
    width: 200,
    responsive: [
      {
        size: {
          height: 100,
          width: 200,
        },
      },
    ],
  },
  {
    name: "Aligned With Love",
    url: "/awl.png",
    height: 90,
    width: 90,
    responsive: [
      {
        size: {
          height: 75,
          width: 75,
        },
        maxWidth: 600,
      },
      {
        size: {
          height: 100,
          width: 100,
        },
        maxWidth: 767,
      },
      {
        size: {
          height: 150,
          width: 150,
        },
      },
    ],
  },
  {
    name: "Hep Skip Hire",
    url: "/hsh.png",
    height: 90,
    width:200,
    responsive: [
      {
        size: {
          height: 75,
          width: 200,
        },
        maxWidth: 600,
      },
      {
        size: {
          height: 150,
          width: 400,
        },
        maxWidth: 767,
      },
      {
        size: {
          height: 150,
          width: 400,
        },
      },
    ],
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
            height={company.height}
            width={company.width}
            alt={company.name}
            as={OptimizedImage}
            title={company.name}
            src={company.url}
            placeholder="blur"
            responsive={company.responsive}
          />
        </Center>
      ))}
    </Flex>
  </Center>
);
