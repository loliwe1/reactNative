import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import styles from './TaskScreenStyle';
import Comment from '../../components/Comment/Comment';


const TasksScreen = ({ addComment, comments }) => {
  return (
    <View style={styles.taskWrap}>
      <View style={styles.lastPrayedWrap}>
        <View style={styles.lastPrayedBorder} />
        <Text style={styles.lastPrayed}> Last prayed 8 min ago</Text>
      </View>
      <View style={styles.detailsWrap}>
        <View style={styles.detailItemWrap}>
          <View style={styles.detailItem}>
            <Text style={styles.detailItemTitleDate}>July 25 2017</Text>
            <Text style={styles.detailItemSubTitle}> Date Added</Text>
            <TouchableOpacity>
              <Text style={styles.detailItemButton}> Opened for 0 days </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailItemTitle}>123</Text>
            <Text style={styles.detailItemSubTitle}>Times Prayed Total</Text>
          </View>
        </View>
        <View style={styles.detailItemWrap}>
          <View style={styles.detailItem}>
            <Text style={styles.detailItemTitle}>63</Text>
            <Text style={styles.detailItemSubTitle}>Times Prayed by Me</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailItemTitle}>60</Text>
            <Text style={styles.detailItemSubTitle}>Times Prayed by Others</Text>
          </View>
        </View>
      </View>
      <View style={styles.members}>
        <TouchableOpacity>
          <Text style={styles.membersButton}>Members</Text>
        </TouchableOpacity>
        <View style={styles.membersList}>
          <Image style={styles.membersListItem} source={require('../../images/member.png')} />
          <Image style={styles.membersListItem} source={require('../../images/member1.png')} />
          <TouchableOpacity style={styles.addMember}>
            <Image source={require('../../images/addMember.png')} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.membersButton}>Comments</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        style={styles.commentsList}
        data={comments}
        renderItem={({ item }) => <Comment comment={item.comment} creator={item.creator} />}
      />
      <Form
        onSubmit={addComment}
        validate={(values) => {
          const errors = {};
          if (!values.comment) {
            errors.comment = 'Invalid comment';
          }
          return errors;
        }}
        render={({ handleSubmit, form }) => (
          <View>
            <Field name="comment">
              {({ input, meta }) => (
                <View>
                  <View style={styles.commentForm}>
                    <TouchableOpacity onPress={() => {
                      handleSubmit();
                      form.reset();
                    }}
                    >
                      <Image source={require('../../images/message.png')} />
                    </TouchableOpacity>
                    <TextInput
                      {...input}
                      type="text"
                      placeholder="Add a comment..."
                      placeholderStyle={{ fontSize: 17 }}
                      style={styles.commentFormInput}
                    />
                  </View>
                  {meta.error && meta.touched && <Text>{meta.error}</Text>}
                </View>
              )}
            </Field>
          </View>
        )}
      />
    </View>
  );
};

TasksScreen.propTypes = {
  addComment: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

export default TasksScreen;
