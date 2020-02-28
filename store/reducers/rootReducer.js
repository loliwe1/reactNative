import { combineReducers } from 'redux';
import column from './column';
import app from './app';
import task from './tasks';

const todoApp = combineReducers({
  column,
  app,
  task,
});
export default todoApp;
