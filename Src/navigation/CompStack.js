import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import CompBottomTab from './CompBottomTab'
const Stack = createNativeStackNavigator()

const CompStack = () => {
  return (
<Stack.Navigator screenOptions={{headerShown:false}}>
<Stack.Screen name='CompBottomTab' component={CompBottomTab}/>
</Stack.Navigator>
)
}

export default CompStack

const styles = StyleSheet.create({})