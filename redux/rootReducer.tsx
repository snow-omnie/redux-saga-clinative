import { combineReducers } from '@reduxjs/toolkit'
import PostReducer from './reducers/postReducer'


export const rootReducer = combineReducers({
    articles: PostReducer
})
export type RootState = ReturnType<typeof rootReducer>

