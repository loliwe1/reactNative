import { createRoutine, promisifyRoutine } from 'redux-saga-routines';

export const getColumns = createRoutine('GET_COLUMNS');
export const getColumnsPromiseCreator = promisifyRoutine(getColumns);
export const addColumn = createRoutine('ADD_COLUMN');
export const deleteColumn = createRoutine('DELETE_COLUMN');
export const changeColumnTitle = createRoutine('CHANGE_COLUMN');
export const getTasks = createRoutine('GET_TASKS');
export const addTask = createRoutine('ADD_TASK');
export const deleteTask = createRoutine('DELETE_TASK');
export const checkTask = createRoutine('CHECK_TASK');
export const getComments = createRoutine('GET_COMMENTS');
export const addComment = createRoutine('ADD_COMMENT');
export const logInTrigger = createRoutine('LOGIN_TRIGGER');
export const signUpTrigger = createRoutine('SIGN_UP_TRIGGER');
export const signUpTriggerPromiseCreator = promisifyRoutine(signUpTrigger);
export const persisSignIn = createRoutine('PERSIS_SIGN_IN');
export const persisSignInPromiseCreator = promisifyRoutine(persisSignIn);
