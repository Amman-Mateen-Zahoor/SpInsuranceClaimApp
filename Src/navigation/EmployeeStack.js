import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import EmpBottomTab from './EmpBottomTab'
import EmpUpdateprofile from '../screens/employee/othersScreen/EmpUpdateprofile'
import EmpProfile from '../screens/employee/othersScreen/EmpProfile'
const Stack = createNativeStackNavigator()

const EmployeeStack = () => {
  return (
<Stack.Navigator screenOptions={{headerShown:false}}>
<Stack.Screen name='EmpBottomTab' component={EmpBottomTab}/>
<Stack.Screen name='EmpProfile' component={EmpProfile}/>
<Stack.Screen  name='EmpUpdateProfile' component={EmpUpdateprofile}/>
</Stack.Navigator>
)
}

export default EmployeeStack

const styles = StyleSheet.create({})