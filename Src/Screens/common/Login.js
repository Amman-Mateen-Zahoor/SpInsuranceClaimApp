import {Pressable, StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import AuthLayout from '../../layout/AuthLayout';
import CustomTextInput from '../../components/CustomTextInput';
import {Color, FontFamily, FontSize} from '../../constants/style';
import {hp, wp} from '../../utils/utils';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import Localization from '../../constants/localization';
import { useSelector } from 'react-redux';

const Login = ({from}) => {
  const [inputValueEmail, setInputValueEmail] = useState('');
  const [inputValuePassword, setInputValuePassword] = useState('');
  const navigation=useNavigation()
  const {lang} = useSelector(state => state.language);                           

     
  return (
    <AuthLayout
      text1={Localization.hello[lang]}
      text2={Localization.login[lang]}
      text3={Localization.please_login[lang]} >
      <CustomTextInput
        placeholder={Localization.email[lang]}
        imageSource={require('../../assets/icons/mailicon.png')}
        value={inputValueEmail}
        onChangeText={setInputValueEmail}
      />
      <CustomTextInput
        placeholder={Localization.password[lang]}
        imageSource={require('../../assets/icons/password.png')}
        value={inputValuePassword}
        onChangeText={setInputValuePassword}
        secureTextEntry={true} // Enable password toggle
      />
      <Pressable onPress={()=>{
       
       from ==="employee" ?
         navigation.navigate('ForgetPasswordEmployee')
         :navigation.navigate('ForgetPasswordCompany')
       }}>
        <Text style={styles.text}>{Localization.forget_password[lang]}</Text>
      </Pressable>
      <View style={styles.lineContainer}>
        <View style={styles.line}></View>
        <Text style={{color: Color.inputText}}>{Localization.or[lang]}</Text>
        <View style={styles.line2}></View>
      </View>
      
      <Text style={{color: Color.inputText, paddingTop: wp(5),paddingBottom:wp(6),alignSelf:'center' }}>
      {Localization.login_with_face_id[lang]}
      </Text>
      <Pressable onPress={()=>{console.log('first')}}>
      <Image source={require('../../assets/icons/face-id.png')}
      style={styles.image}
      ></Image></Pressable>
      
        <CustomButton title={Localization.login[lang]} onPress={()=>{
       
       from ==="employee" ?
         navigation.navigate('EmployeeStack')
         :navigation.navigate('CmpStack')
       }} style={{width: wp(90)}} />
      <View style={{flexDirection: 'row',alignSelf:"center"}}>
        <Text
          style={{
            color: Color.inputText,
             paddingTop: wp(4)
            
          }}>
         {Localization.did_not_have_account[lang]}{' '}
        </Text>
        <Pressable onPress={()=>{
       
          from ==="employee" ?
            navigation.navigate('OrgSignupEmployee')
            :navigation.navigate('OrgSignupCompany')
          }
          
  }>
          <Text
            style={{
              color: Color.darkBlue,
              paddingTop: wp(4),
              fontSize: FontSize.l,
              fontFamily: FontFamily.robotoBold,
            }}>
            {/* Sign In */}
            {Localization.signup[lang]}
          </Text>
          <View></View>
        </Pressable>
        
      </View>
    </AuthLayout>
  );
};

export default Login;

const styles = StyleSheet.create({
  text: {
    color: Color.darkBlue,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.m,
    paddingTop: wp(3),
    alignSelf:'flex-end'
    
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: wp(7),
  },
  line: {
    width: wp(40),
    borderBottomWidth: 1,
    borderColor: Color.inputField,
    marginRight: wp(1),
  },
  line2: {
    width: wp(41),
    borderBottomWidth: 1,
    borderColor: Color.inputField,
    marginLeft: wp(1),
  },
  image:{
    height:wp(20),
    width:wp(20),
    resizeMode:'contain',
    alignSelf:'center'
  },
});
