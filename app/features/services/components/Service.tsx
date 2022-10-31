import { Flex, AspectRatio, Box } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
  imgSrc: string;
};

export const Service = ({ children, imgSrc }: Props) => (
  <Box bg="#1a202c" borderRadius="md" shadow="md" color="white">
    <Box p={{ base: 5, md: 16 }} maxW="900px" minW="100%">
      <Flex
        minW="100%"
        direction={{ base: "column-reverse", lg: "row" }}
        gap={10}
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex flex={1} direction="column" gap={10}>
          {children}
        </Flex>
        <AspectRatio
          ml={{ base: 0, lg: 20 }}
          mt={{ base: 0, lg: 10 }}
          flex={2}
          flexGrow={1}
          ratio={4 / 3}
          h={{ base: "400px", lg: "auto" }}
          w={{ base: "400px", lg: "auto" }}
          maxW="100%"
        >
          <Box
            backgroundImage={imgSrc}
            backgroundRepeat="no-repeat"
            backgroundSize="contain"
            h="100%"
            w="100%"
          />
        </AspectRatio>
      </Flex>
    </Box>
  </Box>
);
