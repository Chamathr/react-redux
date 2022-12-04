import { all } from "redux-saga/effects";

import dataSaga from "./dataSaga";

export default function* rootSaga(getState) {
  yield all([
    dataSaga()
  ]);
}
