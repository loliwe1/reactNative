import React from 'react';
import {
  View,
  FlatList,
} from 'react-native';
import Column from '../Column/Column';
import styles from './DescStyles';

const Desc = ({ column }) => (
  <View style={styles.Desc}>
    <FlatList
      data={column}
      renderItem={({ item }) => <Column title={item.key} />}
    />
  </View>
);

export default Desc;
