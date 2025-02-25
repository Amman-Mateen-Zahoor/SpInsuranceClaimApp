// import {Pressable, StyleSheet, Text, View, Image} from 'react-native';
// import React, {useState} from 'react';
// import AuthLayout from '../../layout/AuthLayout';
// import CustomTextInput from '../../components/CustomTextInput';
// import {Color, FontFamily, FontSize} from '../../constants/style';
// import {hp, wp} from '../../utils/utils';
// import CustomButton from '../../components/CustomButton';

// const Login = ({navigation}) => {
//   const [inputValueEmail, setInputValueEmail] = useState('');
//   const [inputValuePassword, setInputValuePassword] = useState('');
//   return (
//     <AuthLayout
//       text1={'Hello!'}
//       text2={'Log In'}
//       text3={'Please login to continue'} >
//       <CustomTextInput
//         placeholder="Email"
//         imageSource={require('../../../assets/icons/mailicon.png')}
//         value={inputValueEmail}
//         onChangeText={setInputValueEmail}
//       />
//       <CustomTextInput
//         placeholder="Password"
//         imageSource={require('../../../assets/icons/password.png')}
//         value={inputValuePassword}
//         onChangeText={setInputValuePassword}
//         secureTextEntry={true} // Enable password toggle
//       />
//       <Pressable onPress={()=>navigation.navigate('forgetPassword')}>
//         <Text style={styles.text}>Forget Password?</Text>
//       </Pressable>
//       <View style={styles.lineContainer}>
//         <View style={styles.line}></View>
//         <Text style={{color: Color.inputText}}>or</Text>
//         <View style={styles.line2}></View>
//       </View>
      
//       <Text style={{color: Color.inputText, paddingTop: wp(5),paddingBottom:wp(6),alignSelf:'center' }}>
//         Log in with face ID
//       </Text>
//       <Pressable onPress={()=>{console.log('first')}}>
//       <Image source={require('../../../assets/icons/face-id.png')}
//       style={styles.image}
//       ></Image></Pressable>
      
//         <CustomButton title="Log In" style={{width: wp(90)}} />
//       <View style={{flexDirection: 'row',alignSelf:"center"}}>
//         <Text
//           style={{
//             color: Color.inputText,
//              paddingTop: wp(4)
            
//           }}>
//           Did'nt have an account?{' '}
//         </Text>
//         <Pressable onPress={()=>navigation.navigate('signup')}>
//           <Text
//             style={{
//               color: Color.darkBlue,
//               paddingTop: wp(4),
//               fontSize: FontSize.l,
//               fontFamily: FontFamily.robotoBold,
//             }}>
//             {/* Sign In */}
//             Sign Up
//           </Text>
//           <View></View>
//         </Pressable>
        
//       </View>
//     </AuthLayout>
//   );
// };

// export default Login;

// const styles = StyleSheet.create({
//   text: {
//     color: Color.darkBlue,
//     fontFamily: FontFamily.robotoRegular,
//     fontSize: FontSize.m,
//     // paddingLeft:wp(50),
//     marginLeft: wp(57),
//     paddingTop: wp(3),
//     fontWeight: '699',
//   },
//   lineContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingTop: wp(7),
//   },
//   line: {
//     width: wp(40),
//     borderBottomWidth: 1,
//     borderColor: Color.inputField,
//     marginRight: wp(1),
//   },
//   line2: {
//     width: wp(41),
//     borderBottomWidth: 1,
//     borderColor: Color.inputField,
//     marginLeft: wp(1),
//   },
//   image:{
//     height:wp(20),
//     width:wp(20),
//     resizeMode:'contain',
//     alignSelf:'center'
//   },
// });

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from '../../common/Login'

const LoginEmployee = () => {
  // const data = route.params
  // console.log("name",data)
  return (
<Login from={'employee'}  />
  )
}

export default LoginEmployee

const styles = StyleSheet.create({})