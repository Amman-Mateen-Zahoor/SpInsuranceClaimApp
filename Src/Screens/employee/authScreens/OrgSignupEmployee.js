import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Color, FontFamily, FontSize} from '../../../constants/style';
import {wp} from '../../../utils/utils';
import AuthLayout from '../../../layout/AuthLayout';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
import DropdownWithIcons from '../../../components/DropdownWithIcons';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import Localization from '../../../constants/localization';
import * as Yup from 'yup'
import { Formik } from 'formik';
import { EMAIL_REGEX } from '../../../constants/regex';

const OrgSignup = () => {
  const [inputValueName, setInputValueName] = useState('');
  const [inputValueEmail, setInputValueEmail] = useState('');
  const [inputValueCvr, setInputValueCvr] = useState('');
  const [inputValuePassword, setInputValuePassword] = useState('');
  const navigation = useNavigation();
  const {lang} = useSelector(state => state.language);
  let validationSchema = Yup.object().shape({
    name: Yup.string().required(
      Localization.name_required[lang],
    ),
    // contact: Yup.string().test('contact', Localization.invalid_phone_number[lang], function (val) {
    //     const regex = phoneRegex[this.parent.country_code]?.regex
    //     return  regex && new RegExp(regex).test(val || '')
    // }).required(Localization.phone_required[lang]),
    email: Yup.string()
      .test('email', Localization.invalid_email[lang], val =>
        EMAIL_REGEX.test(val || ''),
      )
      .required(Localization.email_required[lang]),
    cvr: Yup.string()
      .length(8, Localization.cvr_must_be_8[lang])
      .required(Localization.cvr_required[lang]),
    password: Yup.string()
      .min(8, Localization.password_atleast_8[lang])
      .required(Localization.password_required[lang]),
  });
  const handleSubmit = () => {
    navigation.navigate('OtpVerificationEmployee');
  }
  return (
      <Formik
          initialValues={{
            name: '',
            country_code: '+45',
            contact: '',
            email: '',
            cvr: '',
            password: '',
          }}
          validationSchema={validationSchema}
          // validateOnChange={false}
          onSubmit={handleSubmit}>
          {({values, handleSubmit, handleChange, errors, touched, handleBlur}) => (
    <AuthLayout
      text1={Localization.hello[lang]}
      text2={Localization.create[lang]}
      text3={Localization.account[lang]}
      CustomStyle={styles.CustomStyle}
    >
      <CustomTextInput
        placeholder={Localization.name[lang]}
        imageSource={require('../../../assets/icons/name.png')}
        value={values.name}
        onChangeText={handleChange('name')}
        onBlur={handleBlur('name')}
        error={touched.name && errors.name}
        autoCapitalize="words"
      />

      <DropdownWithIcons />

      <CustomTextInput
        placeholder={Localization.email[lang]}
        imageSource={require('../../../assets/icons/mailicon.png')}
        value={values.email}
        onChangeText={handleChange('email')}
        error={touched.email && errors.email}
        autoCapitalize="none"
        handleBlur={handleBlur('email')}
        keyboardType={'email-address'}
      />

      <CustomTextInput
        placeholder={Localization.cvr_no[lang]}
        imageSource={require('../../../assets/icons/cvr.png')}
        value={values.cvr}
        onChangeText={handleChange('cvr')}
        onBlur={handleBlur('cvr')}
        error={touched.cvr && errors.cvr}
        keyboardType={'numeric'}
      />

      <CustomTextInput
        placeholder={Localization.password[lang]}
        imageSource={require('../../../assets/icons/password.png')}
        value={values.password}
        onChangeText={handleChange('password')}
        error={touched.password && errors.password}
        secureTextEntry={true} // Enable password toggle
        autoCapitalize="none"
        onBlur={handleBlur('password')}
      />

      <CustomButton
        title={Localization.signup[lang]}
        style={{width: wp(90)}}
        onPress={handleSubmit}
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
       )}
        </Formik>
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
