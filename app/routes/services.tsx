import { Box } from "@chakra-ui/react";
import type { MetaFunction } from "@remix-run/node";
import Footer from "~/components/Layout/Footer";
import { Headlines } from "~/features/services/components/Headlines";
import { Hero } from "~/features/services/components/Hero";
import { MobileApp } from "~/features/services/components/MobileApp";
import { WebApps } from "~/features/services/components/WebApps";
import { Websites } from "~/features/services/components/Websites";

export const meta: MetaFunction = () => ({
  title: "Welwyn Digital | Our services | Website & App Agency Hertfordshire",
});

export default function Services() {
  return (
    <Box>
      <Hero />
      <Headlines />
      <Websites />
      <WebApps />
      <MobileApp />
      <Footer />
    </Box>
  );
}
