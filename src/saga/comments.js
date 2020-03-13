import { call, put } from 'redux-saga/effects';
import AsyncStorageService from '../services/ApiAsyncStorage';
import { getComments, addComment } from '../store/routines/routines';

export function* handleGetCommentsTrigger() {
  try {
    const comments = yield call(AsyncStorageService.getComments);
    yield put(getComments.success(comments));
  } catch (e) {
    yield put(getComments.failure(e.message));
  }
}

export function* handleAddCommentsTrigger(comment) {
  try {
    yield call(AsyncStorageService.addComments, comment);
    yield put(addComment.success(comment.payload));
  } catch (e) {
    yield put(addComment.failure(e.message));
  }
}
