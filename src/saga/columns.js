import {
  call,
  put,
} from 'redux-saga/effects';
import ApiService from '../services/Api';

import {
  getColumns,
  addColumn,
  deleteColumn,
  changeColumnTitle,
} from '../store/routines/routines';

export function* handleGetColumnsTrigger() {
  try {
    yield put(getColumns.request());
    const response = yield call(ApiService.getColumns);
    const columns = response.data;
    yield put(getColumns.success(columns));
  } catch (e) {
    yield put(getColumns.failure(e.message));
    yield put(getColumns.fulfill());
  }
}

export function* handleAddColumnsTrigger(action) {
  const data = action.payload;
  try {
    const response = yield call(ApiService.addColumn, data);
    const column = response.data;
    yield put(addColumn.success(column));
  } catch (e) {
    yield put(addColumn.failure(e.message));
  }
}

export function* handleDeleteColumnsTrigger(action) {
  const { columnId } = action.payload;
  try {
    yield call(ApiService.deleteColumn, columnId);
    yield put(deleteColumn.success(columnId));
  } catch (e) {
    yield put(deleteColumn.failure(e.message));
  }
}

export function* handleChangeColumnTitleTrigger(action) {

  const { payload } = action;
  const { title, columnId } = payload;

  try {
    yield call(ApiService.changeTitleColumn, payload);
    yield put(changeColumnTitle.success({title, columnId}));
  } catch (e) {
    yield put(changeColumnTitle.failure(e.message));
  }
}
