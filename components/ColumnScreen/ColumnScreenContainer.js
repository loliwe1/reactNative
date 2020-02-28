import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ColumnScreen from './ColumnScreen';
import {addTask} from '../../store/actions/actions';

class ColumnScreenContainer extends React.Component {

  setRef = (element) => {
    this.inputText = element
  }
  addTask = () => {
      console.log(this.props);
      console.log(this.inputText)
      if(!this.inputText._lastNativeText) return
      const value = this.inputText._lastNativeText
      const {addTask, id, columnId} = this.props
    
      addTask(id, columnId, value, 'vasya')
      this.inputText._lastNativeText = ''
  }
  
  render() {
    return (
      <ColumnScreen setRef={this.setRef} addTask = {this.addTask}/>
    );
  }
}

const mapStateToProps = (state) => ({
    id: state.app.nextTaskId,
    columnId: state.app.nextColumnId,
    tasks: state.task
})

const mapDispatchToProps =(dispatch) => bindActionCreators({
    addTask,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ColumnScreenContainer);
