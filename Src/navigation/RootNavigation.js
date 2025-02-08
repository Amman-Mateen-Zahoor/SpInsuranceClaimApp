import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Splash from '../screens/Splash';
import GetStarted from '../screens/GetStarted';
import RegisterOption from '../screens/RegisterOption';
import TestCodes from '../screens/TestCodes';
import CompanyAuthStack from './CompanyAuthStack';
import EmployeeAuthStack from './EmployeeAuthStack';
import EmployeeStack from './EmployeeStack';
import CmpStack from './CmpStack';



const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
   <Stack.Navigator screenOptions={{headerShown:false}}>
<Stack.Screen name='splash' component={Splash}/>
<Stack.Screen name='getStarted' component={GetStarted}/>
<Stack.Screen name='registration' component={RegisterOption}/>
<Stack.Screen name='test' component={TestCodes}/>
<Stack.Screen name='CompanyAuth' component={CompanyAuthStack}/>
<Stack.Screen name='EmployeeAuth' component={EmployeeAuthStack}/>
<Stack.Screen name='EmployeeStack' component={EmployeeStack}/>
<Stack.Screen name='CmpStack' component={CmpStack}/>
   </Stack.Navigator>
   </NavigationContainer>
   
  )
}

export default RootNavigation

const styles = StyleSheet.create({})