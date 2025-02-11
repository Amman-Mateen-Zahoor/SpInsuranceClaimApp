import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CommonLayout from '../../../layout/CommonLayout';
import {wp} from '../../../utils/utils';
import {Color, FontFamily, FontSize} from '../../../constants/style';
import ProfileEntity from '../../../components/ProfileEntity';
import CustomButton from '../../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import Localization from '../../../constants/localization';

const CmpProfile = () => {
  const {lang} = useSelector(state => state.language);
  const navigation = useNavigation();
  return (
    <CommonLayout
      heading={Localization.employee_details[lang]}
      company
      setIconWithoutSearch>
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
      <Pressable onPress={()=>navigation.navigate('CmpDamageClaim')}>
      <ProfileEntity
          text1={Localization.claims[lang]}
          text2={'3 Claims Reported'}
          icon
        />
      </Pressable>
      </View>
    </CommonLayout>
  );
};

export default CmpProfile;

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
