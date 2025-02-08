import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CommonLayout from '../../../layout/CommonLayout';
import {Color, FontFamily, FontSize} from '../../../constants/style';
import {wp} from '../../../utils/utils';
import NotifyCard from '../../../components/NotifyCard';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import Localization from '../../../constants/localization';

const Notify = ({from}) => {
  //     const uperLetter = (a) => (
  //   a.charAt(0).toUpperCase() + a.slice(1)
  // );

  // console.log("Upper", uperLetter('amman'));
const {lang} = useSelector(state=>state.language)
 const {bottom} =useSafeAreaInsets()
  const data = [
    {
      icon1: require('../../../assets/icons/cubixlogo.png'),
      heading: 'Cubix Solutions',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting.',
      time: '5:30 PM',
      icon2: require('../../../assets/icons/trash.png'),
    },
    {
      icon1: require('../../../assets/icons/cubixlogo.png'),
      heading: 'Cubix Solutions',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting.',
      time: '5:30 PM',
      icon2: require('../../../assets/icons/trash.png'),
    },
    {
      icon1: require('../../../assets/icons/cubixlogo.png'),
      heading: 'Cubix Solutions',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting.',
      time: '5:30 PM',
      icon2: require('../../../assets/icons/trash.png'),
    },
    {
      icon1: require('../../../assets/icons/cubixlogo.png'),
      heading: 'Cubix Solutions',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting.',
      time: '5:30 PM',
      icon2: require('../../../assets/icons/trash.png'),
    },
    {
      icon1: require('../../../assets/icons/cubixlogo.png'),
      heading: 'Cubix Solutions',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting.',
      time: '5:30 PM',
      icon2: require('../../../assets/icons/trash.png'),
    },
    {
      icon1: require('../../../assets/icons/cubixlogo.png'),
      heading: 'Cubix Solutions',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting.',
      time: '5:30 PM',
      icon2: require('../../../assets/icons/trash.png'),
    },
    {
      icon1: require('../../../assets/icons/cubixlogo.png'),
      heading: 'Cubix Solutions',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting.',
      time: '5:30 PM',
      icon2: require('../../../assets/icons/trash.png'),
    },
    {
      icon1: require('../../../assets/icons/cubixlogo.png'),
      heading: 'Cubix Solutions',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting.',
      time: '5:30 PM',
      icon2: require('../../../assets/icons/trash.png'),
    },
    {
      icon1: require('../../../assets/icons/cubixlogo.png'),
      heading: 'Cubix Solutions',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting.',
      time: '5:30 PM',
      icon2: require('../../../assets/icons/trash.png'),
    },
    {
      icon1: require('../../../assets/icons/cubixlogo.png'),
      heading: 'Cubix Solutions',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting.',
      time: '5:30 PM',
      icon2: require('../../../assets/icons/trash.png'),
    },
    

                        
  ];
  return (
    <CommonLayout search searchHeading={Localization.notifications[lang]}  disablScrollView >
      <Pressable>
        <Text style={styles.topHeading}>Mark all as read</Text>
      </Pressable>
      <FlatList
        style={{marginBottom:wp(5)+bottom,marginHorizontal:wp(5)}}
        data={data}
        renderItem={({item}) => 
       <NotifyCard item={item}/>
        }
      />
    </CommonLayout>
  );
};

export default Notify;

const styles = StyleSheet.create({
  topHeading: {
    color: Color.darkBlue,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.m,
    textDecorationLine: 'underline',
    textDecorationColor: Color.darkBlue,
    alignSelf: 'flex-end',
    margin: wp(5),
  }
});
