import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import EmpBottomTab from './EmpBottomTab'
import EmpUpdateprofile from '../screens/employee/othersScreen/EmpUpdateprofile'
import EmpProfile from '../screens/employee/othersScreen/EmpProfile'
import EmpHome from '../screens/employee/othersScreen/EmpHome'
import EmpQuestionnaire from '../screens/employee/othersScreen/EmpQuestionnaire'
import EmpNextQuestionnare from '../screens/employee/othersScreen/EmpNextQuestionnare'
import EmpNotify from '../screens/employee/othersScreen/EmpNotify'
const Stack = createNativeStackNavigator()

const EmployeeStack = () => {
  return (
<Stack.Navigator screenOptions={{headerShown:false}}>
<Stack.Screen name='EmpBottomTab' component={EmpBottomTab}/>
<Stack.Screen name='EmpProfile' component={EmpProfile}/>
<Stack.Screen  name='EmpUpdateProfile' component={EmpUpdateprofile}/>
<Stack.Screen name='EmpHome' component={EmpHome}/>
<Stack.Screen name='EmpQuestionere' component={EmpQuestionnaire}/>
<Stack.Screen name='EmpNextQuestionnare' component={EmpNextQuestionnare}/>
<Stack.Screen name='EmpNotify' component={EmpNotify}/>
</Stack.Navigator>
)
}

export default EmployeeStack

const styles = StyleSheet.create({})