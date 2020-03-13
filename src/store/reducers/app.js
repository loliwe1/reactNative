import { addComment } from '../routines/routines';


const initialState = {
  nextCommentId: 1,
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case addComment.SUCCESS: return { ...state, nextCommentId: state.nextCommentId + 1 };
    default: return state;
  }
};

export default app;
