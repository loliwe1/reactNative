import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import ColumnScreen from './ColumnScreen';
import { getTasks, addTask } from '../../store/routines/routines';

class ColumnScreenContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  componentDidMount() {
    const { getTasks } = this.props;
    getTasks();
  }

  addTask = ({ prayer }) => {
    const { addTask, columns, route } = this.props;
    const { columnId } = route.params;
    const column = columns.find((c) => c.id === columnId);
    const title = prayer;
    const description = '';
    const checked = false;
    addTask({
      title,
      description,
      checked,
      column,
    });
  }

  showAnswered = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  }

  render() {
    const { show } = this.state;
    const { navigation, route, tasks } = this.props;
    const { columnId } = route.params;
    const task = tasks.filter((t) => t.columnId === columnId);
    const tasksAnswered = task.filter((t) => t.checked === true);
    const tasksNotAnswered = task.filter((t) => t.checked === false);
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
});

const mapDispatchToProps =(dispatch) => bindActionCreators({
  addTask,
  getTasks,
}, dispatch);

ColumnScreenContainer.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  tasks: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  columns: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  addTask: PropTypes.func.isRequired,
  getTasks: PropTypes.func.isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      columnId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  }),
};

ColumnScreenContainer.defaultProps = {
  route: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(ColumnScreenContainer);
