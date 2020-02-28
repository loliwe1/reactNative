import React from 'react';
import {
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Text,
  Button,
} from 'react-native';
import styles from './ColumnScreenStyle';
import TaskContainer from '../Task/TaskContainer';

const ColumnScreen = ({ setRef,  addTask}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.columnScreenInputWrap}>
        <Button title="&#10010;" onPress={addTask} />
        <TextInput ref={setRef} style={styles.columnScreenInput} placeholder="Add a prayer..." placeholderStyle={{ fontSize: 17 }} />
      </View>
      <View style={styles.columnScreenList}>
        <FlatList
          data={[
            { key: 'sdfsfsdfsdfsfsfdsfsasadfsdf' },
            { key: '12312312312312313123123123123' },
            { key: '111111' },
            { key: 'fddgdfgdgdgdfgdfgdfgdgdfgdgweerterterte' },
            { key: '1312312312312sdfsfsdfsfsfsdfsfsdfsdf' },
          ]}
          renderItem={({ item }) => <TaskContainer title={item.key} />}
        />
      </View>
      <TouchableOpacity style={styles.columnScreenTouch}>
        <Text style={styles.columnScreenTouchText}>Show Answered Prayers</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ColumnScreen;
