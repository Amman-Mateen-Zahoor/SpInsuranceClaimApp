
// import React, {useState} from 'react';
// import {StyleSheet, View, Text, Image, TextInput} from 'react-native';
// import {Dropdown} from 'react-native-element-dropdown';
// import {hp, wp} from '../utils/utils';
// import {Color, FontFamily, FontSize} from '../constants/style';
// import {COUNTRY_CODES, PHONE_REGEX} from '../constants/data';
// import CustomTextInput from './CustomTextInput';

// const DropdownWithIcons = () => {
//   const [selectedItem, setSelectedItem] = useState(COUNTRY_CODES[0]); // Set initial selected item
//   const [cplaceholder, SetCplaceholder] = useState(
//     PHONE_REGEX['+45'].placeholder,
//   );

//   return (
//     <View style={styles.mainContainer}>
//       <Dropdown
//        search
//       renderInputSearch={()=>(
//         <View style={styles.searchBarContainer}>
//         <Image
//           source={require('../assets/icons/search.png')}
//           style={styles.searchIcon}
//         />
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search for a country"
//           placeholderTextColor={Color.inputText}
//         />
//       </View>
//       )

//       }
//         style={styles.dropdown}
//         iconColor="black"
//         containerStyle={styles.listContainer}
//         data={COUNTRY_CODES}
//         value={selectedItem} // Bind selected item
//         onChange={item => {
//           setSelectedItem(item);
//           SetCplaceholder(PHONE_REGEX[item.code].placeholder);
//         }} // Update the selected item
//         renderItem={({icon, country, code}) => (
//           <View style={styles.renderMainContainer}>
//             <View style={styles.renderContainer}>
//               <Image source={icon} style={styles.flagImage} />
//               <Text style={styles.text}>{country}</Text>
//             </View>
//             <Text style={styles.text2}>{code}</Text>
//           </View>
//         )}
//         renderLeftIcon={() => (
         
//             <Image
//               source={selectedItem.icon} // Dynamically set the selected icon
//               style={styles.card1icon}
//             />
        
//         )}
//       />
//       <TextInput
//         style={styles.textInput}
//         placeholder={cplaceholder}
//         placeholderTextColor={Color.inputText}
//       />
//     </View>
//   );
// };

// export default DropdownWithIcons;

// const styles = StyleSheet.create({
  

//   renderMainContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: wp(2.5),
//     paddingHorizontal: wp(3),
//     borderBottomWidth: 1,
//     borderColor: Color.inputField,
//   },
//   renderContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   flagImage: {
//     width: wp(5),
//     height: wp(4.8),
//     marginRight: wp(3),
//   },
//   text: {
//     fontSize: FontSize.m,
//     color: Color.black,
//   },
//   text2: {
//     fontSize: FontSize.m,
//     color: Color.black,
//   },
//   textInput: {
//     flex: 1,
//     fontSize: FontSize.l,
//     color: Color.coal,
//     fontFamily: FontFamily.robotoRegular,
//     paddingHorizontal: 12,
//     padding: 0,
//   },
//   mainContainer: {
//     flexDirection: 'row',
//     alignItems:'center',
//     borderBottomWidth: 1,
//     borderColor: Color.inputField,
//     paddingVertical: wp(1.5),
//     marginTop: wp(4),
//     // paddingVertical: wp(1.5),
//     // marginRight: wp(6),
//   },

//   dropdown: {
    
//   },
//   text: {
//     fontSize: FontSize.m,
//     color: Color.black ,
//   },
//   text2: {
//     fontSize: FontSize.m,
//     color: Color.black,
//     paddingRight: wp(4.5),
//   },
//   flagImage: {
//     width: wp(5),
//     height: wp(4.8),
//     marginRight: 10,
//   },
//   renderMainContainer: {
//     backgroundColor: 'white',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     borderBlockColor:Color.inputField,
//     borderBottomWidth:1,
//   },
//   renderContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingLeft: wp(3),
//     paddingTop: wp(3),
//     paddingBottom: wp(2.8),
//   },
//   card1icon: {
//     borderWidth:0.5,
//     borderColor:Color.inputField,
//     height: wp(6),
//     width: wp(8),
//     resizeMode: 'contain',
  
 
//   },
//   textInput: {
//     flex: 1,
//     fontSize: FontSize.l,
//     color: Color.coal,
//     fontFamily: FontFamily.robotoRegular,
//     paddingHorizontal: 12,
//     padding: 0,
//     // width: wp(75),
//   },
//   listContainer: {
//     height: hp(27),
//     width: wp(91),
//     // marginLeft: 14,
//     // margin:0,
//     marginTop:8,
//     borderColor:Color.inputField,
//     borderRadius:20,
//   },
//   searchBarContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderColor: Color.inputField,
//     borderTopLeftRadius: wp(5),
//     borderTopRightRadius: wp(5),
//     paddingHorizontal: wp(3),
//     // marginVertical: wp(2),
//   },
//   searchIcon: {
//     width: wp(4),
//     height: wp(4),
//     marginRight: wp(2),
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: FontSize.m,
//     color: Color.black,
//     fontFamily: FontFamily.robotoRegular,
//     paddingVertical: wp(2),
//   },
// });

import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { hp, wp } from '../utils/utils';
import { Color, FontFamily, FontSize } from '../constants/style';
import { COUNTRY_CODES, PHONE_REGEX } from '../constants/data';
import CustomTextInput from './CustomTextInput';

const DropdownWithIcons = () => {
  const [selectedItem, setSelectedItem] = useState(COUNTRY_CODES[0]);
  const [cplaceholder, setCplaceholder] = useState(PHONE_REGEX['+45'].placeholder);
  const [searchText, setSearchText] = useState(''); // State to hold search text
  const [filteredData, setFilteredData] = useState(COUNTRY_CODES); // State to hold filtered country list

  // Handle search text change and filter the country codes
  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = COUNTRY_CODES.filter(item =>
      item.country.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <View style={styles.mainContainer}>
      <Dropdown
        search
        renderInputSearch={() => (
          <View style={styles.searchBarContainer}>
            <Image
              source={require('../assets/icons/search.png')}
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search for a country"
              placeholderTextColor={Color.inputText}
              value={searchText}
              onChangeText={handleSearch} // Update the search text and filter countries
            />
          </View>
        )}
        style={styles.dropdown}
        iconColor="black"
        containerStyle={styles.listContainer}
        data={filteredData} // Use filtered data here
        value={selectedItem}
        onChange={item => {
          setSelectedItem(item);
          setCplaceholder(PHONE_REGEX[item.code].placeholder);
        }}
        renderItem={({ icon, country, code }) => (
          <View style={styles.renderMainContainer}>
            <View style={styles.renderContainer}>
              <Image source={icon} style={styles.flagImage} />
              <Text style={styles.text}>{country}</Text>
            </View>
            <Text style={styles.text2}>{code}</Text>
          </View>
        )}
        renderLeftIcon={() => (
          <Image
            source={selectedItem.icon}
            style={styles.card1icon}
          />
        )}
      />
      <TextInput
        style={styles.textInput}
        placeholder={cplaceholder}
        placeholderTextColor={Color.inputText}
      />
    </View>
  );
};

export default DropdownWithIcons;

const styles = StyleSheet.create({
  renderMainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: wp(2.5),
    paddingHorizontal: wp(3),
    borderBottomWidth: 1,
    borderColor: Color.inputField,
    backgroundColor:Color.white

  },
  renderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flagImage: {
    width: wp(5),
    height: wp(4.8),
    marginRight: wp(3),
  },
  text: {
    fontSize: FontSize.m,
    color: Color.black,
  },
  text2: {
    fontSize: FontSize.m,
    color: Color.black,
  },
  textInput: {
    flex: 1,
    fontSize: FontSize.l,
    color: Color.coal,
    fontFamily: FontFamily.robotoRegular,
    paddingHorizontal: 12,
    padding: 0,
  },
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Color.inputField,
    paddingVertical: wp(1.5),
    marginTop: wp(4),
    
  },
  dropdown: {
    height:wp(7.6),
    // backgroundColor:'green'
  },
  card1icon: {
    borderWidth: 0.5,
    borderColor: Color.inputField,
    height: wp(6),
    width: wp(8),
    resizeMode: 'contain',
  },
  listContainer: {
    maxHeight: hp(27),
    width: wp(91),
    marginTop: 8,
    borderColor: Color.inputField,
    borderRadius: 20,

  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Color.inputField,
    borderTopLeftRadius: wp(5),
    borderTopRightRadius: wp(5),
    paddingHorizontal: wp(3),

  },
  searchIcon: {
    width: wp(4),
    height: wp(4),
    marginRight: wp(2),
  },
  searchInput: {
    flex: 1,
    fontSize: FontSize.m,
    color: Color.black,
    fontFamily: FontFamily.robotoRegular,
    paddingVertical: wp(2),
  },
});
