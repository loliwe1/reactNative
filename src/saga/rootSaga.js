import { takeEvery } from 'redux-saga/effects';
import { handleSignUpTrigger, handleLogInTrigger, handlePersisSignInTrigger } from './user';
import {
  handleGetColumnsTrigger,
  handleAddColumnsTrigger,
  handleDeleteColumnsTrigger,
  handleChangeColumnTitleTrigger,
} from './columns';
import {
  handleGetTasksTrigger,
  handleAddTasksTrigger,
  handleDeleteTasksTrigger,
  handleChangeTaskTrigger,
} from './cards';
import { handleGetCommentsTrigger, handleAddCommentsTrigger } from './comments';
import {
  getColumns,
  addColumn,
  deleteColumn,
  changeColumnTitle,
  getTasks,
  addTask,
  deleteTask,
  checkTask,
  getComments,
  addComment,
  logInTrigger,
  signUpTrigger,
  persisSignIn,
} from '../store/routines/routines';

export default function* rootSaga() {
  yield takeEvery(signUpTrigger, handleSignUpTrigger);
  yield takeEvery(logInTrigger, handleLogInTrigger);
  yield takeEvery(persisSignIn, handlePersisSignInTrigger);
  yield takeEvery(getTasks, handleGetTasksTrigger);
  yield takeEvery(addTask, handleAddTasksTrigger);
  yield takeEvery(deleteTask, handleDeleteTasksTrigger);
  yield takeEvery(getComments, handleGetCommentsTrigger);
  yield takeEvery(addComment, handleAddCommentsTrigger);
  yield takeEvery(checkTask, handleChangeTaskTrigger);
  yield takeEvery(getColumns, handleGetColumnsTrigger);
  yield takeEvery(addColumn, handleAddColumnsTrigger);
  yield takeEvery(deleteColumn, handleDeleteColumnsTrigger);
  yield takeEvery(changeColumnTitle, handleChangeColumnTitleTrigger);
}
