import { call, put } from 'redux-saga/effects';
import ApiService from '../services/Api';
import {
  getTasks,
  addTask,
  deleteTask,
  checkTask,
} from '../store/routines/routines';

export function* handleGetTasksTrigger() {
  try {
    const response = yield call(ApiService.getTasks);
    const tasks = response.data;
    yield put(getTasks.success(tasks));
  } catch (e) {
    yield put(getTasks.failure(e.message));
  }
}

export function* handleAddTasksTrigger(action) {
  const data = action.payload;
  try {
    const response = yield call(ApiService.addTasks, data);
    const task = response.data;
    yield put(addTask.success(task));
  } catch (e) {
    yield put(addTask.failure(e.message));
  }
}

export function* handleDeleteTasksTrigger(action) {
  const { payload } = action;
  try {
    yield call(ApiService.deleteTask, payload);
    yield put(deleteTask.success(payload));
  } catch (e) {
    yield put(deleteTask.failure(e.message));
  }
}

export function* handleChangeTaskTrigger(action) {
  const { payload } = action;
  const { id, checked } = payload;
  try {
    yield call(ApiService.changeTask, payload);
    yield put(checkTask.success({ id, checked }));
  } catch (e) {
    yield put(checkTask.failure(e.message));
  }
}
