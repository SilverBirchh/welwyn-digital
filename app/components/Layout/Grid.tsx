import type { ReactNode } from "react";

import { Box, Grid } from "@chakra-ui/react";

import Footer from "~/components/Layout/Footer";
import Header from "~/components/Layout/Header";

type LayoutProps = {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
};

const Layout = ({
  children,
  header = <Header backgroundColor="#062238" />,
  footer = <Footer />,
}: LayoutProps) => (
  <Grid w="full" h="100vh" templateRows="auto 1fr auto" templateColumns="100%">
    {header}
    <Box w="full" margin="0 auto" transition="0.5s ease-out">
      <Box as="main" height="full">
        {children}
      </Box>
    </Box>
    {footer}
  </Grid>
);

export default Layout;
