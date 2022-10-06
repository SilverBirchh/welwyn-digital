import type { ButtonProps } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

export const ActionButton = (props: ButtonProps) => (
  <Button
    colorScheme="gray"
    size="sm"
    w="full"
    fontWeight="extrabold"
    {...props}
  />
);
