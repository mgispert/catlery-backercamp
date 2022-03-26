import { call, put, takeEvery } from "redux-saga/effects";

import { CATAAS_URL } from "../../constants";
import { getTagsSuccess } from "./catSlice";

function* workGetTags() {
  const tags = yield call(() => fetch(`${CATAAS_URL}/api/tags`));
  const parsedTags = yield tags.json();
  yield put(getTagsSuccess(parsedTags));
}

function* catSaga() {
  yield takeEvery("cats/getTags", workGetTags);
}

export default catSaga;
