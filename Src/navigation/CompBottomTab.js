import {
    StyleSheet,
    Image,
    View,
    TouchableWithoutFeedback,
    Pressable,
    Keyboard,
  } from 'react-native';
  import React, {lazy, useEffect, useState} from 'react';
  import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
  import EmpHome from '../screens/employee/bottomScreens/EmpHome';
  import {wp} from '../utils/utils';
  import {Color, FontSize} from '../constants/style';
  import {
    SafeAreaInsetsContext,
    useSafeAreaInsets,
  } from 'react-native-safe-area-context';
  import EmpFile from '../screens/employee/bottomScreens/EmpFile';
  import Camera from '../screens/Camera';
  import EmpProfile from '../screens/employee/bottomScreens/EmpProfile';
  import EmpSetting from '../screens/employee/bottomScreens/EmpSetting';
  import { useSelector } from 'react-redux';
  import Localization from '../constants/localization';
import CmpHome from '../screens/company/bottomScreens/CmpHome';
  
  const Tab = createBottomTabNavigator();
  const CompBottomTab = () => {
    const {bottom} = useSafeAreaInsets();
    const [keyboardVisible, setKeyboardVisible] = useState(false);
    const {lang} = useSelector(state=>state.language)
    useEffect(() => {
      const showListener = Keyboard.addListener("keyboardDidShow", () => setKeyboardVisible(true));
      const hideListener = Keyboard.addListener("keyboardDidHide", () => setKeyboardVisible(false));
  
      return () => {
        showListener.remove();
        hideListener.remove();
      };
    }, []);
    return (
      <Tab.Navigator
      backBehavior='history'
  
        screenOptions={{
          
          tabBarActiveTintColor: Color.darkBlue,
          tabBarStyle:keyboardVisible ? { display: "none" } : {height: wp(17) + bottom},
          // tabBarLabelStyle:{marginTop:30},
          // tabBarIconStyle:{paddingBottom:10},
          headerShown: false,
        }}>
        <Tab.Screen
          options={{
            tabBarIcon: tabProps => {
              return (
                <Image
                  source={
                    tabProps.focused
                      ? require('../assets/icons/home-filled.png')
                      : require('../assets/icons/home.png')
                  }
                  style={styles.icon}
                />
              );
            },
          }}
          name={Localization.home[lang]}
          component={CmpHome}
        />
        <Tab.Screen
          options={{
            tabBarIcon: tabProps => {
              return (
                <Image
                  source={
                    tabProps.focused
                      ? require('../assets/icons/damage-filled.png')
                      : require('../assets/icons/damage.png')
                  }
                  style={styles.icon}
                />
              );
            },
          }}
          name={Localization.damage[lang]}
          component={EmpFile}
        />
        <Tab.Screen
          options={{
            
            tabBarButton: props => (
              <Pressable {...props}>
                <View style={[styles.midIcon, {bottom: wp(8) + bottom}]}>
                  <Image
                    source={require('../assets/icons/camera.png')}
                    style={styles.icon2}
                  />
                </View>
              </Pressable>
            ),
            tabBarStyle:{display:'none'}
           
          }}
          name="Homemid"
          component={Camera}
        />
        <Tab.Screen
          options={{
            tabBarIcon: tabProps => {
              return (
                <Image
                  source={
                    tabProps.focused
                      ? require('../assets/icons/employee-Filled.png')
                      : require('../assets/icons/employee.png')
                  }
                  style={styles.icon}
                />
              );
            },
          }}
          name={Localization.employees[lang]}
          component={EmpSetting}
        />
         <Tab.Screen
          options={{
            tabBarIcon: tabProps => {
              return (
                <Image
                  source={
                    tabProps.focused
                      ? require('../assets/icons/profile-filled.png')
                      : require('../assets/icons/profile.png')
                  }
                  style={styles.icon}
                />
              );
            },
          }}
          name={Localization.profile[lang]}
          component={EmpProfile}
        />
      </Tab.Navigator>
    );
  };
  
  export default CompBottomTab;
  
  const styles = StyleSheet.create({
    icon: {
      width: wp(6),
      height: wp(6),
      resizeMode: 'contain',
    },
    icon2: {
      width: wp(6),
      height: wp(6),
      resizeMode: 'contain',
    },
    midIcon: {
      position: 'absolute',
      bottom: wp(8),
      height: wp(16),
      width: wp(16),
      backgroundColor: Color.darkBlue,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: wp(8),
      borderWidth: 4,
      borderColor: Color.white,
      elevation: 5,
    },
  });
  