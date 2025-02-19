import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CommonLayout from '../../../layout/CommonLayout';
import {wp} from '../../../utils/utils';
import {Color, FontFamily, FontSize} from '../../../constants/style';
import ProfileEntity from '../../../components/ProfileEntity';
import CustomButton from '../../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import Localization from '../../../constants/localization';

const Profile = ({from,companyNotify}) => {
  console.log('first', from);
  const {lang} = useSelector(state => state.language);
  const navigation = useNavigation();
  return (
    <CommonLayout companyNotify={companyNotify} heading={Localization.profile[lang]}>
      <Image
        source={require('../../../assets/images/headerP.jpg')}
        style={styles.img}
      />
      <Text style={styles.text}>William Karlsson</Text>
      <View style={styles.container}>
        <ProfileEntity
          text1={Localization.phone_no[lang]}
          text2={'+92 222 0022002'}
        />
        <ProfileEntity
          text1={Localization.email[lang]}
          text2={'williamkarlsson@gmail.com'}
        />
        <ProfileEntity
          text1={Localization.company_name[lang]}
          text2={'Cubix Solutions'}
        />
        <ProfileEntity
          style={{marginBottom: 0}}
          text1={Localization.cvr_no[lang]}
          text2={'20700211'}
        />
        <CustomButton
          title={Localization.edit[lang]}
          onPress={() => {
            from 
              ? navigation.navigate('EmpUpdateProfile')
              : navigation.navigate('CmpUpdateProfile');
          }}
        />
      </View>
    </CommonLayout>
  );
};

export default Profile;

const styles = StyleSheet.create({
  img: {
    height: wp(25),
    width: wp(25),
    borderRadius: wp(12.5),
    alignSelf: 'center',
    marginTop: wp(5),
  },
  text: {
    alignSelf: 'center',
    color: Color.darkBlue,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.xxl,
    marginTop: wp(3),
    marginBottom: wp(7),
  },
  container: {
    paddingHorizontal: wp(5),
  },
});
