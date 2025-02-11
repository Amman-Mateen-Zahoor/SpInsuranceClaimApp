import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CommonLayout from '../../../layout/CommonLayout';
import CustomButton from '../../../components/CustomButton';
import {useSelector} from 'react-redux';
import Localization from '../../../constants/localization';
import {Color, FontFamily, FontSize} from '../../../constants/style';
import {wp} from '../../../utils/utils';
import CmpDamageCard from '../../../components/CmpDamageCard';
import {useNavigation} from '@react-navigation/native';

const CmpHome = () => {
  const {lang} = useSelector(state => state.language);
  const [report, setReport] = useState([
    {
      name: 'William Karlsson',
      date: 'May 25, 2023',
      type: 'Vehicle',
      img: require('../../../assets/images/pp.jpg'),
    },
    {
      name: 'Cristina Nilsson',
      date: 'May 25, 2023',
      type: 'Property',
      img: require('../../../assets/images/p2.jpg'),
    },
    {
      name: 'William Karlsson',
      date: 'May 25, 2023',
      type: 'Vehicle',
      img: require('../../../assets/images/pp.jpg'),
    },
    {
      name: 'Cristina Nilsson',
      date: 'May 25, 2023',
      type: 'Property',
      img: require('../../../assets/images/p2.jpg'),
    },
    {
      name: 'William Karlsson',
      date: 'May 25, 2023',
      type: 'Vehicle',
      img: require('../../../assets/images/pp.jpg'),
    },
    {
      name: 'Cristina Nilsson',
      date: 'May 25, 2023',
      type: 'Property',
      img: require('../../../assets/images/p2.jpg'),
    },
    {
      name: 'William Karlsson',
      date: 'May 25, 2023',
      type: 'Vehicle',
      img: require('../../../assets/images/pp.jpg'),
    },
    {
      name: 'Cristina Nilsson',
      date: 'May 25, 2023',
      type: 'Property',
      img: require('../../../assets/images/p2.jpg'),
    },
    {
      name: 'William Karlsson',
      date: 'May 25, 2023',
      type: 'Vehicle',
      img: require('../../../assets/images/pp.jpg'),
    },
    {
      name: 'Cristina Nilsson',
      date: 'May 25, 2023',
      type: 'Property',
      img: require('../../../assets/images/p2.jpg'),
    },
    {
      name: 'William Karlsson',
      date: 'May 25, 2023',
      type: 'Vehicle',
      img: require('../../../assets/images/pp.jpg'),
    },
    {
      name: 'Cristina Nilsson',
      date: 'May 25, 2023',
      type: 'Property',
      img: require('../../../assets/images/p2.jpg'),
    },
  ]);
  const navigation = useNavigation();
  return (
    <CommonLayout home company disablScrollView>
      <View style={{ flex: 1}}>
        <View style={{padding:wp(5)}}>
        <CustomButton
          style={{marginTop: 0}}
          title={Localization.make_claim[lang]}
          onPress={() => {
            navigation.navigate('CmpDamage');
          }}
        />
        {/* main */}
        <View style={styles.rowCard}>
          {/* whole single */}
          <View style={styles.rowContent}>
            {/* seprate seprate */}
            <View>
              <Text numberOfLines={1} style={[styles.Toptxt]}>
                {Localization.employees[lang]}
              </Text>
              <Text style={[styles.Toptxt, styles.nmbrTxt]}>200</Text>
            </View>
            <View style={styles.iconContainer}>
              <Image
                source={require('../../../assets/icons/employeeI.png')}
                style={styles.icon}
              />
            </View>
          </View>
          {/* whole single */}
          <View style={styles.rowContent}>
            {/* seprate seprate */}
            <View>
              <Text style={[styles.Toptxt]}>
                {Localization.total_claims[lang]}
              </Text>
              <Text style={[styles.Toptxt, styles.nmbrTxt]}>20</Text>
            </View>
            <View style={styles.iconContainer}>
              <Image
                source={require('../../../assets/icons/claim.png')}
                style={styles.icon}
              />
            </View>
          </View>
        </View>
        <View style={styles.container1}>
          <Text style={styles.Heading1}>
            {Localization.damage_reports[lang]}
          </Text>
          <Pressable onPress={() => navigation.navigate('CmpSeeAll')}>
            <Text style={styles.btnTopTxt}>{Localization.see_all[lang]}</Text>
          </Pressable>
        </View>
        </View>
        <FlatList
          data={report}
          style={{padding:wp(5)}}
          contentContainerStyle={{
            paddingBottom: wp(5),
          }}
          renderItem={({item}) => <CmpDamageCard item={item} />}
        />
      </View>
    </CommonLayout>
  );
};

export default CmpHome;

const styles = StyleSheet.create({
  Toptxt: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.s,
    color: Color.coal,
    width: wp(30),
    marginBottom: wp(2),
  },
  nmbrTxt: {
    color: Color.darkBlue,
    fontSize: FontSize.xl,
    fontFamily: FontFamily.robotoBold,
  },
  iconContainer: {
    backgroundColor: Color.adjustableLightBlue(0.1),
    height: wp(8),
    width: wp(8),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp(3),
    // position:'absolute',
    // right:wp(3)
  },
  icon: {
    height: wp(6),
    width: wp(6),
    resizeMode: 'contain',
  },
  rowCard: {
    flexDirection: 'row',
    marginTop: wp(5),
    justifyContent: 'space-between',
  },
  rowContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Color.white,
    paddingHorizontal: wp(2),
    paddingVertical: wp(2),
    borderWidth: 1,
    borderColor: Color.white,
    borderRadius: wp(3),
    elevation: 5,
    height: wp(20),
    width: wp(43),
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: wp(3),
  },
  Heading1: {
    color: Color.darkBlue,
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.l,
  },
  btnTopTxt: {
    alignSelf: 'center',
    fontFamily: FontFamily.robotoRegular,
    color: Color.darkBlue,
    textDecorationLine: 'underline',
    textDecorationColor: Color.darkBlue,
  },
});
