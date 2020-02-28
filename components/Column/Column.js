import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';
import styles from './ColumnStyle';

const Column = ({ title }) => {
  return (
    <TouchableOpacity style={styles.Column} color="#514D47">
      <Text style={styles.ColumnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Column;
