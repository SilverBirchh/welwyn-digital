import {
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  Icon,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { BsStars } from "react-icons/bs";
import {
  FcSearch,
  FcMultipleDevices,
  FcFlashOn,
  FcAcceptDatabase,
  FcEngineering,
  FcMoneyTransfer,
  FcCustomerSupport,
  FcSafe,
  FcCloseUpMode,
} from "react-icons/fc";
const SPECIAL = [
  "Responsive websites",
  "Web hosting",
  "User Experience (UX)",
  "Site Speed",
  "Usability",
  "Web Standards",
];

const DELIVER = [
  {
    title: "Responsive Design",
    text: "Today people use the web on all sorts of devices. We make sure that your site is buttery smooth and looks great on all of them.",
    icon: FcMultipleDevices,
  },
  {
    title: "Fast & Lightweight",
    text: "We cut out the fluff and make sure your site loads fast no matter what type of connection it's being loaded on.",
    icon: FcFlashOn,
  },
  {
    title: "Fully Managed",
    text: "We take care of domains, emails and content. We can build sites that come with content management systems and you can make changes to content whenever you'd like.",
    icon: FcEngineering,
  },
  {
    title: "UX & UI Design",
    text: "We build innovative and user-centred design that keeps customers satisfied. It's build around your brand.",
    icon: FcCloseUpMode,
  },
  {
    title: "Clear Pricing",
    text: "We have a simple pricing model that is affordable and easy to understand. There are no surprises here.",
    icon: FcMoneyTransfer,
  },
  {
    title: "Ongoing Support",
    text: "Unlike other agencies we won't leave you after the site is complete. You can make content updates whenever you like and our support team is always here for you.",
    icon: FcCustomerSupport,
  },
];

export const Headlines = () => {
  return (
    <Container p={10} maxW="900px" centerContent>
      <Heading
        alignSelf="flex-start"
        fontSize={["3xl", "4xl", "5xl"]}
        color="#6dd2da"
      >
        The Headlines
      </Heading>
      <Spacer flexBasis={5} />
      <Spacer flexBasis={5} />
      <Grid
        gap={10}
        as="ul"
        width="100%"
        gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr"]}
      >
        {DELIVER.map((item) => {
          return (
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
              key={item.title}
            >
              <Icon h={10} w={10} as={item.icon} />
              <Text fontWeight="bold">{item.title}</Text>
              <Text textAlign="center">{item.text}</Text>
            </Flex>
          );
        })}
      </Grid>
    </Container>
  );
};
