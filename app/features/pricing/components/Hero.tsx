import { Flex, Text, Container, Spacer, Box } from "@chakra-ui/react";

export const Hero = () => (
  <Box
    bg="#1e293b"
    pb={28}
    pt={5}
    backgroundRepeat="no-repeat"
    backgroundPosition="center"
    backgroundSize="cover"
    backgroundImage={`URL("data:image/svg+xml,%3Csvg width='900' height='600' viewBox='0 0 900 600' fill='none' xmlns='http://www.w3.org/2000/svg' data-iorad-extension='firefox'%3E%3Cg clip-path='url(%23clip0_918_18137)'%3E%3Cpath d='M900 0H0V600H900V0Z' fill='%231E293B'/%3E%3Cpath d='M263 155C347.5 155 416 86.4996 416 2C416 -82.4996 347.5 -151 263 -151C178.5 -151 110 -82.4996 110 2C110 86.4996 178.5 155 263 155Z' fill='%23F4CFDF'/%3E%3Cpath d='M424 478C440.016 478 453 465.016 453 449C453 432.984 440.016 420 424 420C407.984 420 395 432.984 395 449C395 465.016 407.984 478 424 478Z' fill='%23F4CFDF'/%3E%3Cpath d='M594 77C613.33 77 629 61.33 629 42C629 22.67 613.33 7 594 7C574.67 7 559 22.67 559 42C559 61.33 574.67 77 594 77Z' fill='%23F4CFDF'/%3E%3Cpath d='M71 502C115.735 502 152 465.735 152 421C152 376.265 115.735 340 71 340C26.2649 340 -10 376.265 -10 421C-10 465.735 26.2649 502 71 502Z' fill='%23F4CFDF'/%3E%3Cpath d='M892 361C956.617 361 1009 308.617 1009 244C1009 179.383 956.617 127 892 127C827.383 127 775 179.383 775 244C775 308.617 827.383 361 892 361Z' fill='%23F4CFDF'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_918_18137'%3E%3Crect width='900' height='600' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E")`}
  >
    <Flex px={{ base: 2, sm: 5, md: 10 }} py={10} direction="column">
      <Container maxW="900px" centerContent textAlign="center">
        <Text fontWeight="medium" color="#ff6c5a" letterSpacing="wide">
          PRICING
        </Text>
        <Spacer h={2} />
        <Flex flexWrap="wrap" flexDirection={["column"]} gap={5} color="white">
          <Text flex={1} fontSize={["4xl", "5xl", "5xl"]} fontWeight="bold">
            Simple no-tricks pricing
          </Text>
          <Text flex={1} fontSize="lg" color="white">
            Every project gets a free initial assessment with no obligation to
            go ahead. We scope every project separately to give you the best
            deal and so you know the cost upfront.
          </Text>
        </Flex>
      </Container>
    </Flex>
  </Box>
);
