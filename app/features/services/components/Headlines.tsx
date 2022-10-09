import { Center, Container, Flex, Grid, Icon, Text } from "@chakra-ui/react";
import { BiDevices } from "react-icons/bi";
import { BsFlower3, BsGear, BsLightningCharge, BsSun } from "react-icons/bs";
import { HiOutlineSupport } from "react-icons/hi";

const DELIVER = [
  {
    title: "Responsive Design",
    text: "Today people use the web on all sorts of devices. We make sure that your site, adverts and apps look great on all of them.",
    icon: BiDevices,
  },
  {
    title: "Fast & Lightweight",
    text: "We cut out the fluff and make sure your site loads fast no matter what type of connection it's being loaded on.",
    icon: BsLightningCharge,
  },
  {
    title: "Fully Managed",
    text: "We take care of domains, emails, content, ads. If you need a content management systems just let us know.",
    icon: BsGear,
  },
  {
    title: "UX & UI Design",
    text: "We build innovative and user-centred designs that keep customers satisfied. It's build around your brand.",
    icon: BsFlower3,
  },
  {
    title: "Clear Pricing",
    text: "We have a simple project based pricing model that is affordable and easy to understand. There are no surprises here.",
    icon: BsSun,
  },
  {
    title: "Ongoing Support",
    text: "Unlike other agencies we won't leave you after the site is complete. You can make content updates whenever and support is always here for you.",
    icon: HiOutlineSupport,
  },
];

export const Headlines = () => (
  <Flex
    flex={1}
    direction="column"
    mt={10}
    placeItems="center"
    mb={16}
    color="white"
  >
    <Container maxW="900px" centerContent textAlign={"center"} gap={5}>
      <Text fontWeight="medium" color={["#ff6c5a"]} letterSpacing="wide">
        THE HEADLINES
      </Text>
      <Text flex={1} fontSize={["2xl", "3xl"]} fontWeight="bold">
        Everything you want from a digital partner
      </Text>
      <Text fontSize="md" color="gray.300">
        No matter the service you choose, you can be sure you'll be in the
        safest of hands. We take this seriously. That's why every projects
        benefits from all of this as well!
      </Text>
      <Grid
        mt={10}
        gap={10}
        as="ul"
        width="100%"
        gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr"]}
      >
        {DELIVER.map((item) => (
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            key={item.title}
            bg="#334155"
            p={5}
            borderRadius="md"
            gap={5}
          >
            <Center
              marginTop={-10}
              p={2}
              h={14}
              w={14}
              borderRadius="md"
              bg={"#6dd2da"}
            >
              <Icon h={"full"} w={"full"} as={item.icon} color="white" />
            </Center>
            <Text fontWeight="bold">{item.title}</Text>
            <Text textAlign="center" color={"gray.300"} fontSize="sm">
              {item.text}
            </Text>
          </Flex>
        ))}
      </Grid>
    </Container>
  </Flex>
);
