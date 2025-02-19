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
import CmpDamage from '../screens/company/bottomScreens/CmpDamage'
import CmpDamageClaim from '../screens/company/otherScreens/CmpDamageClaim'
import CmpEmpDetails from '../screens/company/otherScreens/CmpEmpDetails'
import CmpUpdateProfile from '../screens/company/otherScreens/CmpUpdateProfile'
import CmpQuestionnaire from '../screens/company/otherScreens/CmpQuestionnaire'
import CmpNextQuestionnaire from '../screens/company/otherScreens/CmpNextQuestionnaire'
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
<Stack.Screen name='CmpDamageClaim' component={CmpDamageClaim}/>
<Stack.Screen name='CmpEmpDetails' component={CmpEmpDetails}/>
<Stack.Screen name='CmpUpdateProfile' component={CmpUpdateProfile}/>
<Stack.Screen name='CmpQuestionnaire' component={CmpQuestionnaire}/>
<Stack.Screen name='CmpNextQuestionnaire' component={CmpNextQuestionnaire}/>
</Stack.Navigator>
)
}

export default CmpStack

const styles = StyleSheet.create({})