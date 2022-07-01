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
  FcEngineering,
  FcMoneyTransfer,
  FcCustomerSupport,
  FcCloseUpMode,
} from "react-icons/fc";
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

const DELIVER = [
  {
    title: "SEO Ready",
    text: "We know all about getting a site to the top of Google search. All of our sites are built with search in mind to make sure people find your site.",
    icon: FcSearch,
  },
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

export const WebApps = () => {
  return (
    <Container id="web-apps" p={10} maxW="900px" centerContent>
      <Heading
        alignSelf="flex-start"
        fontSize={["3xl", "4xl", "5xl"]}
        color="#6dd2da"
      >
        Web Apps
      </Heading>
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
  );
};
