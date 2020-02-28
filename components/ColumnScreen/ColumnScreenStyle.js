import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingBottom: 100,
  },

  columnScreenInputWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 345,
    height: 50,
    marginTop: 16,
    marginBottom: 21,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E5E5E5',
    borderRadius: 10,
  },

  columnScreenInput: {
    fontSize: 17,
    width: 300,
  },

  columnScreenList: {
    display: 'flex',
    flex: 2,
    flexWrap: 'nowrap',
    marginBottom: 21,
  },

  columnScreenTouch: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 209,
    height: 30,
    backgroundColor: '#BFB393',
    borderRadius: 15,
  },

  columnScreenTouchText: {
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: 12,
  },

});

export default styles;
