import React from 'react';
import RootNavigation from './src/navigation/RootNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
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