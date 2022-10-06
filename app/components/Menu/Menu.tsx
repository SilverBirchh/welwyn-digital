import { useRef } from "react";

import {
  Icon,
  Link,
  useDisclosure,
  HStack,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";
import { Link as RemixLink } from "@remix-run/react";
import { CgMenuRight } from "react-icons/cg";

import { MenuDrawer } from "./MenuDrawer";

export const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <HStack
        py={1}
        gap={2}
        alignItems="flex-start"
        color="white"
        fontSize="small"
        display={{ base: "none", sm: "flex" }}
      >
        <Link as={RemixLink} to="/services">
          <Text>Services</Text>
        </Link>
        <Link as={RemixLink} to="/portfolio">
          <Text>Portfolio</Text>
        </Link>
        <Link as={RemixLink} to="/pricing">
          <Text>Pricing</Text>
        </Link>
        <Button as={RemixLink} to="/contact" colorScheme="teal" size="xs">
          Contact
        </Button>
      </HStack>
      {/* Mobile Drawer */}

      <Box
        display={{ base: "flex", sm: "none" }}
        role="button"
        justifyContent="center"
        alignItems="center"
        borderRadius="50%"
        p={2}
        ref={btnRef}
        onClick={onOpen}
      >
        <Icon
          as={CgMenuRight}
          h={7}
          w={7}
          color="white"
          _hover={{ color: "#ff6c5a" }}
          transition="color 300ms ease"
        />
      </Box>
      <Box as="span" display={{ base: "none", sm: "none" }}>
        <MenuDrawer isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
      </Box>
    </>
  );
};
