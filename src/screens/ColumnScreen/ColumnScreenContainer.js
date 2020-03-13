import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import ColumnScreen from './ColumnScreen';
import {getTasks , addTask} from '../../store/routines/routines'

class ColumnScreenContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: true}
  }

  componentDidMount() {
    const { getTasks } = this.props;
    getTasks();
  }

  addTask = ({prayer}) => {
      const {columnId} = this.props.route.params;
      const {addTask, columns} = this.props
      const column = columns.find((column) => column.id === columnId)
      const title = prayer
      const description = ''
      const checked = false
      addTask({title, description, checked, column})
  }

  showAnswered = () => {
    this.setState({show: !this.state.show})
  }
  
  render() {
    const {show} = this.state;
    const {columnId} = this.props.route.params;
    const {navigation} = this.props;
    const tasks = this.props.tasks.filter((task) => task.columnId === columnId)
    const tasksAnswered = tasks.filter(task => task.checked === true)
    const tasksNotAnswered = tasks.filter(task => task.checked === false) 
    return (
      <ColumnScreen 
        addTask={this.addTask}
        tasksNotAnswered={tasksNotAnswered}
        tasksAnswered={tasksAnswered}
        navigation={navigation}
        show={show}
        showAnswered={this.showAnswered}
        
        />
    );
  }
}

const mapStateToProps = (state) => ({
    tasks: state.task,
    columns: state.column,
})

const mapDispatchToProps =(dispatch) => bindActionCreators({
    addTask,
    getTasks,
}, dispatch)

ColumnScreenContainer.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  tasks: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  addTask: PropTypes.func.isRequired,
  getTasks: PropTypes.func.isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      columnId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  }),
  
};

export default connect(mapStateToProps, mapDispatchToProps)(ColumnScreenContainer);
