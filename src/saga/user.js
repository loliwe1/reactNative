import { call, put } from 'redux-saga/effects';
import AsyncStorageService from '../services/ApiAsyncStorage';
import ApiService from '../services/Api';
import { logInTrigger, signUpTrigger, persisSignIn } from '../store/routines/routines';


export function* handleSignUpTrigger(action) {
  yield put(signUpTrigger.request());
  try {
    const response = yield call(ApiService.signUp, action);
    const user = response.data;
    yield put(signUpTrigger.success(user));
  } catch (e) {
    yield put(signUpTrigger.failure(e.message));
  }

  yield put(signUpTrigger.fulfill());
}

export function* handleLogInTrigger(action) {
  try {
    const response = yield call(ApiService.logIn, action);
    yield call(AsyncStorageService.saveToken, response);
    const user = response.data;
    yield put(logInTrigger.success(user));
  } catch (e) {
    yield put(logInTrigger.failure(e.message));
  }
}

export function* handlePersisSignInTrigger(action) {
  const { navigation } = action.payload;
  try {
    console.log(1);
    const token = yield call(AsyncStorageService.getToken);
    console.log(token);
    if (!token) throw new Error('No token found.');
    const users = yield call(AsyncStorageService.getUser);
    const response = yield call(ApiService.persisSignIn, token);
    const activeUser = users.find((user) => user.token === token);
    if (response) {
      navigation.navigate('My Desc');
    }
    yield put(logInTrigger.success(activeUser));
  } catch (e) {
    // navigation.navigate('LogIn');
    yield put(persisSignIn.failure(e));
  }
}
