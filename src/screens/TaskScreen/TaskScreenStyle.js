import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  taskWrap: {
    backgroundColor: '#FFF',
    height: '100%',
  },

  lastPrayedWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingTop: 14,
    paddingBottom: 15,
    paddingLeft: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },

  lastPrayed: {
    fontSize: 17,
    lineHeight: 20,
    color: '#514D47',

  },

  lastPrayedBorder: {
    width: 24,
    height: 24,
    borderStyle: 'solid',
    borderLeftColor: '#AC5253',
    borderLeftWidth: 3,
  },

  detailItemWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 375,
    height: 108,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },

  detailItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    minWidth: 187,
    borderRightColor: '#E5E5E5',
    borderRightWidth: 1,
    paddingLeft: 15,

  },

  detailItemBorder: {
    borderRightWidth: 1,
    borderRightColor: '#E5E5E5',
  },

  detailItemTitleDate: {
    fontSize: 22,
    color: '#BFB393',
    lineHeight: 26,
  },
  detailItemTitle: {
    fontSize: 32,
    color: '#BFB393',
    lineHeight: 37,
  },

  detailItemSubTitle:{
    fontSize: 13,
    lineHeight: 15,
    color: '#514D47',
  },

  detailItemButton: {
    fontSize: 13,
    lineHeight: 15,
    color: '#72A8BC',
  },

  members: {
    height: 144,
    width: 375,
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
    paddingLeft: 15,
    paddingTop: 20,
  },

  membersButton: {
    fontSize: 13,
    lineHeight: 15,
    color: '#72A8BC',
    textTransform: 'uppercase',
  },

  membersList: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 28,
    marginTop: 15,
  },

  membersListItem: {
    marginRight: 5,
  },
  addMember: {
    display: 'flex',
    width: 32,
    height: 32,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BFB393',
    marginLeft: 2,
  },

  commentsList: {
    maxHeight: 222,
    height: '100%',
  },

  commentForm: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 375,
    height: 56,
    marginLeft: 16,
    marginBottom: 19,
  },
  commentFormInput: {
    fontSize: 17,
    lineHeight: 20,
    color: '#9C9C9C',
    marginLeft: 12,
    width: '100%',
  },


});

export default styles;
