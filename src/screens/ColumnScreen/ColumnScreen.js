import React from 'react';
import {
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import { Form, Field } from 'react-final-form';
import PropTypes from 'prop-types';
import styles from './ColumnScreenStyle';
import TaskContainer from '../../components/Task/TaskContainer';

const required = value => (value ? undefined : 'Required');

const ColumnScreen = (
  {
    addTask,
    tasksNotAnswered,
    navigation,
    show,
    showAnswered,
    tasksAnswered,
  },
) => {
  return (
    <View style={styles.wrapper}>
      <Form
        onSubmit={addTask}
        // validate={(values) => {
        //   const errors = {};
        //   if (!values.prayer) {
        //     errors.prayer = 'Invalid prayer';
        //   }
        //   return errors;
        // }}
        render={({ handleSubmit, form }) => (
          <View>
            <Field name="prayer" validate={required}>
              {({ input, meta }) => (
                <View>
                  <View style={styles.columnScreenInputWrap}>
                    <TouchableOpacity onPress={() => {
                      handleSubmit();
                      form.reset();
                    }}
                    >
                      <Image source={require('../../images/add.png')} style={styles.columnScreenImg} />
                    </TouchableOpacity>
                    <TextInput
                      {...input}
                      type="text"
                      placeholder="Add a prayer..."
                      style={styles.columnScreenInput}
                      placeholderStyle={{ fontSize: 17 }}
                    />
                  </View>
                  {
                    meta.error && meta.touched
                    && <Text style={styles.invalidPrayer}>{meta.error}</Text>
                  }
                </View>
              )}
            </Field>
          </View>
        )}

      />
      <View style={styles.columnScreenList}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={tasksNotAnswered}
          renderItem={({ item }) => <TaskContainer title={item.title} navigation={navigation} id={item.id} answered={item.checked} />}
        />
      </View>
      <TouchableOpacity style={styles.columnScreenTouch} onPress={showAnswered}>
        {!show
          ? <Text style={styles.columnScreenTouchText}>Show Answered Prayers</Text>
          : <Text style={styles.columnScreenTouchText}>hide Answered Prayers</Text> }
      </TouchableOpacity>
      {show
      && (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={tasksAnswered}
          renderItem={({ item }) => (
            <TaskContainer
              title={item.title}
              navigation={navigation}
              id={item.id}
              answered={item.checked}
            />
          )}
        />
      )}
    </View>
  );
};

ColumnScreen.propTypes = {
  addTask: PropTypes.func.isRequired,
  tasksNotAnswered: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  show: PropTypes.bool.isRequired,
  showAnswered: PropTypes.func.isRequired,
  tasksAnswered: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

export default ColumnScreen;
