import 'react-native-gesture-handler';
import React from 'react';
import {
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ActiveColumn from '../navigation/activeColumnNav'
import SignUpScreenContainer from '../screens/SignUpScreen/SignUpScreenContainer';
import LogInScreenContainer from '../screens/LogInScreen/LogInScreenContainer';
import DescContainerScreen from '../screens/Desc/DescContainerScreen';
import ColumnAddScreenContainer from '../screens/ColumnScreen/ColumnAddScreenContainer';
import TaskScreenContainer from '../screens/TaskScreen/TaskScreenContainer';
import ColumnSettingScreenContainer from '../screens/ColumnScreen/ColumnSettingScreenContainer';
import AsyncStorageService from '../services/ApiAsyncStorage';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LogIn"
        component={LogInScreenContainer}
        options={({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={{ marginRight: 15 }}>
              <Text style={{ color: '#72A8BC', fontSize: 17 }}>SignUp</Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreenContainer}
      />
      <Stack.Screen
        name="My Desc"
        component={DescContainerScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('addColumn')} style={{ marginRight: 15 }}>
              <Image source={require('../images/addColumn.png')} />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => AsyncStorageService.logOut(navigation)} style={{ marginLeft: 15 }}>
              <Text style={{ color: '#72A8BC', fontSize: 16 }}>LogOut</Text>
            </TouchableOpacity>
          ),
          headerBackTitle: null,
          headerTruncatedBackTitle: null,
          headerBackImage: () => null,
        })}
      />
      <Stack.Screen
        name="addColumn"
        component={ColumnAddScreenContainer}
      />
      <Stack.Screen
        name="ColumnActive"
        component={ActiveColumn}
        options={({ navigation, route }) => ({
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Settings', { columnId: route.params.columnId })}
              style={{ marginRight: 15 }}
            >
              <Image source={require('../images/settings.png')} />
            </TouchableOpacity>
          ),
          title: route.params.title,
        })}
      />
      <Stack.Screen
        name="TaskScreen"
        component={TaskScreenContainer}
        options={({ route }) => ({
          title: route.params.title,
          headerBackTitle: null,
          headerTruncatedBackTitle: null,
          headerStyle: {
            backgroundColor: '#BFB393',
            height: '100%',
            minHeight: 130,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 17,
            lineHeight: 27,
            flex: 1,
            flexWrap: 'wrap',
            marginLeft: 20,
          },
        })}
      />
      <Stack.Screen
        name="Settings"
        component={ColumnSettingScreenContainer}
      />
    </Stack.Navigator>
  );
};


export default Navigation;
