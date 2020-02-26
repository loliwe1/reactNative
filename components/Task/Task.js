import React from 'react'
import {Text, View, StyleSheet, Button} from 'react-native'

const styles = StyleSheet.create({
    Task: {
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: 345,
      height: 59,
      paddingLeft: 15,
      marginTop: 10,
      backgroundColor: 'white',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#E5E5E5',
      borderRadius: 4,
    },
    TaskText: {
    //   fontFamily: 'SF UI Text',
      fontSize: 17,
      lineHeight: 20,
      color: '#514D47',
    }

})

const Task = ({ title }) => {
    return (
        <View style={styles.Task}>
            <Text style={styles.TaskText}>{title}</Text>
        </View>
    )
}

export default Task
