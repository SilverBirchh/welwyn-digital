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
    title: "What is priority support and updates?",
    text: "Priority support and updates on the start up plan are answered and deployed within 24 hours of the request coming though.",
  },
  {
    title: "Where are your sites hosted?",
    text: "Our sites on secure servers through Fly. Fly runs servers all over the world meaning that your sites and apps will be close to your users. They have a generous free tier and are highly scalable thus reducing down time and we're prepared for when your site takes off.",
  },
  {
    title: "Can I change plans?",
    text: "Yes! You can change plans at any time just be sending us an email. Monthly plans are billed at the start of each month, if you cancel in the middle of a billing period your service will end once the current billing period is complete.",
  },
];

export const Faq = () => {
  return (
    <Flex direction={["column", "column", "row"]} p={10} gap={20}>
      <Flex direction="column">
        <Text color="#ff6c5a">Support</Text>
        <Text fontWeight="bold" fontSize="3xl">
          FAQs
        </Text>
        <Text color="gray.500">
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
                >
                  {faq.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>{faq.text}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Flex>
  );
};
