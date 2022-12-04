import { put, all, fork, call, takeEvery, delay } from "redux-saga/effects";

import {
  getDataActions,
} from "../types/dataType";
import {
  setData,
  getDataError
} from "../actions/dataAction";
import {
  getDataApi,
} from "../services/dataService";

export function* getDataList() {
  yield takeEvery(getDataActions.GET_DATA, function* () {
    try {
      const data = yield call(getDataApi);
      yield put(setData(data.data));
    } catch (error) {
      yield put(getDataError(error.message));
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(getDataList)
  ]);
}
