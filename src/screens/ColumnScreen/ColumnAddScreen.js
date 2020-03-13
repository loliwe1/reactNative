import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Form, Field } from 'react-final-form';
import styles from './ColumnScreenStyle';
import PropTypes from 'prop-types';

const ColumnAddScreen = ({ addColumn }) => {
  return (
    <View style={styles.addColumnWrap}>
      <Form
        onSubmit={addColumn}
        validate={(values) => {
          const errors = {};
          if (!values.title) {
            errors.title = 'invalid column title';
          }
          return errors;
        }}
        render={({ handleSubmit }) => (
          <View>
            <Field name="title">
              {({ input, meta }) => (
                <View>
                  <TextInput {...input} placeholder="Column Title" style={styles.addColumnInput} />
                  {meta.error && meta.touched && <Text>{meta.error}</Text>}
                </View>
              )}
            </Field>
            <View style={styles.addColumnButtonWrap}>
              <TouchableOpacity onPress={handleSubmit} style={styles.addColumnButton}>
                <Text style={styles.addColumnButtonTitle}> Add New Column </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

ColumnAddScreen.propTypes = {
  addColumn: PropTypes.func.isRequired,

};

export default ColumnAddScreen;
