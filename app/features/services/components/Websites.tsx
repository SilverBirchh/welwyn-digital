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
    title: "SEO Ready",
    text: "We know all about getting a site to the top of Google search. All of our sites are built with search in mind to make sure people find your site.",
    icon: FcSearch,
  },
  {
    title: "Responsive Design",
    text: "Today people use the web on all sorts of devices. We make sure that your site is buttery smooth and looks great on all of them.",
    icon: FcMultipleDevices,
  },
];

export const Websites = () => {
  return (
    <Box bg="#f7fafc">
      <Container id="websites" p={10} maxW="900px" centerContent>
        <Heading
          alignSelf="flex-start"
          fontSize={["3xl", "4xl", "5xl"]}
          color="#6dd2da"
        >
          Websites
        </Heading>
        <Spacer flexBasis={2} />
        <Flex direction={["column", "row"]} gap={10}>
          <Text flex={1}>
            At Welwyn Digital our mission is is to create the kind of website
            that every company wants: easy to find, styling, quick to load,
            responsive and simple to use. We build you a brand new website or
            give an old site a face lift.
          </Text>
          <Text flex={1}>
            We'll help you through initial research, first designs, development
            and post launch updates. We are on hand every step of the way. We
            use battle tested technologies to make sure your site always ready
            to go.
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
};
