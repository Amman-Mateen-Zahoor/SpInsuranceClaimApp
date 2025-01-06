import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import LoginCompany from '../screens/company/authScreens/LoginCompany'
import OrgSignup from '../screens/company/authScreens/OrgSignupCompany'
import ForgetPasswordCompany from '../screens/company/authScreens/ForgetPasswordCompany'
import OtpVerificationCompany from '../screens/company/authScreens/OtpVerificationCompany'
import SetNewPasswordCompany from '../screens/company/authScreens/SetNewPasswordCompany'

const Stack = createNativeStackNavigator()
const CompanyAuthStack = () => {
  return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='LoginCompany' component={LoginCompany}/>
        <Stack.Screen name='OrgSignupCompany' component={OrgSignup}/>
        <Stack.Screen name='ForgetPasswordCompany' component={ForgetPasswordCompany}/>
        <Stack.Screen name='OtpVerificationCompany' component={OtpVerificationCompany}/>
        <Stack.Screen name='SetNewPasswordCompany' component={SetNewPasswordCompany}/>

        </Stack.Navigator>
  )
}

export default CompanyAuthStack

const styles = StyleSheet.create({})