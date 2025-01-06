import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AuthLayout from '../../layout/AuthLayout'
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import { wp } from '../../utils/utils';
import { useNavigation } from '@react-navigation/native';

const ForgetPassword = ({from}) => {
       const [inputValueEmail, setInputValueEmail] = useState('');
       const navigation = useNavigation()
  return (
<AuthLayout
text1={"Forget"}
text2={"Password"}
text3={"Enter your email here"}
mainButtonText={"Submit"}
>
<CustomTextInput
        placeholder="Email"
        imageSource={require('../../assets/icons/mailicon.png')}
        value={inputValueEmail}
        onChangeText={setInputValueEmail}
      />
       <CustomButton title="Submit" style={{width: wp(90)}} onPress={()=>{
       
       from ==="employee" ?
         navigation.navigate('SetNewPasswordEmployee')
         :navigation.navigate('SetNewPasswordCompany')
       }}/>
     
      
</AuthLayout>
  )
}

export default ForgetPassword

const styles = StyleSheet.create({})