import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import UpdateProfileLayout from '../../../layout/UpdateProfileLayout';
import {Color, FontFamily, FontSize} from '../../../constants/style';
import {wp} from '../../../utils/utils';
import CustomTextInput from '../../../components/CustomTextInput';
import DropdownWithIcons from '../../../components/DropdownWithIcons';
import CustomButton from '../../../components/CustomButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const EmpUpdateprofile = () => {
  return (
    <UpdateProfileLayout
      heading={'Update Profile'}
      headingBottom={'Enter Profile Details'}
      contentContainerScrollStyle={{marginTop: wp(15)}}>
      
      <View style={styles.container}>
   <Image
          source={require('../../../assets/images/headerP.jpg')}
          style={styles.img} 
         /> 
 <View style={styles.imgeditcontainer}>
      <Image
     source={require('../../../assets/icons/edit.png')}
     style={styles.imgedit}
     />
     </View>
      </View>
      
       

        <Text style={styles.text}>William Karlsson</Text>
        <CustomTextInput
          imageSource={require('../../../assets/icons/name.png')}
          placeholder={'Name'}
        />
        <DropdownWithIcons />
        <CustomTextInput
          imageSource={require('../../../assets/icons/mailicon.png')}
          placeholder={'Email'}
        />
        <CustomTextInput
          imageSource={require('../../../assets/icons/cvr.png')}
          placeholder={'Cvr No.'}
        />
        <CustomButton title={'Update'} />
    </UpdateProfileLayout>
  );
};

export default EmpUpdateprofile;

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        top: wp(-12),
        // right:wp(38)
        alignSelf:"center"
    },
  img: {
    height: wp(22),
    width: wp(22),
    borderRadius: wp(11),
    borderWidth: 4,
    borderColor: Color.darkBlue,
  },
  imgeditcontainer: {
    height: wp(6),
    width: wp(6),
    borderRadius: wp(3),
    backgroundColor: Color.darkBlue,
    borderWidth: 1.5,
    borderColor: Color.lightBlue,
    top: wp(-13),
    right: wp(-18),
  },
  imgedit: {
    height: wp(2.5),
    width: wp(2.5),
    marginTop: wp(1.2),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  text: {
    alignSelf: 'center',
    color: Color.darkBlue,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.xxl,
   
  },
});
