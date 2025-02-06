import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { wp } from '../utils/utils';
import { Color, FontFamily, FontSize } from '../constants/style';
import { useSelector } from 'react-redux';
import Localization from '../constants/localization';

const CompDamageCard = ({item}) => {
  const {lang} = useSelector(state => state.language);                           
  return  (
     <View style={styles.container2}>
         <Image
           source={item.img}
           style={styles.container2icon}
         />
       {/* Text Views */}
       {/* Main */}
       <View style={styles.textmaincontainer}>
         {/* TextTop */}
         <View style={styles.textcontainer}>
           <Text style={styles.toptxt}>{item.name}</Text>
         </View>
         {/* textbottom */}
         <View style={[styles.textcontainer]}>
           <Text style={styles.toptxtLft}>{Localization.damage_type[lang]}</Text>
           <Text style={styles.toptxtrgt}>{item.type}</Text>
         </View>
         <Pressable
         style={{borderWidth:1,borderColor:Color.darkBlue,width:wp(20),height:wp(6),padding:1,marginTop:wp(2),borderRadius:wp(1)}}
         >
            <Text style={{color:Color.darkBlue,fontFamily:FontFamily.robotoRegular,fontSize:FontSize.s,alignSelf:'center'}}>Report.pdf</Text>
         </Pressable>
       </View>
                <Text
           style={styles.lastcontainertxt}>
           {item.date}
         </Text>

     </View>
   )
  }

export default CompDamageCard

const styles = StyleSheet.create({
    container1: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding:wp(5),
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
      backgroundColor: Color.white,
      flexDirection: 'row',
      padding: wp(3),
      borderRadius:wp(2),
      elevation:3,
      marginBottom:wp(3)

    },
        toptxt: {
      color: Color.darkBlue,
      fontFamily: FontFamily.robotoRegular,
      fontSize: FontSize.m,
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
      height: wp(10),
      width: wp(10),
      borderRadius: wp(1),
      margin:wp(1)
    },
    // iconimg: {
    //   height: wp(8),
    //   width: wp(8),
    // },
    textmaincontainer: {
      flex: 1,
      marginLeft: wp(3) 
    },
      textcontainer:{flexDirection: 'row'},
      lastcontainertxt:{
        color: Color.darkBlue,
        fontFamily: FontFamily.robotoRegular,
        fontSize: FontSize.m,
      },
  });
  