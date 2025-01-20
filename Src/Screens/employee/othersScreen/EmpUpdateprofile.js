import {StyleSheet, Text, View, Image} from 'react-native';
import React, { useState } from 'react';
import UpdateProfileLayout from '../../../layout/UpdateProfileLayout';
import {Color, FontFamily, FontSize} from '../../../constants/style';
import {wp} from '../../../utils/utils';
import CustomTextInput from '../../../components/CustomTextInput';
import DropdownWithIcons from '../../../components/DropdownWithIcons';
import CustomButton from '../../../components/CustomButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Popup from '../../../modals/PopUp';

const EmpUpdateprofile = () => {
          const [sendVisible,SetSendVisible]=useState(false)
  return (
    <UpdateProfileLayout
      heading={'Update Profile'}
      subHeading={'Enter profile details'}
      updateProfile
 >
      

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
      <CustomButton title={'Update'} 
          onPress={()=>{SetSendVisible(true)}}
      />
       <Popup visible={sendVisible}
       handleClose={()=>{SetSendVisible(false)}}
       iconSource={require('../../../assets/icons/check.png')}
       mainHeading={'Updated Successfully'}
       description={'Your Profile has been updated '}
       status={'successfully'}
       />
    </UpdateProfileLayout>
  );
};

export default EmpUpdateprofile;

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    color: Color.darkBlue,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.xxl,
  },
});
