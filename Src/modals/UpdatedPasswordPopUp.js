import {StyleSheet, Text, View, Image, Modal} from 'react-native';
import React, { useState } from 'react';
import {Color, FontFamily, FontSize} from '../constants/style';
import {wp} from '../utils/utils';
import CustomButton from '../Components/CustomButton';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const UpdatedPasswordPopUp = ({navigation ,visible ,handleClose}) => {
  return (
    <Modal
    visible={visible}
    transparent={true}
    >
      <View style={{backgroundColor:'rgba(0,0,0,0.5)',flex:1,justifyContent:'center',alignItems:'center'}}>
    <View style={styles.mainContainer}>
      <View style={styles.ImageContainer}>
        <Image
          source={require('../assets/icons/check.png')}
          style={styles.image}></Image>
      </View>
      <Text style={styles.text1}>Updated Successfully
      </Text>
      <Text style={styles.text2}>Your Password has been updated </Text>
      <Text style={styles.text3}>Successfully</Text>
    
      <CustomButton title='Done' onPress={handleClose} style={{width:wp(75),marginBottom:wp(7)} }/>
    </View>
    </View>
    </Modal>
  );
};

export default UpdatedPasswordPopUp;

const styles = StyleSheet.create({
  mainContainer: {
   
    // height:wp(110),
    width:wp(90),
    backgroundColor: Color.white,
    borderRadius: wp(8),
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    height: wp(15),
    width: wp(15),
  },
  ImageContainer: {
    marginTop: wp(10),
    backgroundColor: Color.darkBlue,
    height: wp(33),
    width: wp(33),
    borderRadius: wp(18),
    alignItems: 'center',
    justifyContent: 'center',
  },

  text1:{
    paddingTop:wp(6),
    color:Color.darkBlue,
    fontFamily:FontFamily.robotoBold,
    fontSize:FontSize.xxxl
  },
  text2:{
    color:Color.black,
    fontFamily:FontFamily.robotoRegular,
    fontSize:FontSize.xl,
    paddingLeft:wp(10),
    paddingRight:wp(11),
    marginTop:wp(5)
  },
  text3:{
    color:Color.black,
    fontFamily:FontFamily.robotoRegular,
    fontSize:FontSize.xl,
    paddingLeft:wp(10),
    paddingRight:wp(11),
    // marginTop:wp(1)
  },
});
