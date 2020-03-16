import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ColumnScreenContainer from '../screens/ColumnScreen/ColumnScreenContainer';

const Tab = createMaterialTopTabNavigator();

function ActiveColumn(props) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#72A8BC',
        inactiveTintColor: '#C8C8C8',
        indicatorStyle: { backgroundColor: '#72A8BC' },
        labelStyle: { fontSize: 13 },
      }}
    >
      <Tab.Screen name="My prayers" component={() => <ColumnScreenContainer {...props} />} />
      <Tab.Screen name="subscribed" component={() => <ColumnScreenContainer {...props} />} />
    </Tab.Navigator>
  );
}

export default ActiveColumn;
