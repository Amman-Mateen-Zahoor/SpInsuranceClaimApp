import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import LoginEmployee from '../screens/employee/authScreens/LoginEmployee'
import OrgSignup from '../screens/employee/authScreens/OrgSignupEmployee'
import ForgetPasswordEmployee from '../screens/employee/authScreens/ForgetPasswordEmployee'
import SetNewPasswordEmployee from '../screens/employee/authScreens/SetNewPasswordEmployee'
import OtpVerificationEmployee from '../screens/employee/authScreens/OtpVerificationEmployee'

const Stack = createNativeStackNavigator()
const EmployeeAuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name='LoginEmployee' component={LoginEmployee}/>
        <Stack.Screen name='OrgSignupEmployee' component={OrgSignup}/>
        <Stack.Screen name='ForgetPasswordEmployee' component={ForgetPasswordEmployee}/>
        <Stack.Screen name='OtpVerificationEmployee' component={OtpVerificationEmployee}/>
        <Stack.Screen name='SetNewPasswordEmployee' component={SetNewPasswordEmployee}/>

    </Stack.Navigator>
)
}

export default EmployeeAuthStack

const styles = StyleSheet.create({})