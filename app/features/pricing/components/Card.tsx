import type { BoxProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

import { CardBadge } from "./CardBadge";

export interface CardProps extends BoxProps {
  isPopular?: boolean;
}

export const Card = (props: CardProps) => {
  const { children, isPopular, ...rest } = props;
  return (
    <Box
      bg={"white"}
      position="relative"
      px="6"
      pb="6"
      pt="16"
      overflow="hidden"
      shadow="lg"
      maxW="sm"
      width="100%"
      {...rest}
    >
      {isPopular && <CardBadge>Popular</CardBadge>}
      {children}
    </Box>
  );
};
