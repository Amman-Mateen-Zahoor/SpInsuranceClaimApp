import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CommonLayout from '../../../layout/CommonLayout'
import { Color, FontFamily, FontSize } from '../../../constants/style'
import { wp } from '../../../utils/utils'
import CustomButton from '../../../components/CustomButton'
import PopUp from '../../../modals/PopUp'
import { useSelector } from 'react-redux'
import Localization from '../../../constants/localization'

const NextQuestionnare = ({from,companyNotify}) => {
const [sendVisible,SetSendVisible]=useState(false)
const {lang} =useSelector(state=>state.language)
  return (
   <CommonLayout
   heading={Localization.questionnaire[lang]}
   companyNotify={companyNotify}
   >
  <Text style={styles.heading}>{Localization.upload_pictures_damage[lang]} </Text>
  <Pressable style={styles.content}>
    <Image
    source={require('../../../assets/icons/upload.png')}
    style={styles.Img}
    />
  <Text style={styles.txt}>{Localization.attach_media[lang]} </Text>

  </Pressable>
   <Pressable style={styles.btnContainer} onPress={()=>(console.log("first"))}>
        <Image
                 source={require('../../../assets/icons/capture.png')}
                 style={styles.icon}
               />
        <Text style={styles.btntext}>{Localization.capture[lang]}{'  '}</Text>
      </Pressable>
  <CustomButton
  title={Localization.submit_damage_report[lang]}
  style={{marginTop:wp(7)}}
  onPress={()=>{SetSendVisible(true)}}
  />
  <PopUp visible={sendVisible}
       handleClose={()=>{SetSendVisible(false)}}
       iconSource={require('../../../assets/icons/check.png')}
       mainHeading={Localization.submitted_successfully[lang]}
       description={Localization.damage_report_submission_success[lang]}
       status={Localization.submitted_successfully[lang]}
       btnTitle={Localization.done[lang]}
       />
   </CommonLayout>
  )
}

export default NextQuestionnare

const styles = StyleSheet.create({
  heading:{
    fontFamily:FontFamily.robotoBold,
    fontSize:FontSize.l,
    color:Color.coal,
    alignSelf:'center'
  },
  Img:{
    height:wp(10),
    width:wp(10),
    alignSelf:'center',


  },
  content:{
    marginVertical:wp(5),
    padding:wp(5),
    borderWidth:1,
    borderColor:Color.inputField,
    borderRadius:wp(3),

    
  },
  txt:{
    fontFamily:FontFamily.poppinsRegular,
    fontSize:FontSize.m,
    color:Color.inputText,
    alignSelf:'center',
    marginTop:wp(3)

  },
  btnContainer: {
    flexDirection: 'row',
    height: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(3),
    borderWidth:1,
    borderColor:Color.inputField
    
  },
  btntext: {
    fontFamily:FontFamily.notoSansMedium,
    fontSize: FontSize.l,
    color: Color.inputText,
  },
  icon: {
    width: wp(4),
    height: wp(4),
    resizeMode: 'contain',
    marginRight: wp(3),
  },
})