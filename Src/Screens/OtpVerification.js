import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, { useEffect } from 'react';
import Layout from '../Components/Layout';
import {Color, FontSize} from '../constants/style';
import {wp} from '../utils/utils';

const OtpVerification = () => {
    
       
// useEffect(()=>{
//     setTimeout(1500)
// },[])
   
  return (
    <Layout
      text1={'OTP'}
      text2={'Verification'}
      text3={'Verification code send via email'}
      mainButtonText={"submit"}
      bottomtext={"Did'nt get code?"}
      bottomTextPressable={"Resend"}
      >

        <View style={{flexDirection:'row',height:wp(13),width:wp(80),alignItems:'center',justifyContent:'space-evenly',
        
        }}>
      <TextInput  style={styles.textInput} ></TextInput>

      <TextInput  style={styles.textInput}></TextInput>

      <TextInput  style={styles.textInput}></TextInput>
      <TextInput   style={styles.textInput}></TextInput>
      </View>
    </Layout>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({
  textInput: {
    // height:wp(6),
    width: wp(13.5),
    borderColor: Color.inputField,
    borderWidth: 1,
    textAlign:'center',
    color:Color.black,
    fontSize:FontSize.xxxl,
    borderRadius:wp(2)
  },
});
