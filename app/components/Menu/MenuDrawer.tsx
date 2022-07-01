import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Text,
  Box,
  Link,
  VStack,
} from "@chakra-ui/react";
import { Link as RemixLink } from "@remix-run/react";
import type { FC, RefObject } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  btnRef: RefObject<HTMLDivElement>;
};

export const MenuDrawer: FC<Props> = ({ isOpen, onClose, btnRef }) => {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Box as="span" color="#6dd2da">
              Welwyn
            </Box>{" "}
            <Box as="span" color="#ff6c5a">
              Digital
            </Box>
          </DrawerHeader>

          <DrawerBody>
            <VStack gap={2} alignItems="flex-start">
              <Link as={RemixLink} to="/">
                <Text>Home</Text>
              </Link>
              <Link as={RemixLink} to="/services">
                <Text>Services</Text>
              </Link>
              <Link as={RemixLink} to="/portfolio">
                <Text>Portfolio</Text>
              </Link>
              <Link as={RemixLink} to="/pricing">
                <Text>Pricing</Text>
              </Link>
              <Link as={RemixLink} to="/contact">
                <Text>Contact</Text>
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
