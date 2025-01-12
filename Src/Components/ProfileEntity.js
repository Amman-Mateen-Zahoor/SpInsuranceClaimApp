import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { wp } from '../utils/utils'
import { Color, FontFamily, FontSize } from '../constants/style'

const ProfileEntity = ({text1,text2,style}) => {
  return (
    <View style={[styles.container,style]}>
      <Text style={styles.txt}>{text1}</Text>
      <Text numberOfLines={1} style={[styles.txt2]}>{text2}</Text>
    </View>
  )
}

export default ProfileEntity

const styles = StyleSheet.create({
    container:{
   
        flexDirection:'row',
        backgroundColor:"white",
        paddingBottom:wp(3),
        borderBottomWidth:1,
        borderColor:Color.inputField ,
        marginBottom:wp(4)    
    },
    txt:{
        color:Color.text,
        fontFamily:FontFamily.poppinsRegular,
        fontSize:FontSize.m,
        width:wp(35),
    },
    txt2:{
        color:Color.coal,
        fontFamily:FontFamily.poppinsRegular,
        fontSize:FontSize.m,
        marginLeft:wp(1),
        flex:1,
        
      
    },
})