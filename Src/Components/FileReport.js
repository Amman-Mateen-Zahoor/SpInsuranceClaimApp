import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { wp } from '../utils/utils';
import { Color, FontFamily, FontSize } from '../constants/style';
import { useSelector } from 'react-redux';
import Localization from '../constants/localization';

const FileReport = ({item}) => {
  // const {lang} = useSelector(state=>state.language)
  const {lang} = useSelector(state => state.language);                           
  return  (
     <View style={styles.container2}>
       <View style={styles.container2icon}>
         <Image
           source={require('../assets/icons/outerfile.png')}
           style={styles.iconimg}
         />
       </View>
       {/* Text Views */}
       {/* Main */}
       <View style={styles.textmaincontainer}>
         {/* TextTop */}
         <View style={styles.textcontainer}>
           <Text style={styles.toptxtLft}>{Localization.claim_date[lang]}</Text>
           <Text style={styles.toptxtrgt}>{item.date}</Text>
         </View>
         {/* textbottom */}
         <View style={[styles.textcontainer,{marginTop:wp(1)}]}>
           <Text style={styles.toptxtLft}>{Localization.damage_type[lang]}</Text>
           <Text style={styles.toptxtrgt}>{item.type}</Text>
         </View>
       </View>
       {/* btn */}
       <Pressable
         style={styles.containerbtn}>
         <Text
           style={styles.containerbtntxt}>
           {Localization.report_pdf[lang]}
         </Text>
       </Pressable>
     </View>
   )
  }

export default FileReport

const styles = StyleSheet.create({
    container1: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding:wp(5)
    },
    Heading1: {
      color: Color.darkBlue,
      fontFamily: FontFamily.robotoBold,
      fontSize: FontSize.xl,
    },
    btnTop: {
      backgroundColor: Color.darkBlue,
      height: wp(11),
      width: wp(30),
      justifyContent: 'center',
      borderRadius: wp(2.5),
    },
  
    btnTopTxt: {
      alignSelf: 'center',
      fontFamily: FontFamily.robotoRegular,
    },
    container2: {
      backgroundColor: Color.adjustableLightBlue(0.1),
      flexDirection: 'row',
      height: wp(20),
      alignItems: 'center',
      paddingHorizontal: wp(3),
      borderRadius:wp(2),
      marginBottom:wp(4)
    },
    toptxtLft: {
      color: Color.text,
      fontFamily: FontFamily.robotoRegular,
      fontSize: FontSize.m,
    },
    toptxtrgt: {
      color: Color.black,
      fontFamily: FontFamily.robotoRegular,
      fontSize: FontSize.m,
      marginLeft:wp(1)
    },
    container2icon: {
      backgroundColor: Color.adjustableLightBlue(0.2),
      height: wp(8),
      width: wp(8),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: wp(1),
      margin:wp(1)
    },
    iconimg: {
      height: wp(5),
      width: wp(5),
      resizeMode: 'contain',
    },
    textmaincontainer: {
      flex: 1,
      marginLeft: wp(2) 
    },
      textcontainer:{flexDirection: 'row'},
      containerbtn:{
        borderWidth: 1,
        borderColor: Color.darkBlue,
        padding: wp(1),
        borderRadius: wp(2),
        marginLeft: wp(7),
        paddingHorizontal:wp(2)
      },
      containerbtntxt:{
        color: Color.darkBlue,
        alignSelf: 'center',
        fontFamily: FontFamily.robotoRegular,
        fontSize: FontSize.m,
      },
  });
  