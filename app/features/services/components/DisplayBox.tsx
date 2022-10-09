import { HStack, Center, Icon, VStack, Heading, Text } from "@chakra-ui/react";
import type { IconType } from "react-icons";

type DisplayBoxProps = {
  icon: IconType;
  title: string;
  desc: string;
};

export const DisplayBox = ({ icon, title, desc }: DisplayBoxProps) => (
  <HStack alignItems="flex-start" gap={5}>
    <Center
      alignSelf="flex-start"
      p={2}
      minH="60px"
      minW="60px"
      maxH="60px"
      maxW="60px"
      borderRadius="md"
      bg={"#6dd2da"}
    >
      <Icon h={"full"} w={"full"} as={icon} color="white" />
    </Center>
    <VStack alignItems="flex-start">
      <Heading fontSize={"lg"}>{title}</Heading>
      <Text flex={1} fontSize="sm">
        {desc}
      </Text>
    </VStack>
  </HStack>
);
