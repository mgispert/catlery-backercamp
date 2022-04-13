import { all, call, put, takeEvery } from "redux-saga/effects";

import { CATAAS_URL } from "../../constants";
import { buildCatURL } from "../../utils";
import {
  getCatFailure,
  getCatSuccess,
  getTagsFailure,
  getTagsSuccess,
} from "./catSlice";

function* workGetTags() {
  try {
    const tags = yield call(fetch, `${CATAAS_URL}/api/tags`);
    const parsedTags = yield tags.json();
    yield put(getTagsSuccess(parsedTags));
  } catch (error) {
    yield put(getTagsFailure("oh noo"));
  }
}

function* getCat({ payload }) {
  try {
    const url = buildCatURL({ ...payload, json: true });

    const cat = yield call(fetch, url);
    const parsedCat = yield cat.json();

    yield put(getCatSuccess(parsedCat));
  } catch (error) {
    yield put(getCatFailure("failed to get cat"));
  }
}

function* catSaga() {
  yield all([
    takeEvery("cats/getTags", workGetTags),
    takeEvery("cats/getCat", getCat),
  ]);
}

export default catSaga;
