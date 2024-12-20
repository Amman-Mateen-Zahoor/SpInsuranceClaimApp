import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Splash from '../Screens/Splash';
import GetStarted from '../Screens/GetStarted';
import RegisterOption from '../Screens/RegisterOption';
import ForgetPassword from '../Screens/ForgetPassword';
import Login from '../Screens/Login';
import OrgSignup from '../Screens/OrgSignup';
import SetNewPassword from '../Screens/SetNewPassword';
import OtpVerification from '../Screens/OtpVerification';
import TestCodes from '../Screens/TestCodes';
import UpdatedPasswordPopUp from '../modals/UpdatedPasswordPopUp';

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