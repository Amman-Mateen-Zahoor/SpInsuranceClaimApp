// import React, {useRef, useState} from 'react';
// import {
//   findNodeHandle,
//   Image,
//   Pressable,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
// } from 'react-native';
// import {Dropdown} from 'react-native-element-dropdown';
// import {wp} from '../utils/utils';
// import {Color, FontFamily, FontSize} from '../constants/style';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import DatePicker from 'react-native-date-picker';
// const data = [{label: 'Car'}, {label: 'Bike'}];

// const Questions = ({
//   customDate,
//   customTime,
//   customDropdown,
//   simpleTextInput,
//   placeholder,
//   value,
//   onChangeText,
//   style,
// }) => {
//   const [isFocus, setIsFocus] = useState(false);
//   const [date, setDate] = useState(new Date());
//   const [open, setOpen] = useState(false);
//   return (
//     <View>
//       {customDropdown && (
//         <View style={styles.containerDropDown}>
//           <Dropdown
//             placeholderStyle={styles.placeholderStyle}
//             selectedTextStyle={styles.selectedTextStyle}
//             containerStyle={{borderRadius: wp(5), marginTop: wp(2)}}
//             itemTextStyle={{color: Color.inputText}}
//             data={data}
//             labelField="label"
//             valueField="label"
//             placeholder={placeholder}
//             onFocus={() => setIsFocus(true)}
//             onBlur={() => setIsFocus(false)}
//             onChange={item => {
//               console.log('first', item);
//             }}
//             renderRightIcon={() => (
//               <Icon
//                 name={isFocus ? 'chevron-up' : 'chevron-down'}
//                 size={wp(5)}
//                 color={Color.inputText}
//               />
//             )}
//           />
//         </View>
//       )}

//       {simpleTextInput && (
//         <Pressable>
//           <View style={styles.containerSimpleInput}>
//             {/* TextInput */}
//             <TextInput
//               style={[styles.textInput, style]}
//               placeholder={placeholder}
//               placeholderTextColor={Color.inputText}
//               value={value}
//               onChangeText={onChangeText}
//             />
//           </View>
//         </Pressable>
//       )}
//       {(customDate || customTime) && (
//         <Pressable>
//           <View style={styles.containerSimpleInput}>
//             {/* TextInput */}
//             <TextInput
//               style={[styles.textInput, style]}
//               placeholder={placeholder}
//               placeholderTextColor={Color.inputText}
//               value={value}
//               onChangeText={onChangeText}
//             />
//             <Pressable
//               hitSlop={{bottom: 5, left: 5, right: 5, top: 5}}
//               onPress={() => setOpen(true)}>
//               <Image
//                 source={
//                   customDate
//                     ? require('../assets/icons/calendar.png')
//                     : require('../assets/icons/clock.png')
//                 }
//                 style={styles.icon}
//               />
//               <DatePicker
//                 mode="date"
//                 modal
//                 open={open}
//                 date={customDate ? 'date' : 'time'}
//                 onConfirm={date => {
//                   setOpen(false);
//                   setDate(date);
//                 }}
//                 onCancel={() => {
//                   setOpen(false);
//                 }}
//               />
//             </Pressable>
//           </View>
//         </Pressable>
//       )}
//     </View>
//   );
// };

// export default Questions;

// const styles = StyleSheet.create({
//   containerDropDown: {
//     backgroundColor: Color.white,
//     borderBottomWidth: 1,
//     borderColor: Color.inputField,
//     marginTop: wp(5),
//     paddingBottom: wp(2),
//   },
//   icon: {
//     marginRight: 5,
//   },
//   placeholderStyle: {
//     fontSize: FontSize.l,
//     color: Color.inputText,
//   },
//   selectedTextStyle: {
//     fontSize: FontSize.l,
//     color: Color.coal,
//   },
//   containerSimpleInput: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderColor: Color.inputField,
//     marginTop: wp(5),
//     paddingBottom: wp(2),
//   },
//   icon: {
//     width: wp(4),
//     height: wp(4),
//     resizeMode: 'contain',
//     // marginRight: wp(3),
//   },
//   textInput: {
//     flex: 1,
//     fontSize: FontSize.l,
//     color: Color.coal,
//     fontFamily: FontFamily.robotoRegular,
//     padding: 0,
//   },
//   iconContainer: {
//     padding: 5,
//   },
// });

import React, {useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {wp} from '../utils/utils';
import {Color, FontFamily, FontSize} from '../constants/style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DatePicker from 'react-native-date-picker';

const data = [{label: 'Car'}, {label: 'Bike'}];

const Questions = ({
  customDate,
  customTime,
  customDropdown,
  simpleTextInput,
  placeholder,
  value,
  onChangeText,
  style,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <View>
      {/* Dropdown Input */}
      {customDropdown && (
        <View style={styles.containerDropDown}>
          <Dropdown
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            containerStyle={{borderRadius: wp(5), marginTop: wp(2)}}
            itemTextStyle={{color: Color.inputText}}
            data={data}
            labelField="label"
            valueField="label"
            placeholder={placeholder}
            activeColor={Color.darkBlue}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              console.log('Selected:', item);
            }}
            renderRightIcon={() => (
              <Icon
                name={isFocus ? 'chevron-up' : 'chevron-down'}
                size={wp(5)}
                color={Color.inputText}
              />
            )}
          />
        </View>
      )}

      {/* Simple Text Input */}
      {simpleTextInput && (
        <Pressable>
          <View style={styles.containerSimpleInput}>
            <TextInput
              style={[styles.textInput, style]}
              placeholder={placeholder}
              placeholderTextColor={Color.inputText}
              value={value}
              onChangeText={onChangeText}
            />
          </View>
        </Pressable>
      )}

      {/* Date/Time Picker */}
      {(customDate || customTime) && (
        <Pressable>
          <View style={styles.containerSimpleInput}>
            <TextInput
              style={[styles.textInput, style]}
              placeholder={placeholder}
              placeholderTextColor={Color.inputText}
              value={value}
              onChangeText={onChangeText}
            />
            <Pressable
              hitSlop={{bottom: 5, left: 5, right: 5, top: 5}}
              onPress={() => setOpen(true)}
            >
              <Image
                source={
                  customDate
                    ? require('../assets/icons/calendar.png')
                    : require('../assets/icons/clock.png')
                }
                style={styles.icon}
              />
            </Pressable>
          </View>
          <DatePicker
            mode={customDate ? 'date' : 'time'}
            modal
            open={open}
            date={date}
            onConfirm={selectedDate => {
              setOpen(false);
              setDate(selectedDate);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </Pressable>
      )}
    </View>
  );
};

export default Questions;

const styles = StyleSheet.create({
  containerDropDown: {
    backgroundColor: Color.white,
    borderBottomWidth: 1,
    borderColor: Color.inputField,
    marginTop: wp(5),
    paddingBottom: wp(2),
  },
  placeholderStyle: {
    fontSize: FontSize.l,
    color: Color.inputText,
  },
  selectedTextStyle: {
    fontSize: FontSize.l,
    color: Color.coal,
  },
  containerSimpleInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Color.inputField,
    marginTop: wp(5),
    paddingBottom: wp(2),
  },
  icon: {
    width: wp(4),
    height: wp(4),
    resizeMode: 'contain',
  },
  textInput: {
    flex: 1,
    fontSize: FontSize.l,
    color: Color.coal,
    fontFamily: FontFamily.robotoRegular,
    padding: 0,
  },
});
