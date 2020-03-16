import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import styles from './style';

const LogInScreen = ({ logInTrigger, load }) => (
  <View style={styles.formWrap}>
    {load ? <ActivityIndicator size="large" color="#0000ff" /> : (
      <Form
        onSubmit={logInTrigger}
        render={({ handleSubmit }) => (
          <View>
            <Field name="email">
              {({ input, meta }) => (
                <View style={styles.formItem}>
                  <TextInput {...input} placeholder="email" style={styles.formItemInput} />
                  {meta.error && meta.touched && <Text>{meta.error}</Text>}
                </View>
              )}
            </Field>
            <Field name="password">
              {({ input, meta }) => (
                <View style={styles.formItem}>
                  <TextInput {...input} placeholder="password" style={styles.formItemInput} secureTextEntry />
                  {meta.error && meta.touched && <Text>{meta.error}</Text>}
                </View>
              )}
            </Field>
            <View style={styles.buttonWrap}>
              <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>LogIn</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    )}
  </View>
);
LogInScreen.propTypes = {
  logInTrigger: PropTypes.func.isRequired,
  load: PropTypes.bool.isRequired,
};

export default LogInScreen;
