import { HStack, IconButton, LightMode, Spacer, Text } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

import { useLocalStorage } from "~/hooks/useLocalStorage";

import { ChakraBox } from "../Layout/ChakraBox";

export const Cookie = () => {
  const [seen, setSeen] = useLocalStorage<boolean>("cookie-consent", false);

  return (
    <AnimatePresence>
      {!seen && (
        <LightMode>
          <ChakraBox
            // @ts-expect-error no problem in operation, although type error appears.
            transition={{ delay: 5 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            position="fixed"
            p={2}
            bottom={10}
            bg="white"
            zIndex={9999}
            shadow="2xl"
            right={10}
            borderRadius="md"
          >
            <HStack>
              <Text fontSize="xs">
                By using our website you agree to our{" "}
                <a
                  href="https://www.cookiepolicygenerator.com/live.php?token=CBKgBq67uRCBjbVYalBc9Mh8NER9nCaX"
                  target="_blank"
                  rel="noreferrer"
                >
                  Cookie Policy
                </a>
              </Text>
              <Spacer />
              <IconButton
                size="xs"
                colorScheme="blackAlpha"
                onClick={() => setSeen(true)}
                aria-label="dismiss cookie banner"
                variant="outline"
                icon={<AiOutlineClose />}
              />
            </HStack>
          </ChakraBox>
        </LightMode>
      )}
    </AnimatePresence>
  );
};
