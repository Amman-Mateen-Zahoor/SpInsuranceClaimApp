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
import { useSelector } from 'react-redux';
import Localization from '../../../constants/localization';

const Updateprofile = ({from,cmpNotify}) => {
          const [sendVisible,SetSendVisible]=useState(false)
          const {lang} =useSelector(state=>state.language)
  return (
    <UpdateProfileLayout
      heading={Localization.update_profile[lang]}
      subHeading={Localization.enter_profile_details[lang]}
      updateProfile
      cmpNotify={cmpNotify}
 >
      

      <Text style={styles.text}>William Karlsson</Text>
      <CustomTextInput
        imageSource={require('../../../assets/icons/name.png')}
        placeholder={Localization.name[lang]}
      />
      <DropdownWithIcons />
      <CustomTextInput
        imageSource={require('../../../assets/icons/mailicon.png')}
        placeholder={Localization.email[lang]}
      />
      <CustomTextInput
        imageSource={require('../../../assets/icons/cvr.png')}
        placeholder={Localization.cvr_no[lang]}
      />
      <CustomButton title={Localization.update[lang]} 
          onPress={()=>{SetSendVisible(true)}}
      />
       <Popup visible={sendVisible}
       handleClose={()=>{SetSendVisible(false)}}
       iconSource={require('../../../assets/icons/check.png')}
       mainHeading={Localization.updated_successfully[lang]}
       description={Localization.Your_Profile_has_been_updated[lang]}
       status={Localization.successfully[lang]}
       btnTitle={Localization.done[lang]}
       />
    </UpdateProfileLayout>
  );
};

export default Updateprofile;

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    color: Color.darkBlue,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.xxl,
  },
});
