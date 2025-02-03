import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CommonLayout from '../../../layout/CommonLayout'
import Questions from '../../../components/Questions'
import { wp } from '../../../utils/utils'
import CustomButton from '../../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import Localization from '../../../constants/localization'
const ListItems =[{label:'Car'},{label:'Bike'}]

const EmpQuestionnaire = () => {
  const navigation = useNavigation()
  const {lang} = useSelector(state=>state.language)
  return (
   <CommonLayout
   heading={Localization.questionnaire[lang]}
   >
  
  <Questions 
  placeholder={"Select Vehicle"}
ListItems={ListItems}
customDropdown/>
     <Questions
  placeholder={"Enter Date of Injury"}
    customDate
  />
      <Questions
  placeholder={"Enter Time of Injury"}
    customTime
  />
  <Questions
  simpleTextInput
  placeholder={'Enter Vehicle Number'}
  />

    <Questions 
  placeholder={"Select Vehicle Type"}
  customDropdown/>
  <CustomButton
   title={Localization.next[lang]}
   onPress={()=>(navigation.navigate('EmpNextQuestionnare'))}
  />
   </CommonLayout>
  )
}

export default EmpQuestionnaire

const styles = StyleSheet.create({
   icon: {
      width: wp(4),
      height: wp(4),
      resizeMode: 'contain',
      marginRight: wp(3),
    },
})