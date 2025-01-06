import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../../../components/CustomTextInput';
import AuthLayout from '../../../layout/AuthLayout';

import {Color, FontFamily, FontSize} from '../../../constants/style';

import CustomButton from '../../../components/CustomButton';
import {wp} from '../../../utils/utils';
import DropdownWithIcons from '../../../components/DropdownWithIcons';

const OrgSignup = ({navigation}) => {
  const [inputValueName, setInputValueName] = useState('');
  const [inputValueEmail, setInputValueEmail] = useState('');
  const [inputValueCvr, setInputValueCvr] = useState('');
  const [inputValuePassword, setInputValuePassword] = useState('');

  return (
    <AuthLayout
      text1={'Hello!'}
      text2={'Create Your'}
      text3={'Account'}
      CustomStyle={styles.CustomStyle}
      // bottomtext={'Already have an account?'}
      // bottomTextPressable={'Sign In'}
      // mainButtonText={"Sign Up"}
    >
      <CustomTextInput
        placeholder="Company Name"
        imageSource={require('../../../assets/icons/name.png')}
        value={inputValueName}
        onChangeText={setInputValueName}
      />
        <CustomTextInput
        placeholder="CVR No."
        imageSource={require('../../../assets/icons/cvr.png')}
        value={inputValueCvr}
        onChangeText={setInputValueCvr}
      />
      <DropdownWithIcons />

      <CustomTextInput
        placeholder="Email"
        imageSource={require('../../../assets/icons/mailicon.png')}
        value={inputValueEmail}
        onChangeText={setInputValueEmail}
      />

 

      <CustomTextInput
        placeholder="Password"
        imageSource={require('../../../assets/icons/password.png')}
        value={inputValuePassword}
        onChangeText={setInputValuePassword}
        secureTextEntry={true} // Enable password toggle
      />

      <CustomButton
        title="Sign Up"
        style={{width: wp(90)}}
        onPress={() => {
          navigation.navigate('OtpVerificationCompany');
        }}
      />
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <Text
          style={{
            color: Color.inputText,
            paddingTop: wp(4),
          }}>
          Already have an account?{' '}
        </Text>
        <Pressable onPress={() => navigation.goBack()}>
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
    </AuthLayout>
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
