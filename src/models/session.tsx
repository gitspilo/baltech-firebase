import { createModel } from '@rematch/core';
import { RootModel } from './';

export const session = createModel<RootModel>()({
  state: {
    error: null,
    auth: null,
    user: null,
  } as SessionState,
  reducers: {
    setError(state, error: string | null) {
      return { ...state, error };
    },
    setAuth(state, auth: string | null) {
      return { ...state, auth };
    },
    setUser(state, user: User | null) {
      return { ...state, user };
    },  
  },
  effects: (dispatch) => ({
    async authenticate() {
      try {
        dispatch.session.setError(null);
      } catch (e) {
      }
    },
    async register() {
      try {
        dispatch.session.setError(null);
      } catch (e) {
      }
    },
    async logout() {
      try {
        dispatch.session.setAuth(null);
        dispatch.session.setUser(null);
        dispatch.session.setError(null);
      } catch (e) {
      }
    },
  }),
});

export type SessionState = {
  error: string | null,
  user: User | null,
  auth: string | null,
};

export type User = {
  prefix: string,
  first_name: string,
  last_name: string,
  email: string,
  password: string,
  role: number,
  phone: string,
};
