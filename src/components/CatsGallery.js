import { Flex, Image } from "@chakra-ui/react";
import { CATAAS_URL } from "../constants";

export const CatsGallery = ({ onCatClicked, cats }) => (
  <Flex
    as="section"
    maxWidth="1440px"
    flexWrap="wrap"
    justifyContent="space-between"
    alignItems="baseline"
    gap="2rem"
    margin="2rem"
    flex="1"
  >
    {cats?.map((cat, index) => (
      <Image
        key={index}
        onClick={() => onCatClicked(index)}
        src={`${CATAAS_URL}/${cat.url}`}
        alt="Cat image"
        maxWidth="30rem"
        maxHeight="15rem"
        borderRadius="5px"
      />
    ))}
  </Flex>
);
