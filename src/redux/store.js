import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers/rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";

const saga = createSagaMiddleware();
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enhancer = composeEnhancers(applyMiddleware(saga));

const store = createStore(reducers, enhancer);

saga.run(rootSaga);

export default store;

