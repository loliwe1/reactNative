import { createLogger } from 'redux-logger';
import { routinePromiseWatcherSaga } from 'redux-saga-routines';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import todoApp from '../store/reducers/rootReducer';
import rootSaga from '../saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({ collapsed: true });
export const store = createStore(todoApp, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(rootSaga);
sagaMiddleware.run(routinePromiseWatcherSaga);