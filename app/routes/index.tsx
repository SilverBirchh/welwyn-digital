import { Box } from "@chakra-ui/react";
import { LinksFunction, MetaFunction } from "@remix-run/node";
import Footer from "~/components/Layout/Footer";
import { Menu } from "~/components/Menu/Menu";
import { Enquiry } from "~/features/landing/components/Enquiry";
import { Hero } from "~/features/landing/components/Hero";
import { OurProcess } from "~/features/landing/components/OurProcess";
import { OurProjects } from "~/features/landing/components/OurProjects";
import WhatWeDo from "~/features/landing/components/WhatWeDo";

export const links: LinksFunction = () => [
  {
    rel: "prefetch",
    as: "image",
    href: "/blob.svg",
  },
  {
    rel: "prefetch",
    as: "image",
    href: "/topo.svg",
  },
  {
    rel: "prefetch",
    as: "image",
    href: "/wave.svg",
  },
  {
    rel: "prefetch",
    as: "image",
    href: "/geog.svg",
  },
];

export const meta: MetaFunction = () => ({
  title: "Welwyn Digital | Website & App Agency Hertfordshire",
  "og:title": "Welwyn Digital | Website & App Agency Hertfordshire",
  "og:type": "website",
  "og:image": "/welwyndigital.jpg",
  "twitter:title": "Welwyn Digital",
  description:
    "Leading web design and development agency based in Hertfordshire. We design Websites & Mobile Apps that deliver results for businesses in Hertfordshire. Helping small businesses get online for affordable prices.",
  "og:description":
    "Leading web design and development agency based in Hertfordshire. We design Websites & Mobile Apps that deliver results for businesses in Hertfordshire. Helping small businesses get online for affordable prices.",
});

export default function Index() {
  return (
    <Box scrollBehavior="smooth">
      <Hero />
      <WhatWeDo />
      <OurProcess />
      <OurProjects />
      <Enquiry />
      <Footer />
    </Box>
  );
}
