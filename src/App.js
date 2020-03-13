import 'react-native-gesture-handler';
import React from 'react';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { routinePromiseWatcherSaga } from 'redux-saga-routines';
import { createStore, applyMiddleware } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import createSagaMiddleware from 'redux-saga';
import todoApp from './store/reducers/rootReducer';
import rootSaga from './saga/rootSaga';
import Nav from './navigation/indexNav';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({ collapsed: true });
const store = createStore(todoApp, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(rootSaga);
sagaMiddleware.run(routinePromiseWatcherSaga);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Nav />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
