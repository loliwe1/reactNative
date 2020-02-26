import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Desc from './components/Desc/Desc'

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
})

const Stack = createStackNavigator();

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.helloWorld}>
      <Text style={styles.helloWorldText}>Hello world</Text>
      <Button title='Go To Details' onPress={()=> navigation.navigate('Desc', {
        itemId: 90,
        otherParams: 'anything you want here',
        test123: 'test123'
      })}/>
    </View>
  )
}

const App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Desc' component={Desc} />
        </Stack.Navigator>
      </NavigationContainer>
    )

}

export default App;
