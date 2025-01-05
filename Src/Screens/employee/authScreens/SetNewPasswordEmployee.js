// import { Modal, StyleSheet, Text, View } from 'react-native'
// import React, { useState } from 'react'
// import AuthLayout from '../../layout/AuthLayout'
// import CustomTextInput from '../../components/CustomTextInput';
// import CustomButton from '../../components/CustomButton';
// import { wp } from '../../utils/utils';
// import UpdatedPasswordPopUp from '../../modals/UpdatedPasswordPopUp';


// const SetNewPassword = ({navigation}) => {
//       const [inputValuePassword, setInputValuePassword] = useState('');
//       const [inputValuePasswordNew, setInputValuePasswordNew] = useState('');
//       const [sendVisible,SetSendVisible]=useState(false)
//   return (
// <AuthLayout 
// text1={"Set "}
// text2={"New Password"}
// text3={"Please add new password here"}
// mainButtonText={"Submit"}
// >
// <CustomTextInput
//         placeholder="Password"
//         imageSource={require('../../../assets/icons/password.png')}
//         value={inputValuePassword}
//         onChangeText={setInputValuePassword}
//         secureTextEntry={true} // Enable password toggle
//       />
//       <CustomTextInput
//         placeholder="Confirm Password"
//         imageSource={require('../../../assets/icons/password.png')}
//         value={inputValuePasswordNew}
//         onChangeText={setInputValuePasswordNew}
//         secureTextEntry={true} // Enable password toggle
//       />
      
       
    
//         <CustomButton title="Submit" style={{width: wp(90)}} onPress={()=>{SetSendVisible(true)}} />
//           <UpdatedPasswordPopUp visible={sendVisible} handleClose={()=>{SetSendVisible(false)}}/>
// </AuthLayout>
//   )
// }

// export default SetNewPassword

// const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SetNewPassword from '../../common/SetNewPassword'

const SetNewPasswordEmployee = () => {
  return (
 <SetNewPassword/>
  )
}

export default SetNewPasswordEmployee

const styles = StyleSheet.create({})