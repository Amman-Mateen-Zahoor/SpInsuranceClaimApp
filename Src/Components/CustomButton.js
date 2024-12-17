import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Color, FontSize} from '../constants/style';
import {wp} from '../utils/utils';
import ArrowRight from 'react-native-vector-icons/FontAwesome6';

const CustomButton = ({
  title,
  onPress,
  style,
  iconName,
  iconSize,
}) => {
  return (
    <TouchableOpacity style={[styles.btnContainer, style]} onPress={onPress}>
      <Text style={styles.btntext}>{title}{'  '}<ArrowRight name={iconName} size= { 14} /></Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: Color.darkBlue,
    flexDirection: 'row',
    height: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(3),
    marginTop: wp(6),
  },
  btntext: {
    fontSize: FontSize.xl,
    color: Color.lightBlue,
  },
});
