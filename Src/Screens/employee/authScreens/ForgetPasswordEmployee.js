// import { Pressable, StyleSheet, Text, View } from 'react-native'
// import React, { useState } from 'react'
// import AuthLayout from '../../layout/AuthLayout'
// import CustomTextInput from '../../components/CustomTextInput';
// import CustomButton from '../../components/CustomButton';
// import { wp } from '../../utils/utils';
// import { Color, FontFamily, FontSize } from '../../constants/style';

// const ForgetPassword = ({navigation}) => {
//        const [inputValueEmail, setInputValueEmail] = useState('');
//   return (
// <AuthLayout
// text1={"Forget"}
// text2={"Password"}
// text3={"Enter your email here"}
// mainButtonText={"Submit"}
// >
// <CustomTextInput
//         placeholder="Email"
//         imageSource={require('../../../assets/icons/mailicon.png')}
//         value={inputValueEmail}
//         onChangeText={setInputValueEmail}
//       />
//        <CustomButton title="Submit" style={{width: wp(90)}} onPress={()=>navigation.navigate('newPassword')}/>
     
      
// </AuthLayout>
//   )
// }

// export default ForgetPassword

// const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ForgetPassword from '../../common/ForgetPassword'

const ForgetPasswordEmployee = () => {
  return (
    <ForgetPassword/>
  )
}

export default ForgetPasswordEmployee

const styles = StyleSheet.create({})