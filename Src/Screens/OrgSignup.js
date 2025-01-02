import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../Components/CustomTextInput';
import Layout from '../Components/Layout';
import DropdownWithIcons from '../Components/DropdownWithIcons';
import {Color, FontFamily, FontSize} from '../constants/style';
import CustomButton from '../Components/CustomButton';
import {wp} from '../utils/utils';

const OrgSignup = ({navigation}) => {
  const [inputValueName, setInputValueName] = useState('');
  const [inputValueEmail, setInputValueEmail] = useState('');
  const [inputValueCvr, setInputValueCvr] = useState('');
  const [inputValuePassword, setInputValuePassword] = useState('');

  return (
    <Layout
      text1={'Hello!'}
      text2={'Create Your'}
      text3={'Account'}
      CustomStyle={styles.CustomStyle}
      // bottomtext={'Already have an account?'}
      // bottomTextPressable={'Sign In'}
      // mainButtonText={"Sign Up"}
    >
      
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
      
      
  

      <CustomButton title="Sign Up" style={{width: wp(90)}} onPress={()=>{navigation.navigate('otpVerification')}} />
      <View style={{flexDirection: 'row',alignSelf:'center'}}>
        <Text
          style={{
            color: Color.inputText,
            paddingTop: wp(4),
            
          }}>
          Already have an account?{' '}
        </Text>
        <Pressable onPress={()=>navigation.navigate('login')}>
          <Text
            style={{
              color: Color.darkBlue,
              paddingTop: wp(4),
              fontSize: FontSize.l,
              fontFamily: FontFamily.robotoBold,
            }}>
            {/* Sign In */}
            Sign In
          </Text>
          <View></View>
        </Pressable>
      </View>
    </Layout>
  );
};

export default OrgSignup;

const styles = StyleSheet.create({
  CustomStyle: {
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.xxxl,
    paddingTop: 0,
  },
});
