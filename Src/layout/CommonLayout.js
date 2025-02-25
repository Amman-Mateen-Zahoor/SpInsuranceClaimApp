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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const CommonLayout = ({
  children,
  home,
  heading,
  disablScrollView,
  search,
  company,
  searchHeading,
  setIconWithoutSearch,
  companyNotify
}) => {
  // useLayoutEffect(() => {
  //   if (Platform.OS === 'android') {
  //     StatusBar.setTranslucent(true);
  //     StatusBar.setBackgroundColor('transparent');
  //   }
  //   StatusBar.setHidden(false);
  //   StatusBar.setBarStyle('light-content');
  // }, []);
  return (
    <View style={styles.mainContainer}>
      {home ? (
        <HeaderHome company={company} />
      ) : (
        <Header
          heading={heading}
          search={search}
          searchHeading={searchHeading}
          company={company}
          setIconWithoutSearch={setIconWithoutSearch}
          companyNotify={companyNotify}
        />
      )}
      {disablScrollView ? (
        children
      ) : (
        <KeyboardAwareScrollView
          extraHeight={10}
          enableOnAndroid
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.mainContent}>
          {children}
        </KeyboardAwareScrollView>
      )}
    </View>
  );
};

export default CommonLayout;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Color.white,
  },
  mainContent: {padding: wp(5)},
});
