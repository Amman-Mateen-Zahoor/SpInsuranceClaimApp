import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RootNavigation from './src/navigation/RootNavigation';
import Splash from './src/screens/Splash';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import EmpHome from './src/screens/employee/othersScreen/EmpHome';
import CommonLayout from './src/layout/CommonLayout';
import Camera from './src/screens/Camera';
import ProfileEntity from './src/components/ProfileEntity';

const App = () => {
  return (
    <SafeAreaProvider style={{flex: 1}}>
      <RootNavigation />

    </SafeAreaProvider>
  );
};

export default App;