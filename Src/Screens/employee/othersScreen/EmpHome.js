// import React, {useLayoutEffect, useState} from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   Platform,
//   StatusBar,
//   Pressable,
//   TouchableWithoutFeedback,
//   Keyboard,
// } from 'react-native';
// import {Color, FontFamily, FontSize} from '../../../constants/style';

// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import { wp } from '../../../utils/utils';

// const EmpHome = ({children, text1, text2, text3, CustomStyle}) => {
//   // useLayoutEffect(() => {
//   //   if (Platform.OS === 'android') {
//   //     StatusBar.setTranslucent(true);
//   //     StatusBar.setBackgroundColor('transparent');
//   //   }
//   //   StatusBar.setHidden(false);
//   //   StatusBar.setBarStyle('light-content');
//   // }, []);
//   // const {top}=useSafeAreaInsets()

//   return (

//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//     <View style={[styles.container ]}>
//         <Text style={[styles.textHello ]}>{text1}</Text>
//         <Text style={styles.text2}>{text2}</Text>
//         {/* Apply CustomStyle correctly here */}
//         <Text style={[styles.text3, CustomStyle]}>{text3}</Text>

//       <Image
//         source={require('../../../assets/images/auth-background.png')}
//         style={styles.backgroundImage}
//       />

//       <KeyboardAwareScrollView
//       extraScrollHeight={20}
//       enableOnAndroid
//       keyboardShouldPersistTaps="handled"
//         style={{
//           marginTop: wp(15),
//           borderTopLeftRadius: wp(7),
//           backgroundColor: Color.white,
//           borderTopRightRadius: wp(7),
//         }}
//         contentContainerStyle={styles.content}>
//         {children}
//       </KeyboardAwareScrollView>
//     </View>
//     </TouchableWithoutFeedback>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: Color.darkBlue,
//     flex: 1,
//     justifyContent: 'flex-start',
//     // paddingTop: wp(20),
//   },
//   backgroundImage: {
//     position: 'absolute',
//     right: 0,

//   },
//   textHello: {
//     fontFamily: FontFamily.robotoBold,
//     fontSize: FontSize.xxxl,
//     color: Color.white,
//     paddingLeft: wp(6),
//     marginTop:wp(17)
//   },
//   text2: {
//     fontFamily: FontFamily.robotoBold,
//     fontSize: FontSize.xxxl,
//     color: Color.lightBlue,
//     paddingLeft: wp(6),
//     paddingTop: wp(1),
//   },
//   text3: {
//     fontFamily: FontFamily.robotoRegular,
//     fontSize: FontSize.m, // Default font size
//     color: Color.lightBlue,
//     paddingLeft: wp(6),
//     paddingTop: wp(2),
//   },
//   content: {
//     flexGrow: 1,
//     padding: wp(5),
//   },
// });

// export default EmpHome;

import {StyleSheet, Text, View, FlatList, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import CommonLayout from '../../../layout/CommonLayout';
import {wp} from '../../../utils/utils';
import {Color, FontFamily, FontSize} from '../../../constants/style';

const EmpHome = () => {
  const [data, setData] = useState([
    {
      icon: require('../../../assets/icons/car.png'),
      heading: 'Vehicle',
      description: 'Lorem Ipsum is simply dummy text of the printing.',
    },
    {
      icon: require('../../../assets/icons/car.png'),
      heading: 'Vehicle',
      description: 'Lorem Ipsum is simply dummy text of the printing.',
    },
    {
      icon: require('../../../assets/icons/car.png'),
      heading: 'Vehicle',
      description: 'Lorem Ipsum is simply dummy text of the printing.',
    },
    {
      icon: require('../../../assets/icons/car.png'),
      heading: 'Vehicle',
      description: 'Lorem Ipsum is simply dummy text of the printing.',
    },
    {
      icon: require('../../../assets/icons/car.png'),
      heading: 'Vehicle',
      description: 'Lorem Ipsum is simply dummy text of the printing.',
    },
    {
      icon: require('../../../assets/icons/car.png'),
      heading: 'Vehicle',
      description: 'Lorem Ipsum is simply dummy text of the printing.',
    },
    {
      icon: require('../../../assets/icons/car.png'),
      heading: 'Vehicle',
      description: 'Lorem Ipsum is simply dummy text of the printing.',
    },
    {
      icon: require('../../../assets/icons/car.png'),
      heading: 'Vehicle',
      description: 'Lorem Ipsum is simply dummy text of the printing.',
    },
    {
      icon: require('../../../assets/icons/car.png'),
      heading: 'Vehicle',
      description: 'Lorem Ipsum is simply dummy text of the printing.',
    },
    {
      icon: require('../../../assets/icons/car.png'),
      heading: 'Vehicle',
      description: 'Lorem Ipsum is simply dummy text of the printing.',
    },
    {
      icon: require('../../../assets/icons/car.png'),
      heading: 'Vehicle',
      description: 'Lorem Ipsum is simply dummy text of the printing.',
    },
    {
      icon: require('../../../assets/icons/car.png'),
      heading: 'Vehicle',
      description: 'Lorem Ipsum is simply dummy text of the printing.',
    },
    {
      icon: require('../../../assets/icons/car.png'),
      heading: 'Vehicle',
      description: 'Lorem Ipsum is simply dummy text of the printing.',
    },
    
  ]);
  return (
    <CommonLayout home={true}>
      <FlatList
        data={data}
        contentContainerStyle={{
          //   alignItems: 'center',
          paddingVertical: wp(3),
          paddingBottom: wp(10),
          paddingHorizontal: wp(5),
        }}
        renderItem={({item}) => {
          return (
            <Pressable
              onPress={() => console.log('first')}
              style={styles.content}>
              <Image
                source={require('../../../assets/images/homecontentbgtop.png')}
                style={styles.topbgimg}
              />
              <Image
                source={require('../../../assets/images/homecontentbgbtm.png')}
                style={styles.btmimg}
              />
              <View style={styles.contentIcon}>
                <Image source={item.icon} style={styles.contentIconImg} />
              </View>
              {/* <Text>{item.content}</Text> */}
              <Text numberOfLines={1} style={styles.contentHeading}>
                {item.heading}
              </Text>
              <Text numberOfLines={3} style={styles.contentDescription}>
                {item.description}
              </Text>
            </Pressable>
          );
        }}
        numColumns={2}
      />
    </CommonLayout>
  );
};

export default EmpHome;

const styles = StyleSheet.create({
  content: {
    margin: wp(2),
    padding: wp(4),
    height: wp(45),
    width: wp(41),
    borderRadius: wp(5),
    backgroundColor: Color.darkBlue,
  },
  topbgimg: {
    position: 'absolute',
    left: 0,
    height: wp(20),
    width: wp(27),
    resizeMode: 'contain',
  },
  btmimg: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: wp(20),
    width: wp(18),
    resizeMode: 'contain',
  },
  contentIcon: {
    backgroundColor: Color.lightBlue,
    height: wp(12),
    width: wp(12),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(2.5),
    // margin:wp(4)
  },
  contentIconImg: {
    height: wp(5.5),
    width: wp(5.5),
    resizeMode: 'contain',
  },
  contentHeading: {
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.l,
    color: Color.white,
    paddingTop: wp(3),
  },
  contentDescription: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.m,
    color: Color.white,
    paddingTop: wp(1),
  },
});
