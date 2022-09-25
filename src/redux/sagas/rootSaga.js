import { takeLatest } from "redux-saga/effects";
import { getCatsFetch } from "../slices/catSlice";
import { handleGetCats } from "./handlers/cat.handler";

export function* watcherSaga() {
  yield takeLatest(getCatsFetch.type, handleGetCats);
}
