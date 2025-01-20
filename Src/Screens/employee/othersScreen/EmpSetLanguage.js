import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import UpdateProfileLayout from '../../../layout/UpdateProfileLayout';
import React, {useState} from 'react';
import CustomButton from '../../../components/CustomButton';
import {Color, FontFamily, FontSize} from '../../../constants/style';
import {wp} from '../../../utils/utils';
import PopUp from '../../../modals/PopUp';
const EmpSetLanguage = () => {
  const radioButtons = [
    {
      id: '1',
      label: 'Danish',
      value: 'danish',
      image: require('../../../assets//icons/flags/Denmark.png'),
    },
    {
      id: '2',
      label: 'English',
      value: 'english',
      image: require('../../../assets//icons/flags/UK.png'),
    },
  ];
 const [sendVisible,SetSendVisible]=useState(false)
  const [selectedId, setSelectedId] = useState('2');
  return (
    <UpdateProfileLayout
      heading={'Language'}
      subHeading={'Change Language'}
      notify>
      <View style={styles.container}>
        {radioButtons.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.radioContainer}
            onPress={() => setSelectedId(item.id)}>
            <Image source={item.image} style={styles.flag} />
            <Text style={styles.label}>{item.label}</Text>
            <View
              style={[
                styles.radioButton,
                selectedId === item.id && styles.radioButtonSelected,
              ]}>
              {selectedId === item.id && <View style={styles.innerCircle} />}
            </View>
          </TouchableOpacity>
        ))}
        <CustomButton
          title={'Update Language'}
          style={{marginBottom: wp(5), marginTop: wp(3)}}
          onPress={()=>{SetSendVisible(true)}}
        />
           
 <PopUp 
       visible={sendVisible}
       handleClose={()=>{SetSendVisible(false)}}
       iconSource={require('../../../assets/icons/check.png')}
       mainHeading={'Updated Successfully'}
       description={'Your Language has been updated '}
       status={'successfully'}
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
