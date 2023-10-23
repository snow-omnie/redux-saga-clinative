import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
// import logger from 'redux-logger'
import { Store } from '@reduxjs/toolkit';
import createSagaMiddleWare from "redux-saga"
import { rootReducer, RootState } from './rootReducer';
import rootSaga from "./rootSaga"
const sagaMiddleWare = createSagaMiddleWare();

const store = configureStore(
    {
        reducer: rootReducer,
        middleware: [sagaMiddleWare],
    }
)

export type AppDispatch = typeof store.dispatch
sagaMiddleWare.run(rootSaga)

export default store
