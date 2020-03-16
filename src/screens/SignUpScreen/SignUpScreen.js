import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import styles from './style';

const SignUpScreen = ({ signUpTrigger }) => (
  <View style={styles.formWrap}>
    <Form
      onSubmit={signUpTrigger}
      render={({ handleSubmit }) => (
        <View>
          <Field name="name">
            {({ input, meta }) => (
              <View style={styles.formItem}>
                <TextInput {...input} placeholder="name" style={styles.formItemInput} />
                {meta.error && meta.touched && <Text>{meta.error}</Text>}
              </View>
            )}
          </Field>
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
              <Text style={styles.buttonText}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  </View>
);
SignUpScreen.propTypes = {
  signUpTrigger: PropTypes.func.isRequired,
};

export default SignUpScreen;
