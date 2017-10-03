import * as user from '../services/user';

export default {
  namespace: 'user',
  state: {
    account: null,
    token: null,
    name: null,
  },
  reducers: {
    login(state, action) {
      return {
        ...state,
        ...action.data,
      };
    }
  },
  effects: {
    *POST_login(action, { call, put }) {
      const { data } = yield call(user.POST_login);
      yield put({ type: 'login', data });
    },
  },
}
