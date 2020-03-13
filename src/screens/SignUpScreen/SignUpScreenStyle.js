import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  formWrap: {
    height: '100%',
    backgroundColor: '#fff',
  },

  formItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 375,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    paddingLeft: 10,
  },
  formItemInput: {
    fontSize: 17,
    lineHeight: 20,
    color: '#514D47',
    width: 300,
  },

  button: {
    backgroundColor: '#BFB393',
    width: 209,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 20,

  },
  buttonWrap:{
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default styles;
