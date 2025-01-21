import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RootNavigation from './src/navigation/RootNavigation';
import Splash from './src/screens/Splash';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import EmpHome from './src/screens/employee/othersScreen/EmpHome';
import CommonLayout from './src/layout/CommonLayout';
import Camera from './src/screens/Camera';
import ProfileEntity from './src/components/ProfileEntity';
import Questions from './src/components/Questions';
import HeaderHome from './src/components/HeaderHome';
import Header from './src/components/Header';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
import TestCodes from './src/screens/TestCodes';

let persistor =persistStore(store)
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
    <SafeAreaProvider style={{flex: 1}}>
      <RootNavigation />
    </SafeAreaProvider>
    </PersistGate>
    </Provider>
  );
};

export default App;