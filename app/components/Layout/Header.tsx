import type { FC } from "react";

import { Box, Container, Flex, VisuallyHidden } from "@chakra-ui/react";
import { Link } from "@remix-run/react";

import Logo from "../Logo";
import { Menu } from "../Menu/Menu";

type Props = {
  backgroundColor?: string;
};

const Header: FC<Props> = ({ backgroundColor = "#0b1121" }) => (
  <>
    <Box
      shadow="md"
      position="sticky"
      top={0}
      w="full"
      backgroundColor={backgroundColor}
      zIndex={90}
    >
      <Container p={2} maxW="1200px">
        <Flex justifyContent="space-between" alignItems="center" mx="auto">
          <Link to="/">
            <VisuallyHidden>Home</VisuallyHidden>
            <Box>
              <Logo height={25} />
            </Box>
          </Link>
          <Menu />
        </Flex>
      </Container>
    </Box>
  </>
);

export default Header;
