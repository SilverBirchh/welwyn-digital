import {
  Flex,
  Heading,
  Icon,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import * as React from "react";
import { HiCheckCircle } from "react-icons/hi";
import type { CardProps } from "./Card";
import { Card } from "./Card";

export interface PricingCardData {
  features: string[];
  name: string;
  price: string;
  period: string;
}

interface PricingCardProps extends CardProps {
  data: PricingCardData;
  icon: React.ElementType;
  button: React.ReactElement;
}

export const PricingCard = (props: PricingCardProps) => {
  const { data, icon, button, ...rest } = props;
  const { features, price, name, period } = data;

  return (
    <Card rounded={{ sm: "xl" }} {...rest}>
      <VStack spacing={3}>
        <Icon aria-hidden as={icon} fontSize="4xl" />
        <Heading size="md" fontWeight="extrabold">
          {name}
        </Heading>
      </VStack>
      <Flex
        align="flex-end"
        justify="center"
        fontWeight="extrabold"
        color={"#062238"}
        my="4"
      >
        <Heading size="xl" fontWeight="inherit" lineHeight="0.9em">
          {price}
        </Heading>
        <Text fontWeight="inherit" fontSize="2xl">
          / {period}
        </Text>
      </Flex>
      <List spacing="4" mb="8" maxW="28ch" mx="auto">
        {features.map((feature, index) => (
          <ListItem fontWeight="medium" key={index}>
            <ListIcon
              fontSize="xl"
              as={HiCheckCircle}
              marginEnd={2}
              color={"#062238"}
            />
            {feature}
          </ListItem>
        ))}
      </List>
      {button}
    </Card>
  );
};
