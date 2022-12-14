import {
  Box,
  Container,
  Flex,
  forwardRef,
  Icon,
  TabList,
  Text,
  useTab,
  VStack,
} from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { AiOutlineMobile } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { MdDesignServices } from "react-icons/md";
import { TbSocial } from "react-icons/tb";

const TABS = [
  {
    icon: MdDesignServices,
    title: "Websites",
  },
  {
    icon: CgWebsite,
    title: "Web Apps",
  },
  {
    icon: AiOutlineMobile,
    title: "Mobile Apps",
  },
  {
    icon: TbSocial,
    title: "Marketing",
  },
];

const CustomTab = forwardRef(
  (
    props: {
      icon: IconType;
    },
    ref
  ) => {
    const tabProps = useTab({ ...props, ref });
    const isSelected = !!tabProps["aria-selected"];

    return (
      <VStack outline="none" cursor="pointer" width="80px" {...tabProps}>
        <Icon
          as={props.icon}
          h={50}
          w={50}
          color={isSelected ? "#ff6c5a" : "gray.400"}
        />
        <Text
          pb={{ base: 2, md: 0 }}
          color={isSelected ? "#ff6c5a" : "gray.400"}
          whiteSpace="nowrap"
          fontWeight="bold"
        >
          {tabProps.children}
        </Text>
      </VStack>
    );
  }
);

export const Hero = () => (
  <Box
    color="white"
    bg="#1e293b"
    pt={20}
    backgroundRepeat="no-repeat"
    backgroundPosition="center"
    backgroundSize="cover"
    backgroundImage={`URL("data:image/svg+xml,%3Csvg width='900' height='600' viewBox='0 0 900 600' fill='none' xmlns='http://www.w3.org/2000/svg' data-iorad-extension='firefox'%3E%3Cg clip-path='url(%23clip0_918_18137)'%3E%3Cpath d='M900 0H0V600H900V0Z' fill='%231E293B'/%3E%3Cpath d='M263 155C347.5 155 416 86.4996 416 2C416 -82.4996 347.5 -151 263 -151C178.5 -151 110 -82.4996 110 2C110 86.4996 178.5 155 263 155Z' fill='%23F4CFDF'/%3E%3Cpath d='M424 478C440.016 478 453 465.016 453 449C453 432.984 440.016 420 424 420C407.984 420 395 432.984 395 449C395 465.016 407.984 478 424 478Z' fill='%23F4CFDF'/%3E%3Cpath d='M594 77C613.33 77 629 61.33 629 42C629 22.67 613.33 7 594 7C574.67 7 559 22.67 559 42C559 61.33 574.67 77 594 77Z' fill='%23F4CFDF'/%3E%3Cpath d='M71 502C115.735 502 152 465.735 152 421C152 376.265 115.735 340 71 340C26.2649 340 -10 376.265 -10 421C-10 465.735 26.2649 502 71 502Z' fill='%23F4CFDF'/%3E%3Cpath d='M892 361C956.617 361 1009 308.617 1009 244C1009 179.383 956.617 127 892 127C827.383 127 775 179.383 775 244C775 308.617 827.383 361 892 361Z' fill='%23F4CFDF'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_918_18137'%3E%3Crect width='900' height='600' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E")`}
  >
    <Flex flex={1} direction="column">
      <Container maxW="900px">
        <Text fontWeight="medium" color={["#ff6c5a"]} letterSpacing="wide">
          OUR SERVICES
        </Text>
        <Text flex={1} fontSize={["3xl", "4xl"]} fontWeight="bold">
          Move faster with Welwyn Digital
        </Text>
        <Text mt={4} maxW={"3xl"} color="white">
          We're dedicated to your project and want to see you succeed. That's
          why all you have to do is give us the brief and we'll handle the rest.
          We get ads in front of the right people and websites that morph to any
          device size. We keep your budget low but offer first class services.
          Free updates in lighting quick speed means your business can move
          faster than ever before.
        </Text>
      </Container>
      <Container
        pt={10}
        maxW="900px"
        pb={28}
        bg={{ base: "#1e293b", lg: "transparent" }}
      >
        <TabList
          gap={20}
          display="flex"
          flexWrap="wrap"
          justifyContent={{ base: "center", md: "flex-start" }}
          alignItems="center"
        >
          {TABS.map((tab) => (
            <CustomTab key={tab.title} icon={tab.icon}>
              {tab.title}
            </CustomTab>
          ))}
        </TabList>
      </Container>
    </Flex>
  </Box>
);
