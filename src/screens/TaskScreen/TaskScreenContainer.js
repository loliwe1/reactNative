import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import TaskScreen from './TaskScreen';
import {addComment, getComments} from '../../store/routines/routines';

class TaskScreenContainer extends React.Component {
  componentDidMount() {
    const {getComments} = this.props;
    getComments();
  }

  addComment = ({comment}) => {
      const {cardId} = this.props.route.params;
      const {addComment, id, creator } = this.props;
      const date = new Date().toISOString()
      addComment({comment, id, cardId, creator, date});
  }

  render() {
    const {cardId} = this.props.route.params;
    const comments = this.props.comments.filter((comment) => comment.cardId === cardId);
    return (
      <TaskScreen addComment={this.addComment} comments={comments} />
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
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      cardId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskScreenContainer);
