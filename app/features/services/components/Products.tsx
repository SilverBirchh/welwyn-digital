import { TabPanels, TabPanel, Flex } from "@chakra-ui/react";

import { Marketing } from "./Marketing";
import { MobileApp } from "./MobileApp";
import { WebApps } from "./WebApps";
import { Websites } from "./Websites";

export const Products = () => (
  <Flex justifyContent="center" w="full" bg="#0b1121">
    <TabPanels maxW="1200px" mt={-20}>
      <TabPanel>
        <Websites />
      </TabPanel>
      <TabPanel>
        <WebApps />
      </TabPanel>
      <TabPanel>
        <MobileApp />
      </TabPanel>
      <TabPanel>
        <Marketing />
      </TabPanel>
    </TabPanels>
  </Flex>
);
