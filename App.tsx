import React from 'react';
import 'react-native-gesture-handler';
import { Provider as ReduxProvider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { theme, GalioProvider } from 'galio-framework';
import { PersistGate } from 'redux-persist/es/integration/react';
import Root from './src/components/Root';
import { store } from './store';

const persistor = persistStore(store);

export default function App() {
  return (
    <GalioProvider theme={theme}>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Root />
        </PersistGate>
      </ReduxProvider>
    </GalioProvider>
  )
};9