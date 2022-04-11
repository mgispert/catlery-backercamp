import { CATAAS_URL } from "../constants";

const getCatSays = (text) => `${CATAAS_URL}/cat/says/${text}`;

const getCatSaysWithTag = (text, tag) =>
  `${CATAAS_URL}/cat/${tag}/says/${text}`;

const getCatGifSays = (text) => `${CATAAS_URL}/cat/gif/says/${text}`;

export const getCat = (text, isTag, tag) => {
  if (isTag) {
    return tag ? getCatSaysWithTag(text, tag) : getCatSays(text);
  } else {
    return getCatGifSays(text);
  }
};

const getQueryString = (values) => {
  const query = new URLSearchParams();

  for (const [key, value] of Object.entries(values)) {
    query.append(key, value);
  }

  return `?${query.toString()}`;
};

export const constructPreview = ({
  isTag,
  tag,
  text,
  filter,
  hash,
  onPreviewConstructed,
}) => {
  const url = getCat(text, isTag, tag) + getQueryString({ filter, hash });

  onPreviewConstructed(url);
};
