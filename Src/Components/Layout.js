// import React, { useLayoutEffect, useState } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   Platform,
//   StatusBar,
//   Pressable,
// } from 'react-native';
// import { Color, FontFamily, FontSize } from '../constants/style';
// import { hp, wp } from '../utils/utils';

// const Layout = ({children, text1 ,text2 ,text3,CustomStyle}) => {
//   useLayoutEffect(() => {
//     if (Platform.OS === 'android') {
//       StatusBar.setTranslucent(true);
//       StatusBar.setBackgroundColor('transparent');
//     }
//     StatusBar.setHidden(false);
//     StatusBar.setBarStyle('light-content');
//   }, []);

//   const dynamicStyle={...styles.text3,...CustomStyle}

//   return (
//     <View style={styles.container}>
//       <View style={{height:wp(22)}}>
//       <Text style={styles.textHello}>{text1}</Text>
//       <Text style={styles.text2}>{text2}</Text>
//       <Text style={dynamicStyle}>{text3}</Text>
//       </View>
//       <Image
//         source={require('../assets/images/auth-background.png')}
//         style={styles.backgroundImage}
//       />
//       <View style={styles.content}>
//         {children}

//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: Color.darkBlue,
//     flex: 1,
//     justifyContent: 'flex-start',
//     paddingTop: wp(20),
//   },
//   backgroundImage: {
//     position: 'absolute',
//     // top: 10,
//     left: wp(24),
//     opacity: 0.5,
//   },
//   textHello:{
//     fontFamily:FontFamily.robotoBold,
//     fontSize:FontSize.xxxl,
//     color:Color.white,
//     paddingLeft:wp(6)
//     },
//     text2:
//     {
//       fontFamily:FontFamily.robotoBold,
//       fontSize:FontSize.xxxl,
//       color:Color.lightBlue,
//       paddingLeft:wp(6),
//       paddingTop:wp(1),

//       },
//       text3:
//       {
//         fontFamily:FontFamily.robotoBold,
//         // fontSize:FontSize.xxxl,
//         fontSize:20,
//         color:Color.lightBlue,
//         paddingLeft:wp(6),

//         },
//   content: {
//     marginTop: wp(10),
//     padding: 20,
//     backgroundColor: Color.white,
//     height: hp(85),
//     alignItems: 'center',
//     borderTopLeftRadius: 25,
//     borderTopRightRadius: 25,
//   }
// });

// export default Layout;

import React, {useLayoutEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  StatusBar,
  Pressable,
} from 'react-native';
import {Color, FontFamily, FontSize} from '../constants/style';
import {hp, wp} from '../utils/utils';
import CustomButton from './CustomButton';

const Layout = ({
  children,
  text1,
  text2,
  text3,
  CustomStyle,
}) => {
  useLayoutEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setTranslucent(true);
      StatusBar.setBackgroundColor('transparent');
    }
    StatusBar.setHidden(false);
    StatusBar.setBarStyle('light-content');
  }, []);

  return (
    <View style={styles.container}>
      <View style={{height: wp(22)}}>
        <Text style={styles.textHello}>{text1}</Text>
        <Text style={styles.text2}>{text2}</Text>
        {/* Apply CustomStyle correctly here */}
        <Text style={[styles.text3, CustomStyle]}>{text3}</Text>
      </View>
      <Image
        source={require('../assets/images/auth-background.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.content}>
        {children}
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.darkBlue,
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: wp(20),
  },
  backgroundImage: {
    position: 'absolute',
    right: 0,
    top:0
  },
  textHello: {
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.xxxl,
    color: Color.white,
    paddingLeft: wp(6),
  },
  text2: {
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.xxxl,
    color: Color.lightBlue,
    paddingLeft: wp(6),
    paddingTop: wp(1),
  },
  text3: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.m, // Default font size
    color: Color.lightBlue,
    paddingLeft: wp(6),
    paddingTop: wp(2),
  },
  content: {
    marginTop: wp(10),
    padding: wp(5),
    backgroundColor: Color.white,
    height: hp(85),
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});

export default Layout;
