import { Box, LinkBox, SimpleGrid } from "@chakra-ui/react";
import { ActionButton } from "./ActionButton";
import { PricingCard } from "./PricingCard";
import { SiHive, SiMarketo, SiMicrosoft } from "react-icons/si";
import { GrGrow } from "react-icons/gr";
import { Link as RemixLink } from "@remix-run/react";
import { BsTree } from "react-icons/bs";
import { CgTree, CgTrees } from "react-icons/cg";

export const Prices = () => {
  return (
    <Box as="section" bg={"gray.50"} py="14" px={{ base: "4", md: "8" }}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 /*3*/ }}
        spacing={{ base: "8", lg: "0" }}
        maxW="7xl"
        mx="auto"
        justifyItems="center"
        alignItems="center"
      >
        <PricingCard
          data={{
            price: "£40",
            period: "hour",
            name: "Pay as you go",
            features: [
              "Initial call",
              "48hr support response",
              "Free updates",
              "Fully managed service",
              "On-demand site review",
            ],
          }}
          icon={GrGrow}
          button={
            <LinkBox as={RemixLink} to="/contact">
              <ActionButton variant="outline" borderWidth="2px">
                Enquire
              </ActionButton>
            </LinkBox>
          }
        />
        {/* <PricingCard
          zIndex={1}
          transform={{ lg: "scale(1.05)" }}
          data={{
            price: "£1500",
            period: "month",
            name: "Enterprise",
            features: [
              "Everything in Startup",
              "Priority support",
              "Changes within 24hrs",
              "Monthly SEO + site reviews",
            ],
          }}
          icon={CgTrees}
          button={
            <LinkBox as={RemixLink} to="/contact">
              <ActionButton>Enquire</ActionButton>
            </LinkBox>
          }
        /> */}
        <PricingCard
          data={{
            price: "£750",
            period: "month",
            name: "Start Up",
            features: [
              "Everything in pay as you go",
              "Predictable Pricing",
              "Priority support and updates",
              "Monthly site review",
              "Monthly visitor statistics report",
            ],
          }}
          icon={CgTree}
          button={
            <LinkBox as={RemixLink} to="/contact">
              <ActionButton variant="outline" borderWidth="2px">
                Enquire
              </ActionButton>
            </LinkBox>
          }
        />
      </SimpleGrid>
    </Box>
  );
};
