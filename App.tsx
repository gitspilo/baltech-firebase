import React from 'react';
import 'react-native-gesture-handler';
import { Provider as ReduxProvider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { theme, GalioProvider } from 'galio-framework';
import firebase from 'firebase';
import 'firebase/firestore';
import { PersistGate } from 'redux-persist/es/integration/react';
import Root from './src/components/Root';
import { store } from './store';

const persistor = persistStore(store);
const firebaseConfig = {
  apiKey: "AIzaSyAKm-fHlKnP_bklf_JUIam-PHCwKEEyOII",
  authDomain: "baltech-8ff80.firebaseapp.com",
  projectId: "baltech-8ff80",
  storageBucket: "baltech-8ff80.appspot.com",
  messagingSenderId: "891884322049",
  appId: "1:891884322049:web:4d9d31111bb7adc264ef00",
  measurementId: "G-7YJF6MSD61"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
};

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
};