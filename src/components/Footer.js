import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { IoLogoOctocat } from "react-icons/io";

export const Footer = () => (
  <Flex
    padding="1rem"
    justifyContent="center"
    alignItems="center"
    borderTop="#49BAE3 1px solid"
  >
    <Text
      fontSize="small"
      fontWeight="bold"
      letterSpacing="5px"
      position="relative"
      color="white"
      textAlign="center"
    >
      MGispert 2022
    </Text>
    &nbsp;
    <IoLogoOctocat />
  </Flex>
);
