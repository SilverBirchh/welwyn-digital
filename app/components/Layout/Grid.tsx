import { Box, Grid } from "@chakra-ui/react";
import type { ReactNode } from "react";
import Header from "~/components/Layout/Header";
import Footer from "~/components/Layout/Footer";

type LayoutProps = {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
};

const Layout = ({
  children,
  header = <Header />,
  footer = <Footer />,
}: LayoutProps) => {
  return (
    <Grid
      w="full"
      h="100vh"
      templateRows="auto 1fr auto"
      templateColumns="100%"
    >
      {header}
      <Box w="full" margin="0 auto" transition="0.5s ease-out">
        <Box as="main" height="full">
          {children}
        </Box>
      </Box>
      {footer}
    </Grid>
  );
};

export default Layout;
