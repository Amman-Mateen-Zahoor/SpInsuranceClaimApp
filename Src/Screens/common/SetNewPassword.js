import { Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AuthLayout from '../../layout/AuthLayout'
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import { wp } from '../../utils/utils';
import PopUp from '../../modals/PopUp';
import Localization from '../../constants/localization';
import { useSelector } from 'react-redux';

const SetNewPassword = ({from}) => {
      const {lang} = useSelector(state => state.language);                           
      const [inputValuePassword, setInputValuePassword] = useState('');
      const [inputValuePasswordNew, setInputValuePasswordNew] = useState('');
      const [sendVisible,SetSendVisible]=useState(false)
  return (
<AuthLayout 
text1={Localization.set[lang]}
text2={Localization.new_password[lang]}
text3={Localization.add_new_password[lang]}

>
<CustomTextInput
        placeholder={Localization.password[lang]}
        imageSource={require('../../assets/icons/password.png')}
        value={inputValuePassword}
        onChangeText={setInputValuePassword}
        secureTextEntry={true} // Enable password toggle
      />
      <CustomTextInput
        placeholder={Localization.confirm_password[lang]}
        imageSource={require('../../assets/icons/password.png')}
        value={inputValuePasswordNew}
        onChangeText={setInputValuePasswordNew}
        secureTextEntry={true} // Enable password toggle
      />
      
       
    
      <CustomButton title={Localization.submit[lang]} style={{width: wp(90)}} onPress={()=>{SetSendVisible(true)}} />
      <PopUp visible={sendVisible}
       handleClose={()=>{SetSendVisible(false)}}
       iconSource={require('../../assets/icons/check.png')}
       mainHeading={Localization.updated_successfully[lang]}
       description={Localization.password_update_success[lang]}
       status={Localization.successfully[lang]}
       btnTitle={Localization.done[lang]}
       />
</AuthLayout>
  )
}

export default SetNewPassword

const styles = StyleSheet.create({})