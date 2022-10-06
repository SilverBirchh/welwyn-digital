import {
  Box,
  Container,
  Divider,
  Flex,
  Icon,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { BsStars } from "react-icons/bs";

const SPECIAL = [
  "Responsive websites",
  "Web hosting",
  "User Experience (UX)",
  "Site Speed",
  "Usability",
  "Web Standards",
];

export const Websites = () => (
  <Box bg="#f7fafc" borderRadius="md" shadow="md">
    <Container id="websites" p={10} maxW="900px" centerContent>
      <Spacer flexBasis={2} />
      <Flex direction={["column", "row"]} gap={10}>
        <Text flex={1}>
          At Welwyn Digital our mission is is to create the kind of website that
          every company wants: easy to find, stylish, quick to load, responsive
          and simple to use. We can build you a brand new website or give an old
          site a face lift.
        </Text>
        <Text flex={1}>
          We'll help you through initial research, first designs, development
          and post launch updates. We are on hand every step of the way. We use
          battle tested technologies to make sure your site always ready to go.
        </Text>
      </Flex>
      <Spacer flexBasis={5} />
      <Divider />
      <Spacer flexBasis={5} />
      <Text alignSelf="flex-start" fontSize="3xl">
        We specialise in
      </Text>
      <Spacer flexBasis={5} />
      <Flex
        justifyContent={"center"}
        alignItems="center"
        gap={5}
        flexWrap="wrap"
        as="ul"
        gridTemplateColumns={`auto`}
        width="100%"
      >
        {SPECIAL.map((item) => (
          <Box as="li" display="inline-block" key={item}>
            <Flex gap={2} alignItems="center">
              <Icon as={BsStars} color="#ff6c5a" />
              {item}
            </Flex>
          </Box>
        ))}
      </Flex>
      <Spacer flexBasis={5} />
    </Container>
  </Box>
);
