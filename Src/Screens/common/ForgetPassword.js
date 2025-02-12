import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AuthLayout from '../../layout/AuthLayout';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import {wp} from '../../utils/utils';
import {useNavigation} from '@react-navigation/native';
import Localization from '../../constants/localization';
import {useSelector} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {EMAIL_REGEX} from '../../constants/regex';

const ForgetPassword = ({from}) => {
  const {lang} = useSelector(state => state.language);
  const [inputValueEmail, setInputValueEmail] = useState('');
  const navigation = useNavigation();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .test('email', Localization.invalid_email[lang], val =>
        EMAIL_REGEX.test(val || ''),
      )
      .required(Localization.email_required[lang]),
  });
  const handleSubmit = () => {
    from === 'employee'
      ? navigation.navigate('SetNewPasswordEmployee')
      : navigation.navigate('SetNewPasswordCompany');
  }
  return (
    <Formik
      initialValues={{email: ''}}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {({values, handleSubmit, handleChange, errors, touched, handleBlur}) => (
        <AuthLayout
          text1={Localization.forget[lang]}
          text2={Localization.password[lang]}
          text3={Localization.enter_email[lang]}>
          <CustomTextInput
            placeholder={Localization.email[lang]}
            imageSource={require('../../assets/icons/mailicon.png')}
            value={values.email}
            onChangeText={handleChange('email')}
            error={touched.email && errors.email}
            autoCapitalize="none"
            handleBlur={handleBlur('email')}
            keyboardType={'email-address'}
            
          />
          <CustomButton
            title={Localization.submit[lang]}
            style={{width: wp(90)}}
            onPress={handleSubmit}
          />
        </AuthLayout>
      )}
    </Formik>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({});
