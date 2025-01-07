import React, {useLayoutEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  StatusBar,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {Color, FontFamily, FontSize} from '../constants/style';
import {hp, wp} from '../utils/utils';
import CustomButton from '../components/CustomButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const AuthLayout = ({children, text1, text2, text3, CustomStyle}) => {
  // useLayoutEffect(() => {
  //   if (Platform.OS === 'android') {
  //     StatusBar.setTranslucent(true);
  //     StatusBar.setBackgroundColor('transparent');
  //   }
  //   StatusBar.setHidden(false);
  //   StatusBar.setBarStyle('light-content');
  // }, []);
  // const {top}=useSafeAreaInsets()
  let top = 10
  return (
    
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={[styles.container ]}>
        <Text style={[styles.textHello ]}>{text1}</Text>
        <Text style={styles.text2}>{text2}</Text>
        {/* Apply CustomStyle correctly here */}
        <Text style={[styles.text3, CustomStyle]}>{text3}</Text>
   
      <Image
        source={require('../assets/images/auth-background.png')}
        style={styles.backgroundImage}
      />

      <KeyboardAwareScrollView
      extraScrollHeight={20}
      enableOnAndroid
      keyboardShouldPersistTaps="handled"
        style={{
          marginTop: wp(15),
          borderTopLeftRadius: wp(7),
          backgroundColor: Color.white,
          borderTopRightRadius: wp(7),
        }}
        contentContainerStyle={styles.content}>
        {children}
      </KeyboardAwareScrollView>
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.darkBlue,
    flex: 1,
    justifyContent: 'flex-start',
    // paddingTop: wp(20),
  },
  backgroundImage: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  textHello: {
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.xxxl,
    color: Color.white,
    paddingLeft: wp(6),
    marginTop:wp(17)
  },
  text2: {
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.xxxl,
    color: Color.lightBlue,
    paddingLeft: wp(6),
    paddingTop: wp(1),
  },
  text3: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.m, // Default font size
    color: Color.lightBlue,
    paddingLeft: wp(6),
    paddingTop: wp(2),
  },
  content: {
    flexGrow: 1,
    padding: wp(5),
  },
});

export default AuthLayout;
