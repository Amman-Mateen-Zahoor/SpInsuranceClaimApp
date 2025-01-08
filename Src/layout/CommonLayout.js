import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Color, FontFamily, FontSize} from '../constants/style';
import {wp} from '../utils/utils';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const CommonLayout = () => {
  useLayoutEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setTranslucent(true);
      StatusBar.setBackgroundColor('transparent');
    }
    StatusBar.setHidden(false);
    StatusBar.setBarStyle('light-content');
  }, []);
  const {top} = useSafeAreaInsets();
  const [data, setData] = useState([
    {
      icon: "require('../../../assets/icons/mailicon.png')",
      name: 'Vehicle',
      content: 'loremmmmmmmmmmmmmmmmmmmmmmm1',
    },
    {
      icon: "require('../../../assets/icons/mailicon.png')",
      name: 'Vehicle',
      content: 'loremmmmmmmmmmmmmmmmmmmmmmm2',
    },
    {
      icon: "require('../../../assets/icons/mailicon.png')",
      name: 'Vehicle',
      content: 'loremmmmmmmmmmmmmmmmmmmmmmm3',
    },
    {
      icon: "require('../../../assets/icons/mailicon.png')",
      name: 'Vehicle',
      content: 'loremmmmmmmmmmmmmmmmmmmmmmm4',
    },
    {
      icon: "require('../../../assets/icons/mailicon.png')",
      name: 'Vehicle',
      content: 'loremmmmmmmmmmmmmmmmmmmmmmm3',
    },
    {
      icon: "require('../../../assets/icons/mailicon.png')",
      name: 'Vehicle',
      content: 'loremmmmmmmmmmmmmmmmmmmmmmm4',
    },
    {
      icon: "require('../../../assets/icons/mailicon.png')",
      name: 'Vehicle',
      content: 'loremmmmmmmmmmmmmmmmmmmmmmm3',
    },
    {
      icon: "require('../../../assets/icons/mailicon.png')",
      name: 'Vehicle',
      content: 'loremmmmmmmmmmmmmmmmmmmmmmm4',
    },
    {
      icon: "require('../../../assets/icons/mailicon.png')",
      name: 'Vehicle',
      content: 'loremmmmmmmmmmmmmmmmmmmmmmm3',
    },
    {
      icon: "require('../../../assets/icons/mailicon.png')",
      name: 'Vehicle',
      content: 'loremmmmmmmmmmmmmmmmmmmmmmm4',
    },
  ]);
  return (
    <View style={styles.mainContainer}>
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
          <TouchableOpacity>
            <Image
              source={require('../assets/icons/notifications.png')}
              style={styles.icon2}
            />
            <Text style={styles.badge} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={data}
        contentContainerStyle={{
          alignItems: 'center',
          paddingVertical: wp(3),
          paddingBottom: wp(10),
        }}
        renderItem={({item}) => {
          return (
            <View style={styles.content}>
              <Image
                source={require('../assets/images/homecontentbgtop.png')}
                style={styles.topbgimg}
              />
              <Image
                source={require('../assets/images/homecontentbgbtm.png')}
                style={styles.btmimg}
              />
              <View style={styles.contentIcon}>
                <Image
                  source={require('../assets/icons/car.png')}
                  style={styles.contentIconImg}
                />
              </View>
              {/* <Text>{item.content}</Text> */}
            </View>
          );
        }}
        numColumns={2}
      />
    </View>
  );
};

export default CommonLayout;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Color.white,
  },
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
  content: {
    margin: wp(2),
    height: wp(45),
    width: wp(43),
    borderRadius: wp(5),
    backgroundColor: Color.darkBlue,
  },
  topbgimg: {
    position: 'absolute',
    left: 0,
    height: wp(20),
    width: wp(27),
    resizeMode: 'contain',
  },
  btmimg: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: wp(20),
    width: wp(18),
    resizeMode: 'contain',
  },
  contentIcon: {
    backgroundColor: Color.lightBlue,
    height: wp(12),
    width: wp(12),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:wp(2.5),
    margin:wp(4)
  },
  contentIconImg:{
    height: wp(5.5),
    width: wp(5.5),
    resizeMode: 'contain',
  }
});
