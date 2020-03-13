import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './CommentStyle';

const Comment = ({ comment, creator }) => (
  <View style={styles.commentWrap}>
    <View>
      <Image style={styles.commentImg} source={require('../../images/comment3.png')} />
    </View>
    <View style={styles.commentNameWrap}>
      <Text style={styles.commentName}>
        {creator}
      </Text>
      <Text style={styles.commentText}>
        {comment}
      </Text>
    </View>
    <Text style={styles.commentDate}> 2 days ago </Text>
  </View>
);

Comment.propTypes = {
  comment: PropTypes.string.isRequired,
  creator: PropTypes.string.isRequired,
};

export default Comment;
