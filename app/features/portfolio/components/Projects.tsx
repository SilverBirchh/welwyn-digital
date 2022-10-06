import type { SystemProps } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import type { ProjectProps } from "~/features/portfolio/components/Project";
import { Project } from "~/features/portfolio/components/Project";

const PROJECTS: ProjectProps[] = [
  {
    title: "Hep Oils",
    image: "/hepoils.webp",
    text: "Hep Oils have over 20 years of experience in the cooking oils and recycling industry. They reached out to us to help build a website to provide product information and to help drive leads and sales.",
    href: "https://hepoils.com",
    galleryImages: [],
  },
  {
    title: "Soar Education",
    image: "/soar.webp",
    text: "Soar Education are building a platform to transform how educators teach and how they can get compensated for their efforts. We're building their platform and marketing websites for them.",
    href: "https://soar.study",
    galleryImages: [],
  },
  {
    title: "Hep Skip Hire",
    image: "/hepskiphire.webp",
    text: "Hep Skip Hire provide first class waste management services and needed a website to match their reputation. We built them a stunning website that helps them stand out from the crowd.",
    href: "https://hepskiphire.co.uk",
    galleryImages: [],
  },
];

type Props = {
  direction?:  SystemProps["flexDirection"];
}

export default function Projects({ direction = "column" }: Props) {
  return (
    <Flex gap={5} direction={direction}>
      {PROJECTS.map((project) => (
        <Project key={project.title} {...project} />
      ))}
    </Flex>
  );
}
