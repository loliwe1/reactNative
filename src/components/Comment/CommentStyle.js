import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  commentWrap: {
    display: 'flex',
    flexDirection: 'row',
    height: 74,
    width: 375,
    paddingLeft: 12,
    paddingTop: 14,
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
  },

  commentImg: {
    borderRadius: 50,
    width: 46,
    height: 46,
    marginRight: 9,
  },

  commentName: {
    fontSize: 17,
    lineHeight: 20,
    color: '#514D47',
    fontWeight: 'bold',
  },

  commentDate: {
    fontSize: 13,
    lineHeight: 16,
    color: '#9C9C9C',
    marginTop: 2,
  },

  commentText: {
    fontSize: 17,
    lineHeight: 20,
    color: '#514D47',
  },


});

export default styles;
