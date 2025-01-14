import {Image, TouchableWithoutFeedback, StyleSheet, Text, TouchableOpacity, View, Keyboard} from 'react-native';
import React, { useLayoutEffect } from 'react';
import {Color, FontFamily, FontSize} from '../constants/style';
import {wp} from '../utils/utils';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const UpdateProfileLayout = ({heading,headingBottom,children,style}) => {
    const navigation =useNavigation()
    //  useLayoutEffect(() => {
    //     if (Platform.OS == 'android') {
    //       StatusBar.setTranslucent(true);
    //       StatusBar.setBackgroundColor('transparent');
    //     }
    
    //     StatusBar.setHidden(false);
    //     StatusBar.setBarStyle('light-content');
    //   }, []);
  const {top} = useSafeAreaInsets();
  return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={[styles.topContainer,style]}>
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
        <View>
        <Text numberOfLines={1} style={styles.txtheader}>
          {heading}
        </Text>
        <Text numberOfLines={1} style={styles.txtheader1}>
           {headingBottom}
        </Text>
        </View>
        <TouchableOpacity>
          <Image
            source={require('../assets/icons/notifications.png')}
            style={styles.icon2}
          />
          <Text style={styles.badge} />
        </TouchableOpacity>
      </View>
      {children}
    </View>
    </TouchableWithoutFeedback>
  );
};

export default UpdateProfileLayout;

const styles = StyleSheet.create({
  bgImg: {
    position: 'absolute',
    right: 0,
    top:0,

  },
  topContainer: {
    backgroundColor: Color.darkBlue,
    paddingTop: wp(2),
    // overflow:'hidden',
    flex:1
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
    fontSize: FontSize.xxxl,
  },
  txtheader1: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.m,
    alignSelf:"center",
    marginTop:wp(2)
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
});
