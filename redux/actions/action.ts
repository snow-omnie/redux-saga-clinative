import axios from "axios"
import { ActionTypes } from "../types"
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

export const fetchPost = () => {
    return { type: ActionTypes.GET_POSTS }
}
export const fetchPostSuccess = (data: Array<object>) => {
    return {
        type: ActionTypes.GET_POSTS_SUCCESS,
        payload: data
    }
}
export const fetchPostFail = (error: object) => {
    return {
        type: ActionTypes.GET_POSTS_SUCCESS,
        error
    }
}