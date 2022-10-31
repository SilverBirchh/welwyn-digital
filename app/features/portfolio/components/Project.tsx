import type { FC } from "react";

import {
  Flex,
  Box,
  HStack,
  Button,
  Text,
  Container,
  Img,
} from "@chakra-ui/react";
import Image from "remix-image";

export type ProjectProps = {
  title: string;
  text: string;
  image: string;
  galleryImages: string[];
  href: string;
};

export const Project: FC<ProjectProps> = ({ title, text, image, href }) => (
  <Container maxW="900px" mb={10} color="white">
    <Flex direction="column" gap={5} alignItems="center" role="group">
      <Flex direction="column" gap={5}>
        <Box>
          <HStack>
            <Text fontWeight="bold" fontSize="2xl">
              {title}
            </Text>
            <Button
              as="a"
              href={href}
              colorScheme="teal"
              variant="outline"
              size="xs"
              target="_blank"
            >
              Visit
            </Button>
          </HStack>
        </Box>
        <Text maxW={"60ch"} color="gray.300">
          {text}
        </Text>
      </Flex>
      <Box>
        <Img
          as={Image}
          alt={title}
          src={image}
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
    </Flex>
  </Container>
);
