import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, { useEffect } from 'react';
import Layout from '../Components/Layout';
import {Color, FontFamily, FontSize} from '../constants/style';
import {wp} from '../utils/utils';
import CustomButton from '../Components/CustomButton';

const OtpVerification = () => {
    
       
// useEffect(()=>{
//     setTimeout(1500)
// },[])
   
  return (
    <Layout
      text1={'OTP'}
      text2={'Verification'}
      text3={'Verification code send via email'}
     
      >
<View>
        <View style={{flexDirection:'row',height:wp(13),width:wp(80),alignItems:'center',justifyContent:'space-evenly',
        
        }}>
      <TextInput  style={styles.textInput} ></TextInput>

      <TextInput  style={styles.textInput}></TextInput>

      <TextInput  style={styles.textInput}></TextInput>
      <TextInput   style={styles.textInput}></TextInput>
      </View>
      <View>
      <CustomButton title="Submit" style={{width: wp(90)}} />
      <View style={{flexDirection: 'row',paddingLeft:wp(25),paddingTop:wp(2)}}>
        <Text
          style={{
            color: Color.inputText,
            paddingTop: wp(3),
            
          }}>
          Did'nt get code?{' '}
        </Text>
        <Pressable>
          <Text
            style={{
              color: Color.darkBlue,
              paddingTop: wp(3),
              fontSize: FontSize.l,
              fontFamily: FontFamily.robotoBold,
            }}>
            {/* Sign In */}
            Resend
          </Text>
          <View></View>
        </Pressable>
        
      </View>
      </View>
      
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
