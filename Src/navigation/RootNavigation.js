import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Splash from '../screens/Splash';
import GetStarted from '../screens/GetStarted';
import RegisterOption from '../screens/RegisterOption';
import LoginCompany from '../screens/company/authScreens/LoginCompany';
import LoginEmployee from '../screens/employee/authScreens/LoginEmployee';
import ForgetPassword from '../screens/common/ForgetPassword';
import OrgSignupEmployee from '../screens/employee/authScreens/OrgSignupEmployee';
import OrgSignupCompany from "../screens/company/authScreens/OrgSignupCompany"
import OtpVerification from '../screens/common/OtpVerification';
import SetNewPassword from '../screens/common/SetNewPassword';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
   <Stack.Navigator screenOptions={{headerShown:false}}>
<Stack.Screen name='splash' component={Splash}/>
<Stack.Screen name='getStarted' component={GetStarted}/>
<Stack.Screen name='registration' component={RegisterOption}/>
<Stack.Screen name='loginCompany' component={LoginCompany}/>
<Stack.Screen name='loginEmployee' component={LoginEmployee}/>
<Stack.Screen name='forgetPassword' component={ForgetPassword}/>
<Stack.Screen name='orgSignupEmployee' component={OrgSignupEmployee}/>
<Stack.Screen name='orgSignupCompany' component={OrgSignupCompany}/>
<Stack.Screen name='otpVerification' component={OtpVerification}/>
<Stack.Screen name='newPassword' component={SetNewPassword}/>
   </Stack.Navigator>
   </NavigationContainer>
  )
}

export default RootNavigation

const styles = StyleSheet.create({})