import { call, put, takeEvery } from "redux-saga/effects";

import { CATAAS_URL } from "../../constants";
import { getTagsFailure, getTagsSuccess } from "./catSlice";

function* workGetTags() {
  try {
    const tags = yield call(() => fetch(`${CATAAS_URL}/api/tags`));
    const parsedTags = yield tags.json();
    yield put(getTagsSuccess(parsedTags));
  } catch (error) {
    yield put(getTagsFailure("oh noo"));
  }
}

function* catSaga() {
  yield takeEvery("cats/getTags", workGetTags);
}

export default catSaga;
