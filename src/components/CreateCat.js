import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Flex, Stack, Button, Image, Divider, Text } from "@chakra-ui/react";

import { constructPreview } from "../utils";
import CatForm from "./CatForm";

export const CreateCat = ({ onSubmit }) => {
  const [url, setUrl] = useState();
  // hack to get fresh url from cataas
  const [hash, setHash] = useState(Date.now());
  const tags = useSelector((state) => state.cats.tagsList);
  //cat type will determine wether it's a gif or a cat with a tag
  const [catType, setCatType] = useState("gif");
  const [tag, setTag] = useState(undefined);
  //text will determine what the cat supposedly says
  const [text, setText] = useState(undefined);
  const [filter, setFilter] = useState(undefined);
  const isTag = catType === "tag";
  const [isFormShown, showForm] = useState(false);

  useEffect(() => {
    constructPreview({
      tag,
      isTag,
      text,
      filter,
      hash,
      onPreviewConstructed: setUrl,
    });
  }, [tag, text, filter, hash, isTag]);

  const handleChangeTag = (e) => setTag(e.target.value);

  const handleChangeText = (e) => setText(e.target.value);

  const handleChangeFilter = (e) => setFilter(e.target.value);

  const handleFormShow = () => showForm((prevState) => !prevState);

  const resetForm = () => {
    setCatType("gif");
    setTag(undefined);
    setText(undefined);
    setFilter(undefined);
  };

  const handleSumbit = () => {
    onSubmit(url);
    resetForm();
    setHash(Date.now());
  };

  return (
    <Flex
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
      position="relative"
    >
      {!isFormShown ? (
        <Flex justifyContent="center" gap="1rem" alignItems="center">
          <Text fontWeight={"bold"} letterSpacing={"5px"}>
            Start your journey here!
          </Text>
          <Button
            onClick={handleFormShow}
            borderColor={"transparent"}
            color={"#49bae3"}
            fontSize={"xx-large"}
          >
            +
          </Button>
        </Flex>
      ) : (
        <>
          <CatForm
            tags={tags}
            catType={catType}
            setCatType={setCatType}
            handleChangeTag={handleChangeTag}
            handleChangeText={handleChangeText}
            handleChangeFilter={handleChangeFilter}
          />
          <Stack direction="row">
            <Divider orientation="vertical" height="160px" color="white" />
          </Stack>
          <Flex flexDirection="column">
            <Image src={url} alt="Cat preview" />
            <Button
              onClick={() => {
                handleSumbit();
                handleFormShow();
              }}
              mt={4}
            >
              Add to my catlery!
            </Button>
          </Flex>
        </>
      )}
    </Flex>
  );
};
