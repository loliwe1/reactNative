import { ADD_TASK } from '../actions/actions';

const initialState = [];

const task = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      return [...state, {
        id: action.id,
        title: action.title,
        columnId: action.columnId,
        creator: action.creator,
        date: new Date(),
        timePried: 0,
        members: 0,
      }];
    }
    default:
      return state;
  }
};

export default task;
