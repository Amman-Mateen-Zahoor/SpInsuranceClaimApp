import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Splash from '../screens/Splash';
import GetStarted from '../screens/GetStarted';
import RegisterOption from '../screens/RegisterOption';
import ForgetPassword from '../screens/employee/authScreens/ForgetPassword';
import Login from '../screens/employee/authScreens/Login';
import SetNewPassword from '../screens/employee/authScreens/SetNewPassword';
import TestCodes from '../screens/TestCodes';
import UpdatedPasswordPopUp from '../modals/UpdatedPasswordPopUp';
import OtpVerification from '../screens/employee/authScreens/OtpVerification';
import OrgSignup from '../screens/employee/authScreens/OrgSignup';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
   <Stack.Navigator screenOptions={{headerShown:false}}>
<Stack.Screen name='splash' component={Splash}/>
<Stack.Screen name='login' component={Login}/>
<Stack.Screen name='signup' component={OrgSignup}/>
<Stack.Screen name='getStarted' component={GetStarted}/>
<Stack.Screen name='RegisterOption' component={RegisterOption}/>
<Stack.Screen name='forgetPassword' component={ForgetPassword}/>
<Stack.Screen name='newPassword' component={SetNewPassword}/>
<Stack.Screen name='otpVerification' component={OtpVerification}/>
<Stack.Screen name='test' component={TestCodes}/>
<Stack.Screen name='passwordPopUp' component={UpdatedPasswordPopUp}/>
   </Stack.Navigator>
   </NavigationContainer>
  )
}

export default RootNavigation

const styles = StyleSheet.create({})