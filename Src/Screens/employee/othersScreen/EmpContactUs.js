import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UpdateProfileLayout from '../../../layout/UpdateProfileLayout'
import CustomTextInput from '../../../components/CustomTextInput'
import { wp } from '../../../utils/utils'
import { useSelector } from 'react-redux'
import Localization from '../../../constants/localization'

const EmpContactUs = () => {
  const {lang} =useSelector(state=>state.language)
  return (
<UpdateProfileLayout 
heading={Localization.contact_us[lang]}
subHeading={Localization.get_in_touch[lang]}
notify
settingStyle={{marginBottom:wp(5)}}
>
<CustomTextInput
        imageSource={require('../../../assets/icons/name.png')}
        text2={'William Karlson'}
        contactUS
      />
      <CustomTextInput
        imageSource={require('../../../assets/icons/phone.png')}
        text2={'+46 123 456 789'}
        contactUS
      />
      <CustomTextInput
        imageSource={require('../../../assets/icons/mailicon.png')}
        text2={'williamKarlson@gmail.com'}
        contactUS
      />
      
</UpdateProfileLayout>
  )
}

export default EmpContactUs

const styles = StyleSheet.create({})

