import {Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Color, FontFamily, FontSize} from '../constants/style';
import {wp} from '../utils/utils';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const Header = ({heading,search}) => {
    const navigation =useNavigation()
  const {top} = useSafeAreaInsets();
  return (
    <View style={styles.topContainer}>
      <Image
        source={require('../assets/images/auth-background.png')}
        style={styles.bgImg}
      />
      <View style={[styles.header, {marginTop: wp(4) + top}]}>
        <TouchableOpacity 
        onPress={()=>{navigation.goBack()}}
        hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}>
          <Image
            source={require('../assets/icons/leftarrow.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text numberOfLines={1} style={[styles.txtheader,search&&styles.noNotify]} >
        {search ? 'Notifications' : heading }
        </Text>
      { !search&&(
        <TouchableOpacity onPress={()=>(navigation.navigate('EmpNotify'))}>
          <Image
            source={require('../assets/icons/notifications.png')}
            style={styles.icon2}
          />
          <Text style={styles.badge} />
        </TouchableOpacity>)}
      </View>
      { search && (
         <View style={styles.searchContainer}>
                 <TextInput
                 placeholder='Search...'
                 placeholderTextColor={Color.inputText}
                 style={{flex:1}}
                 />
   <Pressable
   hitSlop={{left:5,right:5,bottom:5,top:5}}
   onPress={()=>(console.log("first"))}>
       <Image 
       source={require('../assets/icons/search.png')}
       style={{
        height:wp(5),
        width:wp(5)
       }}
       /></Pressable>
                 </View>)
                 }
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  bgImg: {
    position: 'absolute',
    right: 0,
    top:0,

  },
  topContainer: {
    backgroundColor: Color.darkBlue,
    borderBottomLeftRadius: wp(7),
    borderBottomRightRadius: wp(7),
    paddingVertical: wp(2),
    overflow:'hidden'
  },
  header: {
    flexDirection: 'row',
    marginBottom: wp(5),
    // paddingHorizontal: wp(6),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(6),
  },
  icon: {
    height: wp(5),
    width: wp(5),
    // borderRadius: wp(5),
    resizeMode: 'contain',
  },
  icon2: {
    height: wp(5),
    width: wp(5),
    borderRadius: wp(2.5),
    resizeMode: 'contain',
  },
  txtheader: {
    fontFamily: FontFamily.robotoBold,
    color: Color.white,
    fontSize: FontSize.xl,


    
  },
  badge: {
    height: wp(1.5),
    width: wp(1.5),
    borderRadius: wp(0.7),
    backgroundColor: 'red',
    position: 'absolute',
    // marginLeft: wp(5),

    top: -2,
    right: -1,
  },
  searchContainer:{
    backgroundColor:Color.white,
    marginHorizontal:wp(5),
    marginBottom:wp(5),
    borderRadius:wp(4),
    paddingHorizontal:wp(3),
    flexDirection:"row",
    justifyContent:'center',
    alignItems:'center',
  },
  noNotify:{
    flex:1,
    textAlign:'center'
  }
});
