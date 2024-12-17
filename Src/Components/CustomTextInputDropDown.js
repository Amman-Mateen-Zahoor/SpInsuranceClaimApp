
// import React, {useState} from 'react';
// import {View, TextInput, StyleSheet, Image} from 'react-native';
// import {Color, FontFamily, FontSize} from '../constants/style';
// import {Text} from '@react-navigation/elements';
// import { wp } from '../utils/utils';
// import { green } from 'react-native-reanimated/lib/typescript/Colors';

// const CustomTextInputDropDown= ({placeholder,value,onChangeText,imageSource,style,...props}) => {
 

//   return (
   
//       <View style={styles.container}>
//         {/* Icon (Image) */}
//         <Image
//           source={imageSource} // Replace with your image path
//           style={styles.icon}
//         />
//         {/* TextInput */}
//         <TextInput
//           style={styles.textInput}
//           placeholder={placeholder}
//           placeholderTextColor="#AAAAAA"
//           value={value}
//           onChangeText={onChangeText}
//           {...props}
          
//         />
//       </View>
   
//   );
// };

// const styles = StyleSheet.create({
//     // container: {
        
//     //     justifyContent: 'center',
       
//     //     backgroundColor:Color.inputField,
//     //     height:wp(18),

        
        
//     //   },
    
//     container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderColor:Color.inputField,
//     // backgroundColor:'red',
//     paddingVertical: wp(1.5),
//     marginTop:wp(4)
    
//   },
//   icon: {
//     width: wp(5),
//     height: wp(5),
//     resizeMode: 'contain',
//     marginRight: wp(3), // Space between icon and text input
//     // backgroundColor: 'green',
//   },
//   textInput: {
//     flex: 1,
//     fontSize: FontSize.xl,
//     color: Color.inputText,
//     fontFamily:FontFamily.robotoRegular,
//     padding:0
//   },
// });

// export default CustomTextInputDropDown;

import React, { useState } from 'react';
  import { StyleSheet, Text, View ,Image } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
import { hp, wp } from '../utils/utils';
import { Color } from '../constants/style';

  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

  const CustomTextInputDropDown = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    return (
      <View style={styles.container}>
        {/* {renderLabel()} */}
        <Dropdown
          style={[styles.dropdown]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          // labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <View style={styles.Icon2Container} >
             <Image source={require('../assets/images/companiesRegister.png')} style={styles.card1icon}/>
             </View>
          )}
        />
      </View>
    );
  };

  export default CustomTextInputDropDown;

  const styles = StyleSheet.create({
    dropdown: {
      height: 50,
      backgroundColor:'lightblue'
    },
    iconStyle: {
      width: 20,
      height: 20,
      marginRight:wp(80)
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    card1icon: {
      height:hp(2.6),
      width:wp(8),
      resizeMode:'contain'
    },
   
    Icon2Container:{
      height:hp(4.8),
      backgroundColor: Color.adjustableLightBlue(0.1),
       padding:6,
       paddingTop:10,
       borderRadius:3,
       marginLeft:10
    },
  });