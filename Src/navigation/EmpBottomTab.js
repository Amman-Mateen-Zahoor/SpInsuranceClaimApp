import {
  StyleSheet,
  Image,
  View,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
import React, {lazy} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EmpHome from '../screens/employee/othersScreen/EmpHome';
import {wp} from '../utils/utils';
import {Color, FontSize} from '../constants/style';
import {
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import EmpFile from '../screens/employee/othersScreen/EmpFile';
import Camera from '../screens/Camera';
import EmpProfile from '../screens/employee/othersScreen/EmpProfile';

const Tab = createBottomTabNavigator();
const EmpBottomTab = () => {
  const {bottom} = useSafeAreaInsets();

  return (
    <Tab.Navigator
    backBehavior='history'
      screenOptions={{
        tabBarActiveTintColor: Color.darkBlue,
        tabBarStyle: {height: wp(17) + bottom},

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
        name="Home"
        component={EmpHome}
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
        name="Files"
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
                    ? require('../assets/icons/profile-filled.png')
                    : require('../assets/icons/profile.png')
                }
                style={styles.icon}
              />
            );
          },
        }}
        name="Profile"
        component={EmpProfile}
      />
      <Tab.Screen
        options={{
          tabBarIcon: tabProps => {
            return (
              <Image
                source={
                  tabProps.focused
                    ? require('../assets/icons/settings-filled.png')
                    : require('../assets/icons/settings.png')
                }
                style={styles.icon}
              />
            );
          },
        }}
        name="Setting"
        component={EmpHome}
      />
    </Tab.Navigator>
  );
};

export default EmpBottomTab;

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
