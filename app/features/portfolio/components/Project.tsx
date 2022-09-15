import { Flex, Box, HStack, Button, Text, Container } from "@chakra-ui/react";
import type { FC } from "react";
import Image from "remix-image";

export type ProjectProps = {
  title: string;
  text: string;
  image: string;
  galleryImages: string[];
  href: string;
};

export const Project: FC<ProjectProps> = ({
  title,
  text,
  image,
  galleryImages,
  href,
}) => {
  return (
    <Container maxW="900px" mb={10}>
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
          <Text maxW={"60ch"} color="gray.600">
            {text}
          </Text>
        </Flex>
        <Box
          transition={"transform 500ms ease"}
          transform={["scale(1)", "scale(0.8)"]}
          _groupHover={{ transform: "scale(1)" }}
        >
          <Image
            unoptimized
            alt={title}
            src={image}
            dprVariants={[2]}
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
    </Container>
  );
};
