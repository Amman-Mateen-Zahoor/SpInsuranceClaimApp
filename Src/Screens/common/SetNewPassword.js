import {Modal, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AuthLayout from '../../layout/AuthLayout';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import {wp} from '../../utils/utils';
import PopUp from '../../modals/PopUp';
import Localization from '../../constants/localization';
import {useSelector} from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup'
const SetNewPassword = ({from}) => {
  const {lang} = useSelector(state => state.language);
  const [inputValuePassword, setInputValuePassword] = useState('');
  const [inputValuePasswordNew, setInputValuePasswordNew] = useState('');
  const [sendVisible, SetSendVisible] = useState(false);
  const validationSchema = Yup.object().shape({
    password: Yup.string().min(8, Localization.password_atleast_8[lang]).required(Localization.password_required[lang]),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], Localization.cnf_password_not_match[lang]).required(Localization.cnf_passsword_required[lang]),
});
const handleSubmit = () => {
  SetSendVisible(true);
}
  return (
    <Formik
          initialValues={{password: '', confirmPassword:''}}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
          {({values, handleSubmit, handleChange, errors, touched, handleBlur}) => (
    <AuthLayout
      text1={Localization.set[lang]}
      text2={Localization.new_password[lang]}
      text3={Localization.add_new_password[lang]}>
      <CustomTextInput
        placeholder={Localization.password[lang]}
        imageSource={require('../../assets/icons/password.png')}
        value={values.password}
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        error={touched.password && errors.password}
        autoCapitalize='none'
        secureTextEntry={true} // Enable password toggle
      />
      <CustomTextInput
        placeholder={Localization.confirm_password[lang]}
        imageSource={require('../../assets/icons/password.png')}
        value={values.confirmPassword}
        onChangeText={handleChange('confirmPassword')}
        onBlur={handleBlur('confirmPassword')}
        error={touched.confirmPassword && errors.confirmPassword}
        autoCapitalize='none'
        secureTextEntry={true} // Enable password toggle
      />

      <CustomButton
        title={Localization.submit[lang]}
        style={{width: wp(90)}}
        onPress={handleSubmit}
      />
      <PopUp
        visible={sendVisible}
        handleClose={() => {
          SetSendVisible(false);
        }}
        iconSource={require('../../assets/icons/check.png')}
        mainHeading={Localization.updated_successfully[lang]}
        description={Localization.password_update_success[lang]}
        status={Localization.successfully[lang]}
        btnTitle={Localization.done[lang]}
      />
    </AuthLayout>
    )}
    </Formik>
  );
};

export default SetNewPassword;

const styles = StyleSheet.create({});
