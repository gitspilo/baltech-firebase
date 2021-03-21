import { createModel } from '@rematch/core';
import firebase from 'firebase';
import { RootModel } from './';

export const abcd = createModel<RootModel>()({
  state: {
    all: [],
  } as AbcdState,
  reducers: {
    setAbcd(state, all: Abcd[]) {
      return { ...state, all };
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
  all: Abcd[],
};

export type Abcd = {
  capital: string,
  small: string,
  imageURL: string,
  label: string,
};