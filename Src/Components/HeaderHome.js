import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Color, FontFamily, FontSize} from '../constants/style';
import {wp} from '../utils/utils';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const HeaderHome = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View style={styles.topContainer}>
      <Image
        source={require('../assets/images/auth-background.png')}
        style={styles.bgImg}
      />
      <View style={[styles.header, {marginTop: wp(4) + top}]}>
        <Image
          source={require('../assets/images/headerP.jpg')}
          style={styles.icon}
        />
        <Text numberOfLines={1} style={styles.txtheader}>
          Hello! William Karlsson
        </Text>
        <TouchableOpacity
        onPress={() => navigation.navigate('EmpNotify')}
        >
          
          <Image
            source={require('../assets/icons/notifications.png')}
            style={styles.icon2}
          />
          <Text style={styles.badge} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({
  bgImg: {
    position: 'absolute',
    right: 0,
  },
  topContainer: {
    backgroundColor: Color.darkBlue,
    borderBottomLeftRadius: wp(7),
    borderBottomRightRadius: wp(7),
  },
  header: {
    flexDirection: 'row',

    marginBottom: wp(5),
    paddingHorizontal: wp(6),
    alignItems: 'center',
  },
  icon: {
    height: wp(10),
    width: wp(10),
    borderRadius: wp(5),
    resizeMode: 'cover',
  },
  icon2: {
    height: wp(5),
    width: wp(5),
    borderRadius: wp(2.5),
    resizeMode: 'contain',
  },
  txtheader: {
    fontFamily: FontFamily.robotoBold,
    color: Color.white,
    flex: 1,
    marginLeft: wp(4),
    fontSize: FontSize.xl,
  },
  badge: {
    height: wp(1.5),
    width: wp(1.5),
    borderRadius: wp(0.7),
    backgroundColor: 'red',
    position: 'absolute',
    // marginLeft: wp(5),
    top: -2,
    right: -1,
  },
});
