import { createModel } from '@rematch/core';
import firebase from 'firebase';
import { RootModel } from './';

export const abcd = createModel<RootModel>()({
  state: {
    abcd: [],
  } as AbcdState,
  reducers: {
    setAbcd(state, abcd: Abcd[]) {
      return { ...state, abcd };
    },
  },
  effects: (dispatch) => ({
    async loadAbcd() {
      try {
        const db = firebase.firestore();
        const snapshot = await db.collection('abcd').get();
        const data = snapshot.docs.map(doc => doc.data() as Abcd);

        dispatch.abcd.setAbcd(data);
      } catch (e) {
        dispatch.alerts.raiseError({
          domain: 'abcd',
          message: e.message,
        });
      }
    },
  }),
});

export type AbcdState = {
  abcd: Abcd[],
};

export type Abcd = {
  capital: string,
  small: string,
};