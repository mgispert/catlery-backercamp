import React from "react";
import { Divider, Text, Box } from "@chakra-ui/react";

export const Navbar = () => (
  <Box mt="1rem" width="80%" textAlign="center">
    <Text
      fontSize="3xl"
      fontWeight="bold"
      marginBottom={"0.5rem"}
      _hover={{ color: "#49BAE3" }}
      letterSpacing={"3px"}
    >
      Catlery
    </Text>
    <Text
      fontSize="medium"
      marginBottom={"1rem"}
      fontWeight={"bold"}
      letterSpacing={"5px"}
    >
      Your own cat-gallery, meow!
    </Text>
    <Divider mb={4} borderColor={"#49BAE3"} />
  </Box>
);
