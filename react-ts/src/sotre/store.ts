import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {all} from "redux-saga/effects";
import {AppState} from "../models/store/store.types";

const appReducer = combineReducers<AppState>({});
const composeEnhancers = compose;
const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield all([]);
}

export const store = createStore(
    appReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
