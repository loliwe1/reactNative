import 'react-native-gesture-handler';
import React from 'react';
import { createLogger } from 'redux-logger';
import { Provider, connect } from 'react-redux';
import { createStore, bindActionCreators, applyMiddleware } from 'redux';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ColumnScreenContainer from './components/ColumnScreen/ColumnScreenContainer';
import todoApp from './store/reducers/rootReducer';
import ColumnScreen from './components/ColumnScreen/ColumnScreen';


const styles = StyleSheet.create({
  helloWorld: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FAEBD7',
  },
  helloWorldText: {
    fontSize: 40,
  },
  titleButton: {
    color: '#72A8BC',
  },
});

const logger = createLogger({ collapsed: true });
const store = createStore(
  todoApp,
  applyMiddleware(logger),
);
const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.helloWorld}>
      <Text style={styles.helloWorldText}>Hello world</Text>
      <Button
        title="Go To Desc"
        onPress={() => navigation.navigate('My Desc', {
          itemId: 90,
          otherParams: 'anything you want here',
          test123: 'test123',
        })}
      />
    </View>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="My Desc"
            component={ColumnScreenContainer}
            options={{
              headerRight: () => (
                <Button
                  onPress={() => navigation.navigate('Desc Name')}
                  title="&#10010;"
                  color="#72A8BC"
                />
              ),
            }}
          />
          <Stack.Screen
            name="Desc Name"
            component={ColumnScreen}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'My Home' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
