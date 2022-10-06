import { Box, Button, Heading, HStack, Text } from "@chakra-ui/react";
import { Link } from "@remix-run/react";

export const Hero = () => {
  return (
    <Box
      backgroundColor="#0b1121"
      backgroundImage="radial-gradient(at 88% 63%, hsla(226,91%,61%,1) 0px, transparent 50%),
        radial-gradient(at 6% 35%, hsla(257,73%,62%,1) 0px, transparent 50%);"
    >
      <Box position="relative">
        <Box
          zIndex={0}
          opacity={0.5}
          position="absolute"
          inset={0}
          backgroundImage={`url("data:image/svg+xml,%3Csvg width='500' height='500' viewBox='0 0 500 500' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cg clip-path='url(%23clip0_913_18137)'%3E%3Cpath d='M0 0H500' stroke='%2347556a' stroke-width='1'/%3E%3Cpath d='M0 63H500' stroke='%2347556a' stroke-width='1'/%3E%3Cpath d='M0 127H500' stroke='%2347556a' stroke-width='1'/%3E%3Cpath d='M0 188H500' stroke='%2347556a' stroke-width='1'/%3E%3Cpath d='M0 247H500' stroke='%2347556a' stroke-width='1'/%3E%3Cpath d='M0 310H500' stroke='%2347556a' stroke-width='1'/%3E%3Cpath d='M0 368H500' stroke='%2347556a' stroke-width='1'/%3E%3Cpath d='M0 428H500' stroke='%2347556a' stroke-width='1'/%3E%3Cpath d='M0 500H500' stroke='%2347556a' stroke-width='1'/%3E%3Cpath d='M0 0V500' stroke='%2347556a' stroke-width='1'/%3E%3Cpath d='M62.5 0V500' stroke='%2347556a' stroke-width='1'/%3E%3Cpath d='M125 0V500' stroke='%2347556a' stroke-width='1'/%3E%3Cpath d='M187.5 0V500' stroke='%2347556a' stroke-width='1'/%3E%3Cpath d='M250 0V500' stroke='%2347556a' stroke-width='1'/%3E%3Cpath d='M312.5 0V500' stroke='%2347556a' stroke-width='1'/%3E%3Cpath d='M375 0V500' stroke='%2347556a' stroke-width='1'/%3E%3Cpath d='M437.5 0V500' stroke='%2347556a' stroke-width='1'/%3E%3Cpath d='M500 0V500' stroke='%2347556a' stroke-width='1'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_913_18137'%3E%3Crect width='500' height='500' fill='currentColor'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E")`}
        />
        <Box px={{ base: 4, sm: 6, md: 8 }} py={{ base: 20, sm: 24, lg: 28 }}>
          <Box pos="relative" maxW="5xl" mx="auto">
            <Heading
              as="h1"
              color="white"
              fontWeight="extrabold"
              fontSize={{ base: "4xl", sm: "5xl", lg: "6xl" }}
              textAlign="center"
              textShadow="0 2px 4px rgba(13,0,77,.08),0 3px 6px rgba(13,0,77,.08),0 8px 16px rgba(13,0,77,.08)"
            >
              Websites, apps and marketing to{" "}
              <Box as="span" color="#f1de25">
                supercharge
              </Box>{" "}
              your business.
            </Heading>
            <Text
              mt={6}
              fontSize={{ base: "md", sm: "lg" }}
              color="white"
              textAlign="center"
              maxW="3xl"
              mx="auto"
            >
              We're experts in building beautiful digital experiences tied with
              thoughtful marketing campaigns. Let Welwyn Digital elevate your
              business.
            </Text>
            <HStack pb={5} mt={{ base: 6, sm: 10 }} justifyContent="center">
              <Button
                as="a"
                href="#get-in-touch"
                colorScheme="teal"
                bgColor="#6dd2da"
                shadow="md"
              >
                Contact Us
              </Button>
              <Button
                as={Link}
                to="portfolio"
                prefetch="intent"
                colorScheme="teal"
                shadow="md"
                variant="outline"
              >
                Our Work
              </Button>
            </HStack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
