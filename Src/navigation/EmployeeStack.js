import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import EmpBottomTab from './EmpBottomTab'
const Stack = createNativeStackNavigator()

const EmployeeStack = () => {
  return (
<Stack.Navigator screenOptions={{headerShown:false}}>
<Stack.Screen name='EmpBottomTab' component={EmpBottomTab}/>
</Stack.Navigator>
)
}

export default EmployeeStack

const styles = StyleSheet.create({})