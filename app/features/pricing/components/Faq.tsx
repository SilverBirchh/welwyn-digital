import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";

const FAQs = [
  {
    title: "What is a free update?",
    text: "These are smaller changes that would take less than an hour to complete. When you request a change we will be clear if the change is a free update. If you are using a CMS you can make changes or any size yourself. If you do not have a CMS all you have to do is send us an email to get the change started. On the pay as you go plan this will take up to 48 hours to change. Start up plan members will see changes live in 24 hours.",
  },
  {
    title: "What about hosting costs?",
    text: "Hosting costs are calculated on a per project basis. Project can vary in technologies used and amount of traffic. Before starting the project we will make an estimate on your usage and send you pricing details. Hosting fees will be billed monthly. We will monitor costs for all projects and ensure that costs are kept to a minimum.",
  },
  {
    title: "What is a fully managed service?",
    text: "A fully managed service includes, domain management, emails, secure hosting, security and updates. We will handle the tech and let you focus on your business. You can of course do certain bits yourself, just let us know which services that you require.",
  },
  {
    title: "Where are your sites hosted?",
    text: "Our sites on secure servers through Fly.io. Fly runs servers all over the world meaning that your sites and apps will be close to your users. They have a generous free tier and are highly scalable thus reducing down time and we're prepared for when your site takes off.",
  },
];

export const Faq = () => {
  return (
    <Flex direction={["column", "column", "row"]} p={10} gap={{base: 5, md: 20}}>
      <Flex direction="column">
        <Text color="#ff6c5a">Support</Text>
        <Text fontWeight="bold" fontSize="3xl" color="white">
          FAQs
        </Text>
        <Text color="gray.300">
          Everything you need to know about the service and billing.
        </Text>
      </Flex>
      <Accordion flex={1} allowMultiple>
        {FAQs.map((faq) => (
          <AccordionItem
            key={faq.title}
            borderTopWidth={0}
            borderBottomWidth={0}
            border="none"
          >
            <h2>
              <AccordionButton>
                <Box
                  fontWeight="medium"
                  fontSize="lg"
                  flex="1"
                  textAlign="left"
                  color="white"
                >
                  {faq.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color="gray.300">{faq.text}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Flex>
  );
};
