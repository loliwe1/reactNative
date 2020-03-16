import React from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import ColumnContainer from '../../components/Column/ColumnContainer';
import styles from './style';

const Desc = ({ column, navigation, loadColumns }) => (
  <View style={styles.Desc}>
    {loadColumns ? <ActivityIndicator size="large" color="#0000ff" />
      : (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={column}
          renderItem={({ item }) => (
            <ColumnContainer title={item.title} id={item.id} navigation={navigation} />
          )}
        />
      )}
  </View>
);

Desc.propTypes = {
  column: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  loadColumns: PropTypes.bool.isRequired,
};

export default Desc;
