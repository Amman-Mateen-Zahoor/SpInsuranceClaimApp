import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import UpdateProfileLayout from '../../../layout/UpdateProfileLayout'
import CustomTextInput from '../../../components/CustomTextInput'
import CustomButton from '../../../components/CustomButton'
import { wp } from '../../../utils/utils'
import PopUp from '../../../modals/PopUp'

const EmpUpdatePassword = () => {
          const [sendVisible,SetSendVisible]=useState(false)
  return (
   <UpdateProfileLayout
   heading={'Password'}
   subHeading={'Change Password'}
   notify
   >
<CustomTextInput
        placeholder="Current Password"
        imageSource={require('../../../assets/icons/password.png')}
        secureTextEntry={true} // Enable password toggle
      />
      <CustomTextInput
        placeholder="New Password"
        imageSource={require('../../../assets/icons/password.png')}
        secureTextEntry={true} // Enable password toggle
      />
      <CustomTextInput
      placeholder="Confirm Password"
      imageSource={require('../../../assets/icons/password.png')}
      secureTextEntry={true} // Enable password toggle
    />
    <CustomButton 
    title={"Update Profile"}
    style={{marginBottom:wp(5)}}
    onPress={()=>{SetSendVisible(true)}}
    />
 <PopUp visible={sendVisible}
       handleClose={()=>{SetSendVisible(false)}}
       iconSource={require('../../../assets/icons/check.png')}
       mainHeading={'Updated Successfully'}
       description={'Your Password has been updated '}
       status={'successfully'}
       btnTitle={"Done"}
       />
   </UpdateProfileLayout>
  )
}

export default EmpUpdatePassword

const styles = StyleSheet.create({})