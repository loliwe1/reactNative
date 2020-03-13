import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './ColumnStyle';

const Column = ({ title, openColumn }) => {
  return (
    <TouchableOpacity style={styles.Column} color="#514D47" onPress={openColumn}>
      <Text style={styles.ColumnText}>{title}</Text>
    </TouchableOpacity>
  );
};

Column.propTypes = {
  title: PropTypes.string.isRequired,
  openColumn: PropTypes.func.isRequired,
};

export default Column;
