import {
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Keyboard,
  Pressable,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {Color, FontFamily, FontSize} from '../constants/style';
import {hp, wp} from '../utils/utils';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const TopHeader = ({heading, subHeading, notify,cmpNotify}) => {
  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();
  return (
    <View style={[styles.header, {marginTop: wp(4) + top}]}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        hitSlop={{top: 30, bottom: 30, left: 30, right: 30}}>
        <Image
          source={require('../assets/icons/leftarrow.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <View style={notify && styles.noNotify}>
        <Text numberOfLines={1} style={styles.txtheader}>
          {heading}
        </Text>
        <Text numberOfLines={1} style={styles.txtheader1}>
          {subHeading}
        </Text>
      </View>
      {!notify ? (
        <TouchableOpacity
          onPress={() => {
            cmpNotify?navigation.navigate('CmpNotify'):navigation.navigate('EmpNotify');
          }}>
          <Image
            source={require('../assets/icons/notifications.png')}
            style={styles.icon2}
          />
          <Text style={styles.badge} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const UpdateProfileLayout = ({
  heading,
  subHeading,
  children,
  style,
  title,
  settingStyle,
  updateProfile,
  notify,
  styleKeyboard,
  from,
  cmpNotify
}) => {
  const navigation = useNavigation();
  //  useLayoutEffect(() => {
  //     if (Platform.OS == 'android') {
  //       StatusBar.setTranslucent(true);
  //       StatusBar.setBackgroundColor('transparent');
  //     }

  //     StatusBar.setHidden(false);
  //     StatusBar.setBarStyle('light-content');
  //   }, []);
  console.log("lllfirst",cmpNotify)
  const {top} = useSafeAreaInsets();
  const [filePath, setFilePath] = useState('');
  const [imageData, setImagData] = useState({
    // uri: 'file:///data/user/0/com.blinkdramaproject/cache/rn_image_picker_lib_temp_9220858f-3991-4c7d-b140-a034d1a1c8d6.jpg',
    // uri: 'file:///data/user/0/com.spcalim_insuranceapp/cache/rn_image_picker_lib_temp_aa0fd1cb-492e-4c32-9739-ded916c054fc.jpg',
    uri:'',
    name: '',
    type: '',
  });
  const getIamgecamera = () => {
    let optinos = {mediaType: 'photo'};
    launchCamera(optinos, responce => {
      setFilePath(responce.assets[0].uri);
      console.log(filePath);
      setImagData({
        uri: responce.assets[0].uri,
        name: responce.assets[0].fileName,
        type: responce.assets[0].type,
      });
      console.log(imageData);
    });
  };
  const getIamgeGallery = () => {
    let optinos = {mediaType: 'photo'};
    launchImageLibrary(optinos, responce => {
      setFilePath(responce.assets[0].uri);

      setImagData({
        uri: responce.assets[0].uri,
        name: responce.assets[0].fileName,
        type: responce.assets[0].type,
      });
      console.log(imageData);
    });
  };
  return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={[styles.topContainer, style]}>
      <Image
        source={require('../assets/images/auth-background.png')}
        style={styles.bgImg}
      />
      <TopHeader
        heading={heading}
        subHeading={subHeading}
        notify={notify}
        from={from}
        cmpNotify={cmpNotify}
      />
      {title && (
        <Text numberOfLines={1} style={styles.titleStyle}>
          {title}
        </Text>
      )}
      <View
        style={[
          styles.mainContent,
          {
            paddingTop: updateProfile ? wp(13) : 0,
            marginTop: updateProfile ? wp(12) : wp(5),
            marginHorizontal: updateProfile ? 0 : wp(5),
            // marginBottom:updateProfile ? 0 :wp(10),
            maxHeight: updateProfile ? undefined : hp(67),
            borderBottomLeftRadius: updateProfile ? 0 : wp(5),
            borderBottomRightRadius: updateProfile ? 0 : wp(5),
          },
          updateProfile && {flex: 1},
        ]}>
        {updateProfile && (
          <View style={styles.imgContainer}>
            {/* <Image
            { 
              imageData.uri == '' ?
              source={require('../assets/images/headerP.jpg')}
               : source={{uri: imageData.uri}}
            }
              style={styles.img}
            /> */}
            <Image 
              style={styles.img} 
              source={imageData.uri ? { uri: imageData.uri } : require('../assets/images/dummy-profile.jpg')}
/>
            <Pressable
              onPress={() => getIamgeGallery()}
              style={styles.imgeditcontainer}>
              <Image
                source={require('../assets/icons/edit.png')}
                style={styles.imgedit}
              />
            </Pressable>
            {/* <Pressable
              onPress={() => getIamgecamera()}
              style={styles.imgeditcontainer}>
              <Image
                source={require('../assets/icons/edit.png')}
                style={styles.imgedit}
              />
            </Pressable> */}
          </View>
        )}
        <KeyboardAwareScrollView
          extraScrollHeight={10}
          showsVerticalScrollIndicator={false}
          enableOnAndroid
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={[styles.contentContainer, settingStyle]}
          style={[styleKeyboard]}>
          {children}
        </KeyboardAwareScrollView>
      </View>
    </View>
    // </TouchableWithoutFeedback>
  );
};

export default UpdateProfileLayout;

const styles = StyleSheet.create({
  bgImg: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  topContainer: {
    backgroundColor: Color.darkBlue,
    paddingTop: wp(2),
    // overflow:'hidden',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    marginBottom: wp(5),
    // paddingHorizontal: wp(6),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(6),
  },
  icon: {
    height: wp(5),
    width: wp(5),
    // borderRadius: wp(5),
    resizeMode: 'contain',
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
    fontSize: FontSize.xxxl,
    alignSelf: 'center',
  },
  txtheader1: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.m,
    alignSelf: 'center',
    marginTop: wp(2),
    color: Color.lightBlue,
  },
  txtSubheader: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.m,
  },
  noNotify: {
    flex: 1,
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
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: wp(5),
    // paddingTop:wp(5),
  },
  imgContainer: {
    position: 'absolute',
    top: wp(-12),
    alignSelf: 'center',
    justifyContent: 'center',
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
    position: 'absolute',
    // top: 0,
    right: wp(-3),
  },
  imgedit: {
    height: wp(2.5),
    width: wp(2.5),
    marginTop: wp(1.2),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  titleStyle: {
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.l,
    marginLeft: wp(5),
    marginBottom: wp(5),
    color: Color.lightBlue,
  },
  mainContent: {
    // flexGrow: 1,
    backgroundColor: Color.white,
    borderTopLeftRadius: wp(5),
    borderTopRightRadius: wp(5),
  },
  updatedProfile: {},
});
