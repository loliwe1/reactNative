import { logInTrigger, signUpTrigger } from '../routines/routines';

const initialState = {};

const user = (state = initialState, action) => {
  switch (action.type) {
    case logInTrigger.SUCCESS: return action.payload;
    case logInTrigger.FAILURE: return action.payload;
    case signUpTrigger.SUCCESS: return action.payload;
    case signUpTrigger.FAILURE: return action.payload;
    default: return state;
  }
};

export default user;
