import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Task from './Task';
import styles from './style';
import { deleteTask, checkTask } from '../../store/routines/routines';

class TaskContainer extends React.Component {
  openTask = () => {
    const { navigation, id, title } = this.props;
    navigation.navigate('TaskScreen', {
      cardId: id,
      title,
    });
  }

  renderTitle = () => {
    const { title } = this.props;
    if (title.length < 18) return title;
    return `${title.slice(0, 16)}...`;
  }

  deleteTask = () => {
    const { deleteTask, id } = this.props;
    deleteTask(id);
  }

  rightActions = () => (
    <TouchableOpacity style={styles.deleteTask} onPress={this.deleteTask}>
      <Text style={styles.deleteTaskText}>
        Delete
      </Text>
    </TouchableOpacity>
  );

  checkTask = () => {
    const {
      checkTask,
      id,
      tasks,
      columns,
    } = this.props;
    const task = tasks.find((t) => t.id === id);

    const {
      title,
      description,
      columnId,
    } = task;
    let { checked } = task;
    const column = columns.find((col) => col.id === columnId);
    checked = !checked;

    checkTask({
      id,
      title,
      description,
      checked,
      column,
    });
  }

  render() {
    const { answered } = this.props;
    return (
      <Task
        openTask={this.openTask}
        isChecked={answered}
        title={this.renderTitle()}
        rightActions={this.rightActions}
        onCheck={this.checkTask}
      />
    );
  }
}

TaskContainer.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  deleteTask: PropTypes.func.isRequired,
  answered: PropTypes.bool.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  columns: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  checkTask: PropTypes.func.isRequired,

};

const mapStateToProps = (state) => ({
  tasks: state.task,
  columns: state.column,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  deleteTask,
  checkTask,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer);
