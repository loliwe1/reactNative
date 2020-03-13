import { combineReducers } from 'redux';
import column from './column';
import task from './tasks';
import user from './user';
import comments from './comments';
import app from './app';

const todoApp = combineReducers({
  column,
  task,
  user,
  comments,
  app,
});
export default todoApp;
