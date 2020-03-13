import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Desc: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    fontSize: 17,
    paddingTop: 5,
  },
  DescTitleWrap: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: 64,
    width: '100%',
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  DescTitle: {
    color: '#514D47',
  },
  DescTitleButton: {
    color: '#514D47',
  },
  TaskCreator: {
    marginTop: 15,
    width: 345,
    height: 59,
    maxHeight: '100%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E5E5E5',
    borderRadius: 4,
    fontSize: 17,
  },

});

export default styles;
