import { call, all, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { ActionTypes } from '../types';
import { fetchPostFail, fetchPostSuccess } from '../actions/action';
import axios from "axios"

import { withKnobs } from "@storybook/addon-controls"
const fetchTodo = (url: String) => axios.get(url).then((res) => res.data).catch((err) => { console.warn(err) });


function* workGetCatsFetch() {
    try {
        const cats: Array<object> = yield call(fetchTodo, 'https://jsonplaceholder.typicode.com/posts')
        // console.log(cats, "---cats---");

        const posts = cats.slice(0, 10)
        yield put(fetchPostSuccess(posts))
    } catch (error: any) {
        console.log(error)
        yield put(fetchPostFail(error))
    }
}

export function* watchCatFetch() {
    yield takeLatest(ActionTypes.GET_POSTS, workGetCatsFetch)
}

