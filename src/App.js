import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import Nav from './navigation';
import store from './store';

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Nav />
    </NavigationContainer>
  </Provider>
);


export default App;
