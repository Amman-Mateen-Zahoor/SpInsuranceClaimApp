import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { wp } from '../utils/utils';
import { Color, FontFamily, FontSize } from '../constants/style';

const DamageReportCard = ({item}) => {
  return (
    <Pressable
      onPress={() => console.log('first')}
      style={styles.content}>
      <Image
        source={require('../assets/images/homecontentbgtop.png')}
        style={styles.topbgimg}
      />
      <Image
        source={require('../assets/images/homecontentbgbtm.png')}
        style={styles.btmimg}
      />
      <View style={styles.contentIcon}>
        <Image source={item.icon} style={styles.contentIconImg} />
      </View>
      {/* <Text>{item.content}</Text> */}
      <Text numberOfLines={1} style={styles.contentHeading}>
        {item.heading}
      </Text>
      <Text numberOfLines={3} style={styles.contentDescription}>
        {item.description}
      </Text>
    </Pressable>
  );
}

export default DamageReportCard

const styles = StyleSheet.create({
  content: {
    margin: wp(2),
    padding: wp(4),
    height: wp(45),
    width: wp(41),
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
    borderRadius: wp(2.5),
    // margin:wp(4)
    
  },
  contentIconImg: {
    height: wp(5.5),
    width: wp(5.5),
    resizeMode: 'contain',
  },
  contentHeading: {
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.l,
    color: Color.white,
    paddingTop: wp(3),
  },
  contentDescription: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.m,
    color: Color.white,
    paddingTop: wp(1),
  },
});