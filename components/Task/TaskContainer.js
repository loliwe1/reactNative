import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Task from './Task';

class TaskContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isChecked: false };
  }
  onClick = () => {
      this.setState({isChecked: !this.state.isChecked})
  }

  renderTitle = () => {
    const {title} = this.props;
    if(title.length < 18) return title;
    return `${title.slice(0,16)}...`
  }

  render() {
    const { isChecked } = this.state;
    return <Task onClick={this.onClick} isChecked={isChecked} title={this.renderTitle()} />;
  }
}

export default connect()(TaskContainer);
