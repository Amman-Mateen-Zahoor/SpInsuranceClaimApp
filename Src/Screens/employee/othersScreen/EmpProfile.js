import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CommonLayout from '../../../layout/CommonLayout'
import { wp } from '../../../utils/utils'
import { Color, FontFamily, FontSize } from '../../../constants/style'
import ProfileEntity from '../../../components/ProfileEntity'
import CustomButton from '../../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import EmpUpdateprofile from './EmpUpdateprofile'

const EmpProfile = () => {
    const  navigation = useNavigation()
  return (
  <CommonLayout
  heading={"Profile"}
  >
 <Image
 source={require('../../../assets/images/headerP.jpg')}
 style={styles.img}
 />
<Text style={styles.text}>William Karlsson</Text>
<View style={styles.container}>
    <ProfileEntity
    text1={"Phone No."}
    text2={"+92 222 0022002"}
    />
    <ProfileEntity
    text1={"Email"}
    text2={"williamkarlsson@gmail.com"}
    />
    <ProfileEntity
    text1={"Company Name"}
    text2={"Cubix Solutions"}
    />
    <ProfileEntity
    style={{marginBottom:0}}
    text1={"CVR No."}
    text2={"20700211"}
    />
    <CustomButton title={"Edit"} onPress={()=>{navigation.navigate('EmpUpdateProfile')}} />
</View>
  </CommonLayout>
  )
}

export default EmpProfile

const styles = StyleSheet.create({
    img:{
        height:wp(25),
        width:wp(25),
        borderRadius:wp(12.5),
        alignSelf:"center",
        marginTop:wp(5)
    },
    text:{
        alignSelf:'center',
        color:Color.darkBlue,
        fontFamily:FontFamily.robotoRegular,
        fontSize:FontSize.xxl,
        marginTop:wp(3),
        marginBottom:wp(7)
    },
    container:{
        paddingHorizontal:wp(5),
        

    }
})