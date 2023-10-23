import { ActionTypes } from "./types";
import { watchCatFetch } from "./sagas/post-saga"

import { takeEvery, all, fork } from 'redux-saga/effects';

const rootSaga = function* () {
    yield all([
        fork(watchCatFetch),
    ])
}

export default rootSaga;