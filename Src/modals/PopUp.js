// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   Modal,
//   TouchableWithoutFeedback,
// } from 'react-native';
// import React from 'react';
// import {Color, FontFamily, FontSize} from '../constants/style';
// import {wp} from '../utils/utils';
// import CustomButton from '../components/CustomButton';

// const PopUp = ({
//   visible,
//   handleClose,
//   iconSource,
//   mainHeading,
//   description,
//   status,
// }) => {
//   return (
//     <Modal visible={visible} transparent={true} onRequestClose={handleClose}>
//       <TouchableWithoutFeedback onPress={handleClose}>
//         <View style={styles.main}>
//           <TouchableWithoutFeedback>
//             <View style={styles.contentContainer}>
//               <View style={styles.ImageContainer}>
//                 <Image source={iconSource} style={styles.image} />
//               </View>
//               <Text style={styles.mainHeading}>{mainHeading}</Text>
//               <Text style={styles.description}>{description}</Text>
//               <Text style={styles.status}>{status}</Text>
//               <CustomButton
//                 title="Done"
//                 onPress={handleClose}
//                 style={{width: wp(75), marginBottom: wp(7)}}
//               />
//             </View>
//           </TouchableWithoutFeedback>
//         </View>
//       </TouchableWithoutFeedback>
//     </Modal>
//   );
// };

// export default PopUp;

// const styles = StyleSheet.create({
//   main: {
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   contentContainer: {
//     width: wp(90),
//     backgroundColor: Color.white,
//     borderRadius: wp(8),
//     alignItems: 'center',
//   },
//   image: {
//     resizeMode: 'contain',
//     height: wp(15),
//     width: wp(15),
//   },
//   ImageContainer: {
//     marginTop: wp(10),
//     backgroundColor: Color.darkBlue,
//     height: wp(33),
//     width: wp(33),
//     borderRadius: wp(18),
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   mainHeading: {
//     paddingTop: wp(6),
//     color: Color.darkBlue,
//     fontFamily: FontFamily.robotoBold,
//     fontSize: FontSize.xxxl,
//   },
//   description: {
//     color: Color.coal,
//     fontFamily: FontFamily.robotoRegular,
//     fontSize: FontSize.xl,
//     paddingLeft: wp(10),
//     paddingRight: wp(11),
//     marginTop: wp(5),
//   },
//   status: {
//     color: Color.coal,
//     fontFamily: FontFamily.robotoRegular,
//     fontSize: FontSize.xl,
//     paddingLeft: wp(10),
//     paddingRight: wp(11),
//   },
// });

import {StyleSheet, Text, View, Image, Modal, TouchableWithoutFeedback} from 'react-native';
import React, {useState} from 'react';
import {Color, FontFamily, FontSize} from '../constants/style';
import {wp} from '../utils/utils';
import CustomButton from '../components/CustomButton';

const Popup = ({
  navigation,
  visible,
  handleClose,
  iconSource,
  mainHeading,
  description,
  status,
  delLogin,
  btnTitle,
  delYestitle,
  delNotitle
}) => {
  return (
    <Modal visible={visible} transparent={true} onRequestClose={handleClose}>
      <TouchableWithoutFeedback onPress={handleClose} >
      <View style={styles.main}>
        <TouchableWithoutFeedback>
        <View style={styles.contentContainer}>
          <View style={styles.ImageContainer}>
          <Image source={iconSource}
             style={styles.image}></Image>
          </View>
          <Text style={styles.mainHeading}>{mainHeading}</Text>
          <Text numberOfLines={1} style={styles.description}>{description}</Text>
            {status && (<Text style={styles.status}>{status}</Text>)}
         <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
         {delLogin ? (
  <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
    <CustomButton
      title={delYestitle}
      onPress={handleClose}
      style={{width: wp(30), marginBottom: wp(7)}}
    />
    <CustomButton
      title={delNotitle}
      onPress={handleClose}
      style={{
        width: wp(30),
        marginBottom: wp(7),
        marginLeft: wp(3),
        backgroundColor: '#F5F5F5',
        borderWidth: 1,
        borderColor: Color.inputField,
      }}
      btnTxt={{color: Color.inputText}}
    />
  </View>
) : (
  <CustomButton
    title={btnTitle}
    onPress={handleClose}
    style={{width: wp(70), marginBottom: wp(7)}}
  />
)}

         </View>
        </View>
        </TouchableWithoutFeedback>
      </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default Popup;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    // height:wp(110),
    width: wp(80),
    backgroundColor: Color.white,
    borderRadius: wp(4),
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    height: wp(7),
    width: wp(7),
    tintColor:Color.lightBlue
  },
  ImageContainer: {
    marginTop: wp(5),
    backgroundColor: Color.darkBlue,
    height: wp(15),
    width: wp(15),
    borderRadius: wp(7.5),
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainHeading: {
    paddingTop: wp(3),
    color: Color.darkBlue,
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.xl,
  },
  description: {
    color: Color.coal,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.m,
    paddingLeft: wp(10),
    paddingRight: wp(11),
    marginTop: wp(2.5),
    alignSelf:'center'
  },
  status: {
    color: Color.coal,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.m,
    paddingLeft: wp(10),
    paddingRight: wp(11),
  },
});
