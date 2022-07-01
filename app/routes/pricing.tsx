import { Container } from "@chakra-ui/react";
import type { MetaFunction } from "@remix-run/node";
import Layout from "~/components/Layout/Grid";
import Contact from "~/features/pricing/components/Contact";
import { Faq } from "~/features/pricing/components/Faq";
import { Hero } from "~/features/pricing/components/Hero";
import { Prices } from "~/features/pricing/components/Prices";

export const meta: MetaFunction = () => ({
  title: "Welwyn Digital | Pricing | Website & App Agency Hertfordshire",
});

export default function Pricing() {
  return (
    <Layout>
      <Hero />
      <Prices />
      <Faq />
      <Contact />
    </Layout>
  );
}
