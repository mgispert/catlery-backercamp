import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Divider,
} from "@chakra-ui/react";
import { Alert } from ".";
import { constructPreview } from "../utils";
import { FILTERS } from "../constants";

export const EditCat = ({ onEdit, onClose, urlCat, onRemove }) => {
  const defaultValuesGenerator = () => {
    // function to extract default values from the url cat
    const urlDecoded = decodeURI(urlCat);
    const urlCatSplitted = urlDecoded?.split(/\/|\?/);
    const GIF_OR_TAG_INDEX = 4;
    const SAYS_INDEX = 5;
    const TEXT_INDEX = 6;

    const defaultCatType =
      urlCatSplitted?.[GIF_OR_TAG_INDEX] === "gif" ? "gif" : "tag";
    const defaultTag =
      defaultCatType === "tag" ? urlCatSplitted?.[GIF_OR_TAG_INDEX] : undefined;
    const defaultText =
      urlCatSplitted?.[SAYS_INDEX] === "says"
        ? urlCatSplitted?.[TEXT_INDEX]
        : undefined;
    const defaultFilter =
      urlCat?.indexOf?.("?filter=") !== -1
        ? urlCat?.substring(urlCat.indexOf("?filter=") + "?filter=".length)
        : undefined;

    return { defaultCatType, defaultTag, defaultText, defaultFilter };
  };

  const { defaultCatType, defaultTag, defaultText, defaultFilter } =
    defaultValuesGenerator();
  const [url, setUrl] = useState();
  const tags = useSelector((state) => state.cats.tagsList);
  //cat type will determine wether it's a gif or a cat with a tag
  const [catType, setCatType] = useState(defaultCatType);
  const [tag, setTag] = useState(defaultTag);
  //text will determine what the cat supposedly says
  const [text, setText] = useState(defaultText);
  const [filter, setFilter] = useState(defaultFilter);
  const isTag = catType === "tag";

  const handleChangeTag = (e) => {
    setTag(e.target.value);
  };

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleChangeFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleSumbit = () => {
    onEdit(url);
    onClose();
  };

  useEffect(() => {
    constructPreview({
      isTag,
      tag,
      text,
      filter,
      onPreviewConstructed: setUrl,
    });
  }, [tag, text, filter, catType]);

  return (
    <Modal isOpen onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        maxWidth={"xl"}
        display={"flex"}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <ModalHeader>Edit your kitty</ModalHeader>
        <Divider width="80%" />
        <ModalCloseButton />
        <ModalBody>
          <Flex
            flexDirection="column"
            justifyContent="center"
            maxWidth="500px"
            gap="16px"
            margin="0 auto"
            alignItems="center"
            borderRadius="md"
            borderColor="whiteAlpha.300"
            borderWidth="1px"
            borderStyle="solid"
            p={4}
            marginTop="2rem"
            marginBottom="2rem"
          >
            <Flex flexDirection="column" minWidth="240px">
              <RadioGroup onChange={setCatType} defaultValue={catType}>
                <Stack direction="row" fontWeight="bold" letterSpacing="5px">
                  <Radio value="gif">GIF</Radio>
                  <Radio value="tag">PIC</Radio>
                </Stack>
              </RadioGroup>
              {isTag && (
                <Select
                  placeholder="Select tag"
                  onChange={handleChangeTag}
                  defaultValue={tag}
                  mt={4}
                >
                  {tags.map((tag, index) => (
                    <option value={tag} key={index}>
                      {tag}
                    </option>
                  ))}
                </Select>
              )}
              <Flex flexDirection="column">
                <FormControl mt={4}>
                  <FormLabel fontWeight="bold" letterSpacing="5px">
                    Text
                  </FormLabel>
                  <Input
                    placeholder="This is what the cat says"
                    onChange={handleChangeText}
                    defaultValue={text}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel fontWeight="bold" letterSpacing="5px">
                    Filter
                  </FormLabel>
                  <Select
                    placeholder="Select a filter for the cat"
                    onChange={handleChangeFilter}
                    defaultValue={filter}
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
            <Button
              onClick={handleSumbit}
              mt={4}
              fontWeight="bold"
              letterSpacing="5px"
              width="100%"
            >
              Edit kitty!
            </Button>
            <Alert
              onRemove={() => {
                onRemove();
                onClose();
              }}
            />
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
