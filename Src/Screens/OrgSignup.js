 
import React, { useLayoutEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  StatusBar,
  Pressable,
} from 'react-native';
import { Color, FontFamily, FontSize } from '../constants/style';
import { hp, wp } from '../utils/utils';
import CustomTextInput from '../Components/CustomTextInput';
import DropdownWithIcons from '../Components/DropdownWithIcons';
import CustomButton from '../Components/CustomButton';

const OrgSignup = () => {
  useLayoutEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setTranslucent(true);
      StatusBar.setBackgroundColor('transparent');
    }
    StatusBar.setHidden(false);
    StatusBar.setBarStyle('light-content');
  }, []);

  const [inputValueName, setInputValueName] = useState('');
  const [inputValueEmail, setInputValueEmail] = useState('');
  const [inputValueCvr, setInputValueCvr] = useState('');
  const [inputValuePassword, setInputValuePassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={{height:wp(22)}}>
      <Text style={styles.textHello}>Hello!</Text>
      <Text style={styles.text2}>Create Your</Text>
      <Text style={styles.text3}>Account</Text>
      
      </View>
      <Image
        source={require('../assets/images/splash-background.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.content}>
        <CustomTextInput
          placeholder="Name"
          imageSource={require('../assets/icons/name.png')}
          value={inputValueName}
          onChangeText={setInputValueName}
        />

        <DropdownWithIcons />

        <CustomTextInput
          placeholder="Email"
          imageSource={require('../assets/icons/mailicon.png')}
          value={inputValueEmail}
          onChangeText={setInputValueEmail}
        />

        <CustomTextInput
          placeholder="CVR No."
          imageSource={require('../assets/icons/cvr.png')}
          value={inputValueCvr}
          onChangeText={setInputValueCvr}
        />

        <CustomTextInput
          placeholder="Password"
          imageSource={require('../assets/icons/password.png')}
          value={inputValuePassword}
          onChangeText={setInputValuePassword}
          secureTextEntry={true} // Enable password toggle
        />

        <CustomButton
          title="Sign Up"
          style={{ width: wp(90) }}
        />

        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.bottomText}>
            Already have an account?{' '}
          </Text>
          <Pressable>
            <Text
              style={{
                color: Color.darkBlue,
                paddingTop: wp(3),
                fontSize: FontSize.l,
                fontFamily: FontFamily.robotoBold,
              }}
            >
              Sign In
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.darkBlue,
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: wp(20),
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0.5,
  },
  textHello:{
    fontFamily:FontFamily.robotoBold,
    fontSize:FontSize.xxxl,
    color:Color.white,
    paddingLeft:wp(6)
    },
    text2:
    {
      fontFamily:FontFamily.robotoBold,
      fontSize:FontSize.xxxl,
      color:Color.lightBlue,
      paddingLeft:wp(6),
      paddingTop:wp(1),
      
      
      },
      text3:
      {
        fontFamily:FontFamily.robotoBold,
        fontSize:FontSize.xxxl,
        color:Color.lightBlue,
        paddingLeft:wp(6),
        
      
        
        },
  content: {
    marginTop: wp(10),
    padding: 20,
    backgroundColor: Color.white,
    height: hp(85),
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  bottomText: {
    color: Color.inputText,
    paddingTop: wp(3),
  },
});

export default OrgSignup;
