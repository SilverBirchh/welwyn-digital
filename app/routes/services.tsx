import { Box, Tabs } from "@chakra-ui/react";
import type { MetaFunction } from "@remix-run/node";
import { useSearchParams } from "@remix-run/react";

import Footer from "~/components/Layout/Footer";
import Header from "~/components/Layout/Header";
import { Headlines } from "~/features/services/components/Headlines";
import { Hero } from "~/features/services/components/Hero";
import { Products } from "~/features/services/components/Products";

export const meta: MetaFunction = () => ({
  title: "Welwyn Digital | Our services | Website & App Agency Hertfordshire",
});

export default function Services() {
  const [search] = useSearchParams();

  const defaultTab = () => {
    const tab = parseInt(search.get("t") || "0");
    return [0, 1, 2, 3].includes(tab) ? tab : 0;
  };

  return (
    <Box minH="100vh" scrollBehavior="smooth" bg="#0b1121">
      <Header />
      <Tabs variant="solid-rounded" bg="#1e293b" defaultIndex={defaultTab()}>
        <Hero />
        <Products />
      </Tabs>
      <Headlines />
      <Footer />
    </Box>
  );
}
