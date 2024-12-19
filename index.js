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
import CustomTextInputDropDown from './Src/Components/CustomTextInputDropDown';
import DropdownWithIcons from './Src/Components/DropdownWithIcons';
import TestCodes from './Src/Screens/TestCodes';



AppRegistry.registerComponent(appName, () =>OrgSignup);
