import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import UpdateProfileLayout from '../../../layout/UpdateProfileLayout'
import CustomTextInput from '../../../components/CustomTextInput'
import CustomButton from '../../../components/CustomButton'
import { wp } from '../../../utils/utils'
import PopUp from '../../../modals/PopUp'
import { useSelector } from 'react-redux'
import Localization from '../../../constants/localization'
import Popup from '../../../modals/PopUp'

const UpdatePassword = ({from}) => {
          const [sendVisible,SetSendVisible]=useState(false)
          const {lang} =useSelector(state=>state.language)
  return (
   <UpdateProfileLayout
   heading={Localization.password[lang]}
   subHeading={Localization.change_password[lang]}
   notify
   >
<CustomTextInput
        placeholder={Localization.current_password[lang]}
        imageSource={require('../../../assets/icons/password.png')}
        secureTextEntry={true} // Enable password toggle
      />
      <CustomTextInput
        placeholder={Localization.new_password[lang]}
        imageSource={require('../../../assets/icons/password.png')}
        secureTextEntry={true} // Enable password toggle
      />
      <CustomTextInput
      placeholder={Localization.confirm_password[lang]}
      imageSource={require('../../../assets/icons/password.png')}
      secureTextEntry={true} // Enable password toggle
    />
    <CustomButton 
    title={Localization.update_password[lang]}
    style={{marginBottom:wp(5)}}
    onPress={()=>{SetSendVisible(true)}}
    />
 <Popup visible={sendVisible}
       handleClose={()=>{SetSendVisible(false)}}
       iconSource={require('../../../assets/icons/check.png')}
       mainHeading={Localization.updated_successfully[lang]}
       description={Localization.password_update_success[lang]}
       status={Localization.successfully[lang]}
       btnTitle={Localization.done[lang]}
       />
   </UpdateProfileLayout>
  )
}

export default UpdatePassword

const styles = StyleSheet.create({})