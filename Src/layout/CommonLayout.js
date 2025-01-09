import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Pressable,
} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Color, FontFamily, FontSize} from '../constants/style';
import {wp} from '../utils/utils';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HeaderHome from '../components/HeaderHome';
import Header from '../components/Header';

const CommonLayout = ({children, home ,heading}) => {
  useLayoutEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setTranslucent(true);
      StatusBar.setBackgroundColor('transparent');
    }
    StatusBar.setHidden(false);
    StatusBar.setBarStyle('light-content');
  }, []);
  return (
    <View style={styles.mainContainer}>
     { home?<HeaderHome />:<Header heading={heading}/> }
      {children}
    </View>
  );
};

export default CommonLayout;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Color.white,
  },
});
