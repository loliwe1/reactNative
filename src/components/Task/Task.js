import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import CheckBox from 'react-native-check-box';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import styles from './TaskStyle';

const Task = ({
  title,
  isChecked,
  openTask,
  rightActions,
  onCheck,
}) => {
  return (
    <Swipeable renderRightActions={rightActions}>
      <View style={styles.taskWrap}>
        <View style={styles.taskLine} />
        <CheckBox onClick={onCheck} isChecked={isChecked} />
        <TouchableOpacity style={styles.taskWrap} onPress={openTask}>
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
        </TouchableOpacity>
      </View>
    </Swipeable>
  );
};

Task.propTypes = {
  title: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  openTask: PropTypes.func.isRequired,
  rightActions: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired,
};

export default Task;
