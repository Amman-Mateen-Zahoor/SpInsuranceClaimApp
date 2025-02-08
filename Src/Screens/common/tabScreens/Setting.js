import {Image, Pressable, StyleSheet, Switch, Text, View} from 'react-native';
import React, {useState} from 'react';
import UpdateProfileLayout from '../../../layout/UpdateProfileLayout';
import {wp} from '../../../utils/utils';
import {Color, FontFamily, FontSize} from '../../../constants/style';
import ToggleSwitch from 'toggle-switch-react-native';
import {useNavigation} from '@react-navigation/native';
import Popup from '../../../modals/PopUp';
import {useSelector} from 'react-redux';
import Localization from '../../../constants/localization';
const Item = ({
  imgSourceleft,
  renderRightIcon,
  heading1,
  heading2,
  isToggle,
  onPress,
}) => {
  return (
    <Pressable disabled={isToggle} onPress={onPress}>
      <View style={styles.Content}>
        <Image source={imgSourceleft} style={styles.icon1} />
        <View style={styles.containerHeadings}>
          <Text style={styles.contentHeading1}>{heading1}</Text>
          <Text style={styles.contentHeading2}>{heading2}</Text>
        </View>
        {renderRightIcon}
      </View>
    </Pressable>
  );
};
const Setting = ({from}) => {
  console.log("from",from)
  const [toggleSwitch, setToggleSwitch] = useState();
  const navigation = useNavigation();
  const [sendVisibleLogout, SetSendVisibleLogout] = useState(false);
  const [sendVisibleDel, SetSendVisibleDel] = useState(false);
  const {lang} = useSelector(state => state.language);
  return (
    <UpdateProfileLayout
      heading={Localization.settings[lang]}
      subHeading={Localization.change_language[lang]}
      title={Localization.general_settings[lang]}
      settingStyle={{paddingVertical: wp(5)}}>
      <Item
        isToggle
        heading1={Localization.face_id[lang]}
        heading2={Localization.enable[lang]}
        imgSourceleft={require('../../../assets/icons/face-id.png')}
        renderRightIcon={
          <ToggleSwitch
            isOn={toggleSwitch}
            onColor={Color.darkBlue}
            offColor={Color.inputField}
            size="small"
            onToggle={setToggleSwitch}
          />
        }
      />
      <Item
        onPress={() => (from == 'employee' ? navigation.navigate('EmpSetLanguage') : navigation.navigate('CmpSetLanguage'))}
        imgSourceleft={require('../../../assets/icons/language.png')}
        heading1={Localization.language[lang]}
        heading2={Localization.change_language[lang]}
        renderRightIcon={
          <Image
            source={require('../../../assets/icons/arrowright.png')}
            style={styles.icon2}
          />
        }
      />
      <Item
        onPress={() => {from?navigation.navigate('EmpUpdatePassword'):navigation.navigate('CmpUpdatePassword')}}
        imgSourceleft={require('../../../assets/icons/lock.png')}
        heading1={Localization.password[lang]}
        heading2={Localization.change_password[lang]}
        renderRightIcon={
          <Image
            source={require('../../../assets/icons/arrowright.png')}
            style={styles.icon2}
          />
        }
      />
      <Item
        heading1={Localization.privacy_policy[lang]}
        heading2={Localization.read_privacy_policy[lang]}
        imgSourceleft={require('../../../assets/icons/privacy-policy.png')}
      />
      <Item
        heading1={Localization.term_conditions[lang]}
        heading2={Localization.read_terms_conditions[lang]}
        imgSourceleft={require('../../../assets/icons/terms-and-conditions.png')}
      />

      <Item
        onPress={() => {from?navigation.navigate('EmpContactUs'):navigation.navigate('CmpContactUs')}}
        imgSourceleft={require('../../../assets/icons/contact-us.png')}
        heading1={Localization.contact_us[lang]}
        heading2={Localization.get_in_touch[lang]}
        renderRightIcon={
          <Image
            source={require('../../../assets/icons/arrowright.png')}
            style={styles.icon2}
          />
        }
      />
      <Item
        heading1={Localization.delete_account[lang]}
        heading2={Localization.click_delete_account[lang]}
        imgSourceleft={require('../../../assets/icons/delete-account.png')}
        onPress={() => {
          SetSendVisibleDel(true);
        }}
      />
      <Item
        heading1={Localization.log_out[lang]}
        heading2={Localization.click_log_out[lang]}
        imgSourceleft={require('../../../assets/icons/logout.png')}
        onPress={() => {
          SetSendVisibleLogout(true);
        }}
      />
      <Popup
        delLogin
        visible={sendVisibleLogout}
        handleClose={() => {
          SetSendVisibleLogout(false);
        }}
        iconSource={require('../../../assets/icons/LogoutC.png')}
        mainHeading={Localization.log_out[lang]}
        description={Localization.sure_log_out[lang]}
        delYestitle={Localization.yes[lang]}
        delNotitle={Localization.no[lang]}
      />
      <Popup
        delLogin
        visible={sendVisibleDel}
        handleClose={() => {
          SetSendVisibleDel(false);
        }}
        iconSource={require('../../../assets/icons/trash.png')}
        mainHeading={Localization.delete_account[lang]}
        description={Localization.sure_delete_account[lang]}
        status={Localization.account[lang]}
        delYestitle={Localization.yes[lang]}
        delNotitle={Localization.no[lang]}
      />
    </UpdateProfileLayout>
  );
};

export default Setting;

const styles = StyleSheet.create({
  Content: {
    flexDirection: 'row',
    paddingBottom: wp(5),
    alignItems: 'center',
  },
  icon1: {
    height: wp(6),
    width: wp(6),
  },
  icon2: {
    height: wp(3),
    width: wp(3),
    resizeMode: 'contain',
  },
  contentHeading1: {
    color: Color.coal,
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.l,
  },
  contentHeading2: {
    color: Color.text,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.m,
  },
  containerHeadings: {
    marginLeft: wp(4),
    flex: 1,
  },
});
