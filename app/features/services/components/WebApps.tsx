import {
  Box,
  Container,
  Divider,
  Flex,
  Icon,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const SPECIAL = [
  "Authentication",
  "Database Storage",
  "API's",
  "First Class Security",
  "Mobile Friendly",
  "Authorization",
  "Edge Functions",
  "Subscriptions",
];

export const WebApps = () => (
  <Box bg="#f7fafc" borderRadius="md" shadow="md">
    <Container id="web-apps" p={10} maxW="900px" centerContent>
      <Spacer flexBasis={2} />
      <Flex direction={["column", "row"]} gap={10}>
        <Text flex={1}>
          No matter how complex your project is, Welwyn Digital are experts in
          full-stack web apps. We can build internal or external apps that
          include authentication, storage and API's. We choose technologies that
          are right for the job and can work best for your needs.
        </Text>
        <Text flex={1}>
          We have clear pricing models and hosting solutions that serve your
          site to users as fast as possible. Sites are distributed close to your
          users. Finally, we take security very seriously. No unauthorized
          access, on high bills and no surprises.
        </Text>
      </Flex>
      <Spacer flexBasis={5} />
      <Divider />
      <Spacer flexBasis={5} />
      <Text alignSelf="flex-start" fontSize="3xl">
        Full stack applications with
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
              <Icon
                h={5}
                w={5}
                as={IoMdCheckmarkCircleOutline}
                color="#ff6c5a"
              />
              {item}
            </Flex>
          </Box>
        ))}
      </Flex>
      <Spacer flexBasis={5} />
    </Container>
  </Box>
);
