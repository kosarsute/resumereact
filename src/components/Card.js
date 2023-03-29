import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack w="100%" maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={imageSrc} alt={title} />
      <VStack p={4} alignItems="start">
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
      </VStack>
      <HStack p={4} justifyContent="flex-end" w="100%">
        <Text>See more</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
