import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import EmpBottomTab from './EmpBottomTab'
import EmpUpdateprofile from '../screens/employee/othersScreen/EmpUpdateprofile'
import EmpProfile from '../screens/employee/bottomScreens/EmpProfile'
import EmpHome from '../screens/employee/bottomScreens/EmpHome'
import EmpQuestionnaire from '../screens/employee/othersScreen/EmpQuestionnaire'
import EmpNextQuestionnare from '../screens/employee/othersScreen/EmpNextQuestionnare'
import EmpNotify from '../screens/employee/othersScreen/EmpNotify'
import EmpUpdatePassword from '../screens/employee/othersScreen/EmpUpdatePassword'
import EmpSetLanguage from '../screens/employee/othersScreen/EmpSetLanguage'
import EmpContactUs from '../screens/employee/othersScreen/EmpContactUs'
const Stack = createNativeStackNavigator()

const EmployeeStack = () => {
  return (
<Stack.Navigator screenOptions={{headerShown:false}}>
<Stack.Screen name='EmpBottomTab' component={EmpBottomTab}/>
<Stack.Screen name='EmpProfile' component={EmpProfile}/>
<Stack.Screen  name='EmpUpdateProfile' component={EmpUpdateprofile}/>
<Stack.Screen name='EmpHome' component={EmpHome}/>
<Stack.Screen name='EmpQuestionnaire' component={EmpQuestionnaire}/>
<Stack.Screen name='EmpNextQuestionnare' component={EmpNextQuestionnare}/>
<Stack.Screen name='EmpNotify' component={EmpNotify}/>
<Stack.Screen name='EmpUpdatePassword' component={EmpUpdatePassword}/>
<Stack.Screen name='EmpSetLanguage' component={EmpSetLanguage}/>
<Stack.Screen name='EmpContactUs' component={EmpContactUs}/>
</Stack.Navigator>
)
}

export default EmployeeStack

const styles = StyleSheet.create({})