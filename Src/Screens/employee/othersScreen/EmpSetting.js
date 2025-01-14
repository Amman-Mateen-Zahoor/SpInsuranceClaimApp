import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UpdateProfileLayout from '../../../layout/UpdateProfileLayout'
import { wp } from '../../../utils/utils'
import { FontFamily, FontSize } from '../../../constants/style'
import CustomTextInput from '../../../components/CustomTextInput'

const EmpSetting = () => {
  return (
 <UpdateProfileLayout
 heading={'Settings'}
 subHeading={'Change settings'}
 title={'General Settings'}

 >
  <CustomTextInput
        imageSource={require('../../../assets/icons/name.png')}
        placeholder={'Name'}
      />
       <CustomTextInput
        imageSource={require('../../../assets/icons/name.png')}
        placeholder={'Name'}
      />
      <CustomTextInput
        imageSource={require('../../../assets/icons/name.png')}
        placeholder={'Name'}
      />
      <CustomTextInput
        imageSource={require('../../../assets/icons/name.png')}
        placeholder={'Name'}
      />
   
 
      
      
 </UpdateProfileLayout>
  )
}

export default EmpSetting

const styles = StyleSheet.create({

})