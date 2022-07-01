import type { ButtonProps } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

export const ActionButton = (props: ButtonProps) => (
  <Button
    colorScheme="gray"
    size="lg"
    w="full"
    fontWeight="extrabold"
    py={{ md: "8" }}
    {...props}
  />
);
