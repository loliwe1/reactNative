import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  taskWrap: {
    width: 345,
    height: 66,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    borderStyle: 'solid',

  },
  taskCheckBox: {
    backgroundColor: '#fff',
    color: '#514D47',
    width: 24,
    height: 24,
  },
  taskLine: {
    borderLeftWidth: 3,
    borderLeftColor: '#AC5253',
    borderStyle: 'solid',
    height: 24,
    width: 24,
  },
  taskText: {
    width: 184,
    marginLeft: 15,
    fontSize: 17,
    color: '#514D47',
  },

  isChecked: {
    width: 184,
    marginLeft: 15,
    fontSize: 17,
    color: '#514D47',
    textDecorationLine: 'line-through',
  },

  prayers: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginRight: 20,
  },

  prayersText: {
    paddingLeft: 5,
    color: '#514D47',
    fontSize: 12,

  },
  deleteTask: {
    width: 80,
    height: 66,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AC5253',
  },

  deleteTaskText: {
    fontSize: 13,
    lineHeight: 15,
    color: '#fff',
  },


});

export default styles;
