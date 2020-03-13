import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Form, Field } from 'react-final-form';
import styles from './ColumnScreenStyle';

const ColumnSettingScreen = ({ changeColumnTitle, deleteColumn }) => {
  return (
    <View style={styles.settingWrap}>
      <Form
        onSubmit={changeColumnTitle}
        validate={(values) => {
          const errors = {};
          if (!values.title) {
            errors.title = 'invalid title';
          }
          return errors;
        }}
        render={({ handleSubmit }) => (
          <View>
            <Field name="title">
              {({ input, meta }) => (
                <View style={styles.settingInputWrap}>
                  <TextInput {...input} placeholder="Column title" style={styles.settingInput} />
                  {meta.error && meta.touched && <Text>{meta.error}</Text>}
                </View>
              )}
            </Field>

            <View style={styles.buttonWrap}>
              <TouchableOpacity onPress={handleSubmit} style={styles.settingButton}>
                <Text style={styles.settingButtonText}>Save title</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={deleteColumn} style={styles.settingButton}>
                <Text style={styles.settingButtonText}>Delete Column</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ColumnSettingScreen;
