import type { FlexProps } from "@chakra-ui/react";
import { Flex, Text } from "@chakra-ui/react";

export const CardBadge = (props: FlexProps) => {
  const { children, ...flexProps } = props;
  return (
    <Flex
      bg={"blue.500"}
      position="absolute"
      right={-20}
      top={6}
      width="240px"
      transform="rotate(45deg)"
      py={2}
      justifyContent="center"
      alignItems="center"
      {...flexProps}
    >
      <Text
        fontSize="xs"
        textTransform="uppercase"
        fontWeight="bold"
        letterSpacing="wider"
        color={"white"}
      >
        {children}
      </Text>
    </Flex>
  );
};
