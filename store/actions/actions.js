export const ADD_COLUMN = 'ADD_COLUMN';
export const OPEN_COLUMN_FORM = 'OPEN_TASK_FORM';
export const ADD_TASK = 'ADD_TASK';

export const addColumn = (title) => {
  return {
    type: 'ADD_COLUMN',
    title,
  };
};

export const openTaskForm = () => {
  return {
    type: 'OPEN_TASK_FORM',
  };
};

export const addTask = (id, columnId, title, creator) => {
  return {
    type: 'ADD_TASK',
    id,
    columnId,
    title,
    creator,
  };
};
