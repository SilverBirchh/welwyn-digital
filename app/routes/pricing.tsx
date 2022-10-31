import { Box, Center, Divider } from "@chakra-ui/react";
import type { MetaFunction } from "@remix-run/node";

import Footer from "~/components/Layout/Footer";
import Header from "~/components/Layout/Header";
import Contact from "~/features/pricing/components/Contact";
import { Faq } from "~/features/pricing/components/Faq";
import { Hero } from "~/features/pricing/components/Hero";
import { Prices } from "~/features/pricing/components/Prices";

export const meta: MetaFunction = () => ({
  title: "Welwyn Digital | Pricing | Website & App Agency Hertfordshire",
});

export default function Pricing() {
  return (
    <Box minH="100vh" scrollBehavior="smooth" bg="#0b1121">
      <Header />
      <Hero />
      <Prices />
      <Center my={5}>
        <Divider w="90%" />
      </Center>
      <Faq />
      <Center my={5}>
        <Divider w="90%" />
      </Center>
      <Contact />
      <Footer />
    </Box>
  );
}
