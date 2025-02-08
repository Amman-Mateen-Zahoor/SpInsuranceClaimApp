import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import CmpBottomTab from './CmpBottomTab'
import CmpNotify from '../screens/company/otherScreens/CmpNotify'
import CmpSetting from '../screens/company/otherScreens/CmpSetting'
import CmpSetLanguage from '../screens/company/otherScreens/CmpSetLanguage'
import CmpUpdatePassword from '../screens/company/otherScreens/CmpUpdatePassword'
import CmpContactUs from '../screens/company/otherScreens/CmpContactUs'
import CmpSeeAll from '../screens/company/otherScreens/CmpSeeAll'
const Stack = createNativeStackNavigator()

const CmpStack = () => {
  return (
<Stack.Navigator screenOptions={{headerShown:false}}>
<Stack.Screen name='CmpBottomTab' component={CmpBottomTab}/>
<Stack.Screen name='CmpNotify' component={CmpNotify}/>
<Stack.Screen name='CmpSetting' component={CmpSetting}/>
<Stack.Screen name='CmpSetLanguage' component={CmpSetLanguage}/>
<Stack.Screen name='CmpUpdatePassword' component={CmpUpdatePassword}/>
<Stack.Screen name='CmpContactUs' component={CmpContactUs}/>
<Stack.Screen name='CmpSeeAll' component={CmpSeeAll}/>
</Stack.Navigator>
)
}

export default CmpStack

const styles = StyleSheet.create({})