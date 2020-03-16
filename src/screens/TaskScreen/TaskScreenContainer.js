import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import TaskScreen from './TaskScreen';
import { addComment, getComments } from '../../store/routines/routines';

class TaskScreenContainer extends React.Component {
  componentDidMount() {
    const { getComments } = this.props;
    getComments();
  }

  addComment = ({ comment }) => {
    const {
      addComment,
      id,
      creator,
      route,
    } = this.props;
    const { cardId } = route.params;
    const date = new Date().toISOString();
    addComment({
      comment,
      id,
      cardId,
      creator,
      date,
    });
  }

  render() {
    const { route, comments } = this.props;
    const { cardId } = route.params;
    const comment = comments.filter((c) => c.cardId === cardId);
    return (
      <TaskScreen addComment={this.addComment} comments={comment} />
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.app.nextCommentId,
  comments: state.comments,
  creator: state.user.email,

});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addComment,
  getComments,
}, dispatch);

TaskScreenContainer.propTypes = {
  id: PropTypes.number.isRequired,
  creator: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  addComment: PropTypes.func.isRequired,
  getComments: PropTypes.func.isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      cardId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  }),
};

TaskScreenContainer.defaultProps = {
  route: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskScreenContainer);
