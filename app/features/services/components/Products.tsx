import {
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  VStack,
  Icon,
  forwardRef,
  useTab,
  Container,
  Text,
  Flex,
} from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { AiOutlineMobile } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { MdDesignServices } from "react-icons/md";
import { TbSocial } from "react-icons/tb";

import { Websites } from "~/features/services/components/Websites";

import { MobileApp } from "./MobileApp";
import { WebApps } from "./WebApps";

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
      <VStack outline="none" cursor="pointer" {...tabProps}>
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
        >
          {tabProps.children}
        </Text>
      </VStack>
    );
  }
);

export const Products = () => (
  <Tabs variant="solid-rounded" mt={5}>
    <Container mt={10} maxW="900px" mb={5}>
      <TabList gap={20} overflow={"auto"}>
        {TABS.map((tab) => (
          <CustomTab key={tab.title} icon={tab.icon}>
            {tab.title}
          </CustomTab>
        ))}
      </TabList>
    </Container>
    <Flex justifyContent="center" w="full">
      <TabPanels maxW="1200px">
        <TabPanel>
          <Websites />
        </TabPanel>
        <TabPanel>
          <WebApps />
        </TabPanel>
        <TabPanel>
          <MobileApp />
        </TabPanel>
        <TabPanel>4</TabPanel>
      </TabPanels>
    </Flex>
  </Tabs>
);
