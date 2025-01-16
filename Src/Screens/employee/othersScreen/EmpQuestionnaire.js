import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CommonLayout from '../../../layout/CommonLayout'
import Questions from '../../../components/Questions'
import { wp } from '../../../utils/utils'

const EmpQuestionnaire = () => {
  return (
   <CommonLayout
   heading={"Questionnare"}
   >
  
  <Questions 
  placeholder={"Select Vehicle"}
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