import { getComments, addComment } from '../routines/routines';

const initialState = [];

const comments = (state = initialState, action) => {
  switch (action.type) {
    case getComments.SUCCESS: return action.payload;
    case getComments.FAILURE: return action.payload;
    case addComment.SUCCESS: return [{ ...action.payload }, ...state];
    case addComment.FAILURE: return action.payload;
    default: return state;
  }
};

export default comments;
