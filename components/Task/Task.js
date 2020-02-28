import React from 'react';
import { View, Image, Text } from 'react-native';
import CheckBox from 'react-native-check-box';
import styles from './TaskStyle';

const Task = ({ title, onClick, isChecked }) => {
  return (
    <View style={styles.taskWrap}>
      <View style={styles.taskLine} />
      <CheckBox isChecked={isChecked} onClick={onClick} />
      {isChecked
        ? <Text style={styles.isChecked}>{title}</Text>
        : <Text style={styles.taskText}>{title}</Text> }
      <View style={styles.prayers}>
        <Image source={require('../../images/user.png')} />
        <Text style={styles.prayersText}>0</Text>
      </View>
      <View style={styles.prayers}>
        <Image source={require('../../images/prayer.png')} />
        <Text style={styles.prayersText}>0</Text>
      </View>
    </View>
  );
};

export default Task;
