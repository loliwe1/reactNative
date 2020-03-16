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
    width: 250,
  },

  columnScreenImg: {
    marginRight: 14,
    marginLeft: 14,
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

  invalidPrayer: {
    color: 'red',
    textAlign: 'center',
    margin: 0,
    fontSize: 18,
  },

  addColumnWrap: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingTop: 100,
    backgroundColor: '#fff',
  },
  addColumnInput: {
    width: 360,
    height: 60,
    borderColor: '#E5E5E5',
    borderStyle: 'solid',
    borderRadius: 5,
    borderWidth: 1,
    fontSize: 17,
    paddingLeft: 10,
    color: '#514D47',
  },

  addColumnButtonWrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    height: 60,
  },
  addColumnButton: {
    backgroundColor: '#BFB393',
    width: 309,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  addColumnButtonTitle: {
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 17,
  },
  settingWrap: {
    height: '100%',
    backgroundColor: '#fff',
  },

  settingInput: {
    fontSize: 17,
    lineHeight: 20,
    color: '#514D47',
    width: 300,
  },

  settingInputWrap: {
    marginTop: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 375,
    height: 50,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    paddingLeft: 10,
  },

  buttonWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  settingButton: {
    marginRight: 10,
    backgroundColor: '#BFB393',
    width: 170,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

  settingButtonText: {
    fontSize: 20,
    color: '#fff',
  },

});

export default styles;
