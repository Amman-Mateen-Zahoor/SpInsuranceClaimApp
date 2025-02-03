import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import UpdateProfileLayout from '../../../layout/UpdateProfileLayout';
import React, {useEffect, useState} from 'react';
import CustomButton from '../../../components/CustomButton';
import {Color, FontFamily, FontSize} from '../../../constants/style';
import {wp} from '../../../utils/utils';
import PopUp from '../../../modals/PopUp';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '../../../redux/languageSlice';
import Popup from '../../../modals/PopUp';
import Localization from '../../../constants/localization';
const EmpSetLanguage = () => {
  const Languages = [
    {
      value: 'da',
      label: 'Danish',
      image: require('../../../assets//icons/flags/Denmark.png'),
    },
    {
      value:'en',
      label: 'English',
      image: require('../../../assets//icons/flags/UK.png'),
    },
  ];
  // const {lang} = useSelector((state)=>state.language)
 console.log("lllllanguage",lang)
 const [sendVisible,SetSendVisible]=useState(false)
  const [selectedLang, setSelectedLang] = useState(lang);
const dispatch =useDispatch()

const handleLanguageChange = (Lang) => {
  console.log("Function", Lang);
  dispatch(changeLanguage(Lang)) 
  SetSendVisible(true)
  
};

const {lang} =useSelector(state=>state.language)

  return (
    <UpdateProfileLayout
      heading={'Language'}
      subHeading={'Change Language'}
      notify>
      <View style={styles.container}>
        {Languages.map(item => (
          <TouchableOpacity
            key={item.value}
            style={styles.radioContainer}
            onPress={() => setSelectedLang(item.value)}>
            <Image source={item.image} style={styles.flag} />
            <Text style={styles.label}>{item.label}</Text>
            <View
              style={[
                styles.radioButton,
                selectedLang === item.value && styles.radioButtonSelected,
              ]}>
              {selectedLang === item.value && <View style={styles.innerCircle} />}
            </View>
          </TouchableOpacity>
        ))}
        <CustomButton
          title={'Update Language'}
          style={{marginBottom: wp(5), marginTop: wp(3)}}
          onPress={()=>{handleLanguageChange(selectedLang)}}
        />
           
           <Popup visible={sendVisible}
       handleClose={()=>{SetSendVisible(false)}}
       iconSource={require('../../../assets/icons/check.png')}
       mainHeading={Localization.updated_successfully[lang]}
       description={Localization.password_update_success[lang]}
       status={Localization.successfully[lang]}
       btnTitle={Localization.done[lang]}
       />
      </View>
    </UpdateProfileLayout>
  );
};

export default EmpSetLanguage;

const styles = StyleSheet.create({
  container: {
    paddingTop: wp(5),
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: wp(2),
  },
  flag: {
    width: wp(6),
    height: wp(6),
    marginRight: wp(3),
    borderRadius: wp(3), 
  },
  label: {
    fontSize: FontSize.m,
    color: Color.coal,
    fontFamily: FontFamily.robotoRegular,
    flex: 1, 
  },
  radioButton: {
    width: wp(5),
    height: wp(5),
    borderRadius: wp(2.5),
    borderWidth: 1,
    borderColor: Color.inputField,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonSelected: {
    borderColor: Color.darkBlue, 
  },
  innerCircle: {
    width: wp(3),
    height: wp(3),
    borderRadius: wp(1.8),
    backgroundColor: Color.darkBlue, 
  },
});
