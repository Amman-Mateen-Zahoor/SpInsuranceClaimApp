import { Image, Pressable, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import UpdateProfileLayout from '../../../layout/UpdateProfileLayout'
import { wp } from '../../../utils/utils'
import { Color, FontFamily, FontSize } from '../../../constants/style'
import ToggleSwitch from 'toggle-switch-react-native'
const Item =({imgSourceleft,renderRightIcon,heading1,heading2,isToggle})=>{
 
  return(
    <Pressable  disabled={isToggle} onPress={()=>console.log('first')}>
  <View style={styles.Content}> 
  <Image
  source={imgSourceleft}
  style={styles.icon1}
  />
  <View style={styles.containerHeadings}>
   <Text style={styles.contentHeading1}>{heading1}</Text>
   <Text style={styles.contentHeading2}>{heading2}</Text>
  </View>
  {renderRightIcon}
 </View>
 </Pressable>

)}

const EmpSetting = () => {
  const [toggleSwitch,setToggleSwitch] = useState();

  return (
 <UpdateProfileLayout
 heading={'Settings'}
 subHeading={'Change settings'}
 title={'General Settings'}
settingStyle={{ paddingVertical:wp(5)}}
 >  
 <Item
 isToggle
 heading1={'Face ID'}
 heading2={'Enable/Disable'}
 imgSourceleft={require('../../../assets/icons/face-id.png')}
renderRightIcon={<ToggleSwitch
  isOn={toggleSwitch}
  onColor={Color.darkBlue}
  offColor={Color.inputField}
  size='small'
  onToggle={setToggleSwitch}
  />}
 />
 <Item
 imgSourceleft={require("../../../assets/icons/language.png")}
  heading1={"Language"}
  heading2={'Change Language'}
renderRightIcon ={
  <Image
  source={require('../../../assets/icons/arrowright.png')}
  style={styles.icon2}
  /> }
 />
   <Item
 imgSourceleft={require("../../../assets/icons/lock.png")}
  heading1={"Password"}
  heading2={'Change Password'}
renderRightIcon ={
  <Image
  source={require('../../../assets/icons/arrowright.png')}
  style={styles.icon2}
  /> }
 />
 <Item
 heading1={"Privacy Policy"}
 heading2={"Read Privacy Policy"}
 imgSourceleft={require('../../../assets/icons/privacy-policy.png')}
 />
 <Item
 heading1={"Terms & Conditions"}
 heading2={"Read Terms & Conditions"}
 imgSourceleft={require('../../../assets/icons/terms-and-conditions.png')}
 />
 
    <Item
 imgSourceleft={require("../../../assets/icons/contact-us.png")}
  heading1={"Contact Us"}
  heading2={'Get In Touch'}
renderRightIcon ={
  <Image
  source={require('../../../assets/icons/arrowright.png')}
  style={styles.icon2}
  /> }
 />
 <Item
 heading1={"Delete"}
 heading2={"Click to delete account"}
 imgSourceleft={require('../../../assets/icons/delete-account.png')}
 />
 <Item
 heading1={"Log Out"}
 heading2={"Click To Log Out"}
 imgSourceleft={require('../../../assets/icons/logout.png')}
 />
 
  
  

 </UpdateProfileLayout>
  )
}

export default EmpSetting

const styles = StyleSheet.create({

  Content:{
    flexDirection:"row",
    paddingBottom:wp(5),
    alignItems:'center'
  },
  icon1:{
    height:wp(6),
    width:wp(6),

  },
  icon2:{
    height:wp(3),
    width:wp(3),
    resizeMode:'contain'
    
  },
  contentHeading1:{
    color:Color.coal,
    fontFamily:FontFamily.robotoBold,
    fontSize:FontSize.l
  },
  contentHeading2:{
    color:Color.text,
    fontFamily:FontFamily.robotoRegular,
    fontSize:FontSize.m
  },
  containerHeadings:{
  marginLeft:wp(4),
  flex:1
  }

})