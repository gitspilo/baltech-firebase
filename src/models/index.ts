import { Models } from '@rematch/core';
import { session } from './session';
import { abcd } from './abcd';
import { alerts } from './alerts';

export interface RootModel extends Models<RootModel> {
  alerts: typeof alerts,
  session: typeof session,
  abcd: typeof abcd,
};

export const models: RootModel = { session, abcd, alerts };