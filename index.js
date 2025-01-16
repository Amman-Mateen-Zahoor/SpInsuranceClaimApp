/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import LoginCompany from './src/screens/company/authScreens/LoginCompany';
import Splash from './src/screens/Splash';
import TestCodes from './src/screens/TestCodes';
import EmpHome from './src/screens/employee/othersScreen/EmpHome';
import CommonLayout from './src/layout/CommonLayout';
import Camera from './src/screens/Camera';
import ParentTestCodes from './src/screens/ParentTestCodes';




AppRegistry.registerComponent(appName, () =>App);
