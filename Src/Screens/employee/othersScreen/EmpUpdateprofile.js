import { StyleSheet, Text, View ,Image } from 'react-native'
import React from 'react'
import UpdateProfileLayout from '../../../layout/UpdateProfileLayout'
import { Color ,FontFamily ,FontSize } from '../../../constants/style'
import { wp } from '../../../utils/utils'
import CustomTextInput from '../../../components/CustomTextInput'
import DropdownWithIcons from '../../../components/DropdownWithIcons'
import CustomButton from '../../../components/CustomButton'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const EmpUpdateprofile = () => {
    let fruits=['a','b','c']
    let newFruits = [...fruits]
    newFruits.push('e')
    console.log('fruits',fruits)
    console.log('newfirst',newFruits)
  return (
<UpdateProfileLayout 
heading={'Update Profile'}
headingBottom={'Enter Profile Details'}
>
{/* <View style={styles.container}> */}
<KeyboardAwareScrollView
    //   extraScrollHeight={20}
      enableOnAndroid
      keyboardShouldPersistTaps="handled"
        style={styles.container}
       >
     <Image
     source={require('../../../assets/images/headerP.jpg')}
     style={styles.img}
     />
     <View style={styles.imgeditcontainer}>
      <Image
     source={require('../../../assets/icons/edit.png')}
     style={styles.imgedit}
     />
     </View>

    <Text style={styles.text}>William Karlsson</Text>
    <View style={{top:wp(-20)}}>
    <CustomTextInput
    imageSource={require('../../../assets/icons/name.png')}
    placeholder={'Name'}
    />
    <DropdownWithIcons/>
    <CustomTextInput
    imageSource={require('../../../assets/icons/mailicon.png')}
    placeholder={'Email'}
    />
    <CustomTextInput
    imageSource={require('../../../assets/icons/cvr.png')}
    placeholder={'Cvr No.'}
    />
    <CustomButton
    title={'Update'}
    />
    </View>
{/* </View> */}
</KeyboardAwareScrollView>

</UpdateProfileLayout>
  )
}

export default EmpUpdateprofile

const styles = StyleSheet.create({
    container:{
        backgroundColor:Color.white,
        flex:1,
        marginTop:wp(15),
        borderTopLeftRadius:wp(5),
        borderTopRightRadius:wp(5),
        padding:wp(5),
        overflow:'visible'
    },
    img:{
            height:wp(25),
            width:wp(25),
            borderRadius:wp(12.5),
            alignSelf:"center",
            top:wp(-15),
            borderWidth:2,
            borderColor:Color.darkBlue,
            // zIndex:-1
            // overflow:'scroll'
        },
        imgeditcontainer:{
            height:wp(7),
            width:wp(7),
            borderRadius:wp(3.5),
            backgroundColor:Color.darkBlue,
            borderWidth:2,
            borderColor:Color.lightBlue,
            top:wp(-32.5),
            right:(-193)

        },
        imgedit:{
            height:wp(2.5),
            width:wp(2.5),
            marginTop:wp(1.5),
            alignSelf:'center',
            resizeMode:"contain",
            
        },
        text:{
            alignSelf:'center',
            color:Color.darkBlue,
            fontFamily:FontFamily.robotoRegular,
            fontSize:FontSize.xxl,
            // marginBottom:wp(7),
            top:wp(-20)
        },
})