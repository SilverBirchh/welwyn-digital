import { Box, Container, Flex, VisuallyHidden } from "@chakra-ui/react";
import type { FC } from "react";
import { Link } from "@remix-run/react";
import Logo from "../Logo";
import { Menu } from "../Menu/Menu";

type Props = {
  backgroundColor?: string;
};

const Header: FC<Props> = ({ backgroundColor = "white" }) => {
  return (
    <>
      <Box w="full" backgroundColor={backgroundColor} zIndex={10}>
        <Container p={5} maxW="900px">
          <Flex justifyContent="space-between" alignItems="center" mx="auto">
            <Link to="/">
              <VisuallyHidden>Home</VisuallyHidden>
              <Box>
                <Logo height={50} />
              </Box>
            </Link>
            <Menu />
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Header;
