
import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, TextInput} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {hp, wp} from '../utils/utils';
import {Color, FontFamily, FontSize} from '../constants/style';
import {COUNTRY_CODES, PHONE_REGEX} from '../constants/data';
import CustomTextInput from './CustomTextInput';

const DropdownWithIcons = () => {
  const [selectedItem, setSelectedItem] = useState(COUNTRY_CODES[0]); // Set initial selected item
  const [cplaceholder, SetCplaceholder] = useState(
    PHONE_REGEX['+45'].placeholder,
  );
  return (
    <View style={styles.mainContainer}>
      <Dropdown
        style={styles.dropdown}
        iconColor="black"
        // iconStyle={{backgroundColor:'blue',paddingRight:8}}
        containerStyle={styles.listContainer}
        data={COUNTRY_CODES}
        value={selectedItem} // Bind selected item
        onChange={item => {
          setSelectedItem(item);
          SetCplaceholder(PHONE_REGEX[item.code].placeholder);
        }} // Update the selected item
        renderItem={({icon, country, code}) => (
          <View style={styles.renderMainContainer}>
            <View style={styles.renderContainer}>
              <Image source={icon} style={styles.flagImage} />
              <Text style={styles.text}>{country}</Text>
            </View>
            <Text style={styles.text2}>{code}</Text>
          </View>
        )}
        renderLeftIcon={() => (
          <View style={styles.Icon2Container}>
            <Image
              source={selectedItem.icon} // Dynamically set the selected icon
              style={styles.card1icon}
            />
          </View>
        )}
      />
      <TextInput
        style={styles.textInput}
        placeholder={cplaceholder}
        placeholderTextColor="#AAAAAA"
        //   value={value}
        //   onChangeText={onChangeText}
      />
    </View>
  );
};

export default DropdownWithIcons;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: Color.inputField,
    paddingVertical: wp(1.5),
    paddingRight: wp(6),
  },

  dropdown: {
    height: wp(15),
    // backgroundColor: 'yellow',
    width: wp(17),
  },
  text: {
    fontSize: FontSize.m,
    color: Color.black ,
  },
  text2: {
    fontSize: FontSize.m,
    color: Color.black,
    paddingRight: wp(4.5),
  },
  flagImage: {
    width: 20,
    height: 18,
    marginRight: 10,
  },
  renderMainContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBlockColor:Color.inputField,
    borderBottomWidth:1
  },
  renderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: wp(3),
    paddingTop: wp(3),
    paddingBottom: wp(2.8),
  },
  card1icon: {
    height: hp(2.6),
    width: wp(8),
    resizeMode: 'contain',
  },
  Icon2Container: {
    height: hp(4.8),
    // backgroundColor: Color.adjustableLightBlue(0.1),
    padding: 6,
    paddingTop: 10,
    borderRadius: 3,
    marginLeft: 10,
    marginRight: -7,
  },
  textInput: {
    // flex: 1,
    fontSize: FontSize.xl,
    color: Color.inputText,
    fontFamily: FontFamily.robotoRegular,
    padding: 0,
    paddingTop: 8,
    paddingHorizontal: 12,
    width: wp(75),
  },
  listContainer: {
    height: hp(27),
    width: wp(91),
    marginLeft: 14,
    marginTop:8,
    borderColor:Color.inputField,
    borderRadius:20,
  },
});
