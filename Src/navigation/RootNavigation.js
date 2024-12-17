import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Splash from '../Screens/Splash';
import GetStarted from '../Screens/GetStarted';
import RegisterOption from '../Screens/RegisterOption';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
   <Stack.Navigator screenOptions={{headerShown:false}}>
<Stack.Screen name='splash' component={Splash}/>
<Stack.Screen name='getStarted' component={GetStarted}/>
<Stack.Screen name='RegisterOption' component={RegisterOption}/>
   </Stack.Navigator>
   </NavigationContainer>
  )
}

export default RootNavigation

const styles = StyleSheet.create({})