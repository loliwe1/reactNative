import React from 'react'
import {Text, View, StyleSheet, Button} from 'react-native'
import Task from '../Task/Task'

const styles = StyleSheet.create({
    detailScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
      },
      detailScreenText: {
        fontSize: 40,
      }
})

const Desc = ({route, navigation}) => {
      const {itemId, otherParams, test123} = route.params;
      return (
        <View style={styles.detailScreen}>
          <Text style={styles.detailScreenText}>Details Screen</Text>
          <Text>itemId: {JSON.stringify(itemId)}</Text>
          <Text>otherParam: {JSON.stringify(otherParams)}</Text>
          <Text>test123: {JSON.stringify(test123)}</Text>
          <Button title='GO To Home' onPress={()=> navigation.navigate('Home')}/>
          <Button title='GO BACK' onPress={()=> navigation.goBack()}/>
          <Button title="Go to Details... again" onPress={() => navigation.push('Desc', {
                itemId: Math.floor(Math.random() * 100),
          })} />
          <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()} />
          <Task title='TO DO'/>
          <Task title='DONE'/>
          <Task title= 'In Progress'/>
        </View>
      );
}

{/* <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        /> */}

        // npx react-native run-ios

export default Desc