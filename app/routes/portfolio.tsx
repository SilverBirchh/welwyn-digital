import { Box, Spacer } from "@chakra-ui/react";
import type { MetaFunction } from "@remix-run/node";
import Footer from "~/components/Layout/Footer";
import Header from "~/components/Layout/Header";
import { Hero } from "~/features/portfolio/components/Hero";
import Projects from "~/features/portfolio/components/Projects";

export const meta: MetaFunction = () => ({
  title: "Welwyn Digital | Portfolio | Website & App Agency Hertfordshire",
});

export default function Portfolio() {
  return (
    
    <Box minH="100vh" scrollBehavior="smooth" bg="#0b1121">
       <Header />
      <Hero />
      <Spacer h={10} />
      <Projects />
      <Footer />
    </Box>
  );
}
