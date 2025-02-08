import {Pressable, StyleSheet, Text, View, Image,FlatList} from 'react-native';
import React, {useState} from 'react';
import CommonLayout from '../../../layout/CommonLayout';
import {useSelector} from 'react-redux';
import Localization from '../../../constants/localization';
import {Color} from '../../../constants/style';
import {hp, wp} from '../../../utils/utils';
import DatePicker from 'react-native-date-picker';
import CmpDamageCard from '../../../components/CmpDamageCard';

const CmpSeeAll = () => {
  const {lang} = useSelector(state => state.language);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
    const [report, setReport] = useState([
      {
        name: 'William Karlsson',
        date: 'May 25, 2023',
        type: 'Vehicle',
        img: require('../../../assets/images/pp.jpg'),
      },
      {
        name: 'Cristina Nilsson',
        date: 'May 25, 2023',
        type: 'Property',
        img: require('../../../assets/images/p2.jpg'),
      },
      {
        name: 'William Karlsson',
        date: 'May 25, 2023',
        type: 'Vehicle',
        img: require('../../../assets/images/pp.jpg'),
      },
      {
        name: 'Cristina Nilsson',
        date: 'May 25, 2023',
        type: 'Property',
        img: require('../../../assets/images/p2.jpg'),
      },
      {
        name: 'William Karlsson',
        date: 'May 25, 2023',
        type: 'Vehicle',
        img: require('../../../assets/images/pp.jpg'),
      },
      {
        name: 'Cristina Nilsson',
        date: 'May 25, 2023',
        type: 'Property',
        img: require('../../../assets/images/p2.jpg'),
      },
      {
        name: 'William Karlsson',
        date: 'May 25, 2023',
        type: 'Vehicle',
        img: require('../../../assets/images/pp.jpg'),
      },
      {
        name: 'Cristina Nilsson',
        date: 'May 25, 2023',
        type: 'Property',
        img: require('../../../assets/images/p2.jpg'),
      },
      {
        name: 'William Karlsson',
        date: 'May 25, 2023',
        type: 'Vehicle',
        img: require('../../../assets/images/pp.jpg'),
      },
      {
        name: 'Cristina Nilsson',
        date: 'May 25, 2023',
        type: 'Property',
        img: require('../../../assets/images/p2.jpg'),
      },
      {
        name: 'William Karlsson',
        date: 'May 25, 2023',
        type: 'Vehicle',
        img: require('../../../assets/images/pp.jpg'),
      },
      {
        name: 'Cristina Nilsson',
        date: 'May 25, 2023',
        type: 'Property',
        img: require('../../../assets/images/p2.jpg'),
      },
    ]);
  return (
    <CommonLayout
      searchHeading={Localization.damage_reports[lang]}
      search
      company
      disablScrollView
      >
      <View style={styles.mainContainer}>
        <View style={styles.rowMainContainer}>
        <View style={styles.row}>
          <Text numberOfLines={1} style={{color: Color.inputText}}>{Localization.from[lang]}</Text>
          <Pressable
            hitSlop={{bottom: 5, left: 5, right: 5, top: 5}}
            onPress={() => setOpen(true)}>
            <Image
              source={require('../../../assets/icons/calendar.png')}
              style={styles.icon}
            />
          </Pressable>
          <DatePicker
            mode={'date'}
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
        </View>
        <View style={styles.row}>
          <Text style={{color: Color.inputText}}>{Localization.to[lang]}</Text>
          <Pressable
            hitSlop={{bottom: 5, left: 5, right: 5, top: 5}}
            onPress={() => setOpen1(true)}>
            <Image
              source={require('../../../assets/icons/calendar.png')}
              style={styles.icon}
            />
          </Pressable>
          <DatePicker
            mode={'date'}
            modal
            open={open1}
            date={date}
            onConfirm={selectedDate => {
              setOpen(false);
              setDate(selectedDate);
            }}
            onCancel={() => {
              setOpen1(false);
            }}
          />
        </View>
        </View>
        <FlatList
          data={report}
            // contentContainerStyle={{paddingBottom:wp(80)}}
            // style={{flex:1}}
          contentContainerStyle={{
            // flexGrow:1,
            // backgroundColor:'green'
            // paddingBottom: wp(10),
          }}
          renderItem={({item}) => <CmpDamageCard item={item} />}
          // ListFooterComponent={<View/>}
          // ListFooterComponentStyle={{height:wp(50)}}
        />
      </View>
    </CommonLayout>
  );
};

export default CmpSeeAll;

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    paddingHorizontal:wp(5),
    paddingTop:wp(5)
  },
  rowMainContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:wp(5)
  },
  row: {
    flexDirection: 'row',
    width:wp(43),
    justifyContent:'space-between',
    borderWidth:1,
    borderColor:Color.inputField,
    borderRadius:wp(2),
    paddingHorizontal:wp(4),
    paddingVertical:wp(3),

  },
 
  icon: {
    width: wp(4),
    height: wp(4),
    resizeMode: 'contain',
    position:'absolute',
    right:1
  },
});
