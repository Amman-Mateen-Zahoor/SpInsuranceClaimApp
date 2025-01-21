import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../../../components/CustomTextInput';
import AuthLayout from '../../../layout/AuthLayout';
import {Color, FontFamily, FontSize} from '../../../constants/style';
import {useSelector} from 'react-redux';
import CustomButton from '../../../components/CustomButton';
import {wp} from '../../../utils/utils';
import DropdownWithIcons from '../../../components/DropdownWithIcons';
import Localization from '../../../constants/localization';

const OrgSignup = ({navigation}) => {
  const {lang} = useSelector(state => state.language);
  const [inputValueName, setInputValueName] = useState('');
  const [inputValueEmail, setInputValueEmail] = useState('');
  const [inputValueCvr, setInputValueCvr] = useState('');
  const [inputValuePassword, setInputValuePassword] = useState('');

  return (
    <AuthLayout
    text1={Localization.hello[lang]}
    text2={Localization.create[lang]}
    text3={Localization.account[lang]}
      CustomStyle={styles.CustomStyle}
      // bottomtext={'Already have an account?'}
      // bottomTextPressable={'Sign In'}
      // mainButtonText={"Sign Up"}
    >
      <CustomTextInput
        placeholder={Localization.company_name[lang]}
        imageSource={require('../../../assets/icons/name.png')}
        value={inputValueName}
        onChangeText={setInputValueName}
      />
        <CustomTextInput
        placeholder={Localization.cvr_no[lang]}
        imageSource={require('../../../assets/icons/cvr.png')}
        value={inputValueCvr}
        onChangeText={setInputValueCvr}
      />
      <DropdownWithIcons />

      <CustomTextInput
        placeholder={Localization.email[lang]}
        imageSource={require('../../../assets/icons/mailicon.png')}
        value={inputValueEmail}
        onChangeText={setInputValueEmail}
      />

 

      <CustomTextInput
        placeholder={Localization.password[lang]}
        imageSource={require('../../../assets/icons/password.png')}
        value={inputValuePassword}
        onChangeText={setInputValuePassword}
        secureTextEntry={true} // Enable password toggle
      />

      <CustomButton
        title={Localization.signup[lang]}
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
         {Localization.already_account[lang]}{' '}
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
            {Localization.signin[lang]}
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
