import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Icon,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { BsArrowRightCircleFill } from "react-icons/bs";

const SPECIAL = [
  "Support Android & iOS",
  "Managed Store Listings",
  "Offline First",
  "Notifications",
  "Device Features",
  "Usability",
  "Full Stack Capabilities",
];

export const MobileApp = () => {
  return (
    <Box bg="#f7fafc">
      <Container id="mobile-apps" p={10} maxW="900px" centerContent>
        <Heading
          alignSelf="flex-start"
          fontSize={["3xl", "4xl", "5xl"]}
          color="#6dd2da"
        >
          Mobile Apps
        </Heading>
        <Spacer flexBasis={2} />
        <Flex direction={["column", "row"]} gap={10}>
          <Text flex={1}>
            Mobile Apps can help your brand gain visibility, improve internal
            processes and launch a new service. We build apps for Android and
            iOS that can do all these things and more. We use cross platform
            frameworks that mean we can build two apps in the time it takes to
            build one. And there is no drop in quality.
          </Text>
          <Text flex={1}>
            Our apps have all of the features you've come to expect. These
            include notifications, offline access, downloads and more. Whatever
            you're building an app for we'll build it with accessibility, ease
            of use and ease of distribution in mind.
          </Text>
        </Flex>
        <Spacer flexBasis={5} />
        <Divider />
        <Spacer flexBasis={5} />
        <Text alignSelf="flex-start" fontSize="3xl">
          Mobile apps with
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
              <Flex alignItems="center" gap={2}>
                <Icon as={BsArrowRightCircleFill} color="#ff6c5a" />
                {item}
              </Flex>
            </Box>
          ))}
        </Flex>
        <Spacer flexBasis={5} />
      </Container>
    </Box>
  );
};
