import React from "react";
import {
  Flex,
  Radio,
  RadioGroup,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";

import { FILTERS } from "../constants";

const CatForm = ({
  tags,
  catType,
  setCatType,
  handleChangeTag,
  handleChangeText,
  handleChangeFilter,
}) => (
  <Flex flexDirection="column" minWidth="240px">
    <RadioGroup onChange={setCatType} value={catType}>
      <Stack direction="row" fontWeight={"bold"} letterSpacing={"5px"}>
        <Radio value="gif">GIF</Radio>
        <Radio value="tag">PIC</Radio>
      </Stack>
    </RadioGroup>
    {catType === "tag" && (
      <Select placeholder="Select tag" onChange={handleChangeTag} mt={4}>
        {tags.map((tag, index) => (
          <option value={tag} key={index}>
            {tag}
          </option>
        ))}
      </Select>
    )}
    <Flex flexDirection="column">
      <FormControl mt={4}>
        <FormLabel fontWeight={"bold"} letterSpacing={"5px"}>
          Text
        </FormLabel>
        <Input
          placeholder="This is what the cat says"
          onChange={handleChangeText}
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel fontWeight={"bold"} letterSpacing={"5px"}>
          Filter
        </FormLabel>
        <Select
          placeholder="Select a filter for the cat"
          onChange={handleChangeFilter}
        >
          {FILTERS.map((filter) => (
            <option value={filter.toLowerCase()} key={filter}>
              {filter}
            </option>
          ))}
        </Select>
      </FormControl>
    </Flex>
  </Flex>
);

export default CatForm;
