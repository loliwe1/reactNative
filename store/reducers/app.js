import { OPEN_COLUMN_FORM, ADD_TASK } from '../actions/actions';


const initialState = {
  openTaskForm: false,
  nextColumnId: 5,
  nextTaskId: 1,
};

function app(state = initialState, action) {
  switch (action.type) {
    case OPEN_COLUMN_FORM: return {
      ...state,
      openTaskForm: !state.openTaskForm,
    };
    case ADD_TASK: return {
      ...state,
      nextTaskId: state.nextTaskId + 1,
    };
    default:
      return state;
  }
}

export default app;
