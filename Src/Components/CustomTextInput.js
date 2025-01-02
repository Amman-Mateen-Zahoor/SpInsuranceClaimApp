// import React, {useState} from 'react';
// import {View, TextInput, StyleSheet, Image, Touchable, TouchableOpacity} from 'react-native';
// import {Color, FontFamily, FontSize} from '../constants/style';
// import {Text} from '@react-navigation/elements';
// import { wp } from '../utils/utils';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// const CustomTextInput = ({placeholder,value,onChangeText,imageSource,secureTextEntry,style,...props}) => {
 
//   const [passwordVisible, setPasswordVisible] = useState(true);
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
//           secureTextEntry={secureTextEntry}
//           {...props}
          
//         />
//         <TouchableOpacity
//         style={styles.iconContainer}
//         onPress={() => setPasswordVisible(!passwordVisible)}
//         >
//           <Icon
//           name={passwordVisible ? "eye-off" : "eye"} // Toggle icon
//           size={20}
//           color="gray"
//         />
//         </TouchableOpacity>
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
//   iconContainer: {
//     padding: 5,
//   },
// });

// export default CustomTextInput;

import React, { useRef, useState } from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Color, FontFamily, FontSize } from '../constants/style';
import { wp } from '../utils/utils';

const CustomTextInput = ({
  placeholder,
  value,
  onChangeText,
  imageSource,
  secureTextEntry,
  style,
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const inputElement =useRef()
  const focusInput = () =>{
    inputElement.current.focus();
  } 
  return (
    <Pressable onPress={focusInput}>
    <View style={styles.container}>
      {/* Icon (Image) */}
      {imageSource && (
        <Image
          source={imageSource}
          style={styles.icon}
        />
      )}
      {/* TextInput */}
      <TextInput
        ref={inputElement}
        style={[styles.textInput, style]}
        placeholder={placeholder}
        placeholderTextColor={Color.inputText}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry && isPasswordVisible}
        {...props}
      />
      {/* Password Toggle Icon */}
      {secureTextEntry && (
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          <Icon
            name={isPasswordVisible ? 'eye-off' : 'eye'}
            size={20}
            color={Color.inputText}
          />
        </TouchableOpacity>
      )}
    </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Color.inputField,
    paddingVertical: wp(1.5),
    marginTop: wp(4),
    
  
  },
  icon: {
    width: wp(5),
    height: wp(5),
    resizeMode: 'contain',
    marginRight: wp(3),
  },
  textInput: {
    flex: 1,
    fontSize: FontSize.xl,
    color: Color.coal,
    fontFamily: FontFamily.robotoRegular,
    padding: 0,
  },
  iconContainer: {
    padding: 5,
  },
});

export default CustomTextInput;
