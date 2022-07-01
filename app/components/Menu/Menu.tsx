import { Flex, Icon, useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";
import { CgMenu } from "react-icons/cg";
import { MenuDrawer } from "./MenuDrawer";
import { ChakraBox } from "~/components/Layout/ChakraBox";

export const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <ChakraBox
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.3 },
        }}
      >
        <Flex
          bg="white"
          role="button"
          justifyContent="center"
          alignItems="center"
          borderRadius="50%"
          p={2}
          ref={btnRef}
          onClick={onOpen}
          shadow="md"
        >
          <Icon as={CgMenu} h={7} w={7} color="#6dd2da" />
        </Flex>
      </ChakraBox>
      <MenuDrawer isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </>
  );
};
