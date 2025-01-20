import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react'
import {Color, FontFamily, FontSize} from '../constants/style';
import {wp} from '../utils/utils';
const NotifyCard = ({item}) => {
      const read =false
    
    return (
        <View style={[styles.content,read&&{backgroundColor:Color.adjustableLightBlue(0.1),elevation:0}]}>
          <View style={styles.icon1Container}>
            <Image source={item.icon1} style={styles.icon1} />
          </View>
          <View style={styles.containerTxt}>
            <Text style={styles.heading}>{item.heading}</Text>
            <Text numberOfLines={2} style={styles.containerContent}>
              {item.content}
            </Text>
            <Text style={styles.containerTime}>{item.time}</Text>
          </View>
           <Pressable style={{alignSelf:"flex-end",marginLeft:wp(2)}}> 
          <Image source={item.icon2} style={styles.icon2} /></Pressable>
        </View>
      );
}

export default NotifyCard

const styles = StyleSheet.create({
    
  content: {
    padding: wp(5),
    flexDirection: 'row',
    margin: wp(2),
    backgroundColor: Color.white,
    borderRadius: wp(3),
    elevation: 2,
  },
  icon1: {
    height: wp(10),
    width: wp(10),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  icon1Container: {
    height: wp(15),
    width: wp(15),
    borderRadius: wp(7.5),
    backgroundColor: Color.white,
    justifyContent: 'center',
    elevation: 4,
  },
  heading: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.l,
    color: Color.coal,
  },
  containerContent: {
    marginTop: wp(2),
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.m,
    color: Color.inputText,
  },
  containerTxt: {
    flex: 1,
    marginLeft: wp(5),
  },
  containerTime: {
    marginTop: wp(2),
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.m,
    color: Color.inputText,
  },
  icon2: {
    height: wp(5),
    width: wp(5),
    resizeMode: 'contain',
     
},
})