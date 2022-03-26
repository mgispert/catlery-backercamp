import { CATAAS_URL } from "../constants";

export const constructPreview = ({
  isTag,
  tag,
  text,
  filter,
  hash,
  onPreviewConstructed,
}) => {
  let urlGenerator = "";
  if (isTag && tag) {
    urlGenerator += `/${tag}`;
  } else {
    urlGenerator += "/gif";
  }

  if (text) {
    urlGenerator += `/says/${text}`;
  }

  if (filter) {
    urlGenerator += `?filter=${filter}&hash=${hash}`;
  } else {
    urlGenerator += `?hash=${hash}`;
  }

  onPreviewConstructed(encodeURI(`${CATAAS_URL}/cat` + urlGenerator));
};
