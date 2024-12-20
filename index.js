/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import CustomButton from './Src/Components/CustomButton';
import SignUp from './Src/Screens/TestCodes';
import CustomTextInput from './Src/Components/CustomTextInput';
import OrgSignup from './Src/Screens/OrgSignup';
import DropdownWithIcons from './Src/Components/DropdownWithIcons';
import TestCodes from './Src/Screens/TestCodes';
import ParentTestCodes from './Src/Screens/ParentTestCodes';
import Login from './Src/Screens/Login';
import ForgetPassword from './Src/Screens/ForgetPassword';
import OtpVerification from './Src/Screens/OtpVerification';



AppRegistry.registerComponent(appName, () =>App);
