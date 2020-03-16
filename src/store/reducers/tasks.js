import {
  getTasks,
  addTask,
  deleteTask,
  checkTask,
} from '../routines/routines';

const initialState = [];


const task = (state = initialState, action) => {
  switch (action.type) {
    case getTasks.SUCCESS: return action.payload;
    case getTasks.FAILURE: return action.payload;
    case addTask.SUCCESS: return [{ ...action.payload }, ...state];
    case addTask.FAILURE: return action.payload;
    case deleteTask.SUCCESS: return [...state.filter((task) => task.id !== action.payload)];
    case deleteTask.FAILURE: return action.payload;
    case checkTask.SUCCESS: return state.map((task) => (task.id === action.payload.id
      ? { ...task, checked: !task.checked }
      : task));
    case checkTask.FAILURE: return action.payload;
    default: return state;
  }
};

export default task;
