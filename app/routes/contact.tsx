import { Box } from "@chakra-ui/react";
import type { MetaFunction } from "@remix-run/node";

import Footer from "~/components/Layout/Footer";
import Header from "~/components/Layout/Header";
import { Enquiry } from "~/features/landing/components/Enquiry";

export const meta: MetaFunction = () => ({
  title: "Welwyn Digital | Contact us | Website & App Agency Hertfordshire",
});

export default function Contact() {
  return (
    <Box minH="100vh" scrollBehavior="smooth" bg="#0b1121">
      <Header />
      <Enquiry />
      <Footer />
    </Box>
  );
}
