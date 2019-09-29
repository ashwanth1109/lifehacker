import { takeLatest, call, put, all } from "redux-saga/effects";
import * as api from "client/api";
import * as atypes from "client/actions/types";
import { Action } from "client/types";

function* registerUser({ payload }: Action) {
  try {
    const response = yield call(api.registerUser, payload);
    yield put({
      type: atypes.REGISTER_USER_SUCCESS,
      payload: response
    });
  } catch (err) {
    yield put({
      type: atypes.REGISTER_USER_FAILURE,
      payload: err
    });
  }
}

function* watchUserRegister() {
  yield takeLatest(atypes.REGISTER_USER, registerUser);
}

function* rootSaga(): any {
  yield all([watchUserRegister()]);
}

export default rootSaga;
