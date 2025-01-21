import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AuthLayout from '../../layout/AuthLayout'
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import { wp } from '../../utils/utils';
import { useNavigation } from '@react-navigation/native';
import Localization from '../../constants/localization';
import { useSelector } from 'react-redux';
const ForgetPassword = ({from}) => {
    const {lang} = useSelector(state => state.language);                           
       const [inputValueEmail, setInputValueEmail] = useState('');
       const navigation = useNavigation()
  return (
<AuthLayout
text1={Localization.forget[lang]}
text2={Localization.password[lang]}
text3={Localization.enter_email[lang]}
>
<CustomTextInput
        placeholder={Localization.email[lang]}
        imageSource={require('../../assets/icons/mailicon.png')}
        value={inputValueEmail}
        onChangeText={setInputValueEmail}
      />
       <CustomButton title={Localization.submit[lang]} style={{width: wp(90)}} onPress={()=>{
       
       from ==="employee" ?
         navigation.navigate('SetNewPasswordEmployee')
         :navigation.navigate('SetNewPasswordCompany')
       }}/>
     
      
</AuthLayout>
  )
}

export default ForgetPassword

const styles = StyleSheet.create({})