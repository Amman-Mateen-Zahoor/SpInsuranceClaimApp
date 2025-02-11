import {Pressable, StyleSheet, Text, View, Image,FlatList} from 'react-native';
import React, {useState} from 'react';
import CommonLayout from '../../../layout/CommonLayout';
import {useSelector} from 'react-redux';
import Localization from '../../../constants/localization';
import {Color} from '../../../constants/style';
import {hp, wp} from '../../../utils/utils';
import CmpEmployeeCard from '../../../components/CmpEmployeeCard';

const CmpEmployees = () => {
  const {lang} = useSelector(state => state.language);
    const [report, setReport] = useState([
      {
        name: 'William Karlsson',
        email:'WilliamKarlson@gmai.com',
        img: require('../../../assets/images/pp.jpg'),
        claim:'02'
      },
      {
        name: 'Cristina Nilsson',
        email:'WilliamKarlson@gmai.com',
        img: require('../../../assets/images/p2.jpg'),
        claim:'02'
      },
      {
        name: 'William Karlsson',
        email:'WilliamKarlson@gmai.com',
        img: require('../../../assets/images/pp.jpg'),
        claim:'02'
      },
      {
        name: 'Cristina Nilsson',
        email:'WilliamKarlson@gmai.com',
        img: require('../../../assets/images/p2.jpg'),
        claim:'02'
      },
      {
        name: 'William Karlsson',
        email:'WilliamKarlson@gmai.com',
        img: require('../../../assets/images/pp.jpg'),
        claim:'02'
      },
      {
        name: 'Cristina Nilsson',
        email:'WilliamKarlson@gmai.com',
        img: require('../../../assets/images/p2.jpg'),
        claim:'02'
      },
      {
        name: 'William Karlsson',
        email:'WilliamKarlson@gmai.com',
        img: require('../../../assets/images/pp.jpg'),
        claim:'02'
      },
      {
        name: 'Cristina Nilsson',
        email:'WilliamKarlson@gmai.com',
        img: require('../../../assets/images/p2.jpg'),
        claim:'02'
      },
      {
        name: 'William Karlsson',
        email:'WilliamKarlson@gmai.com',
        img: require('../../../assets/images/pp.jpg'),
        claim:'02'
      },
      {
        name: 'Cristina Nilsson',
        email:'WilliamKarlson@gmai.com',
        img: require('../../../assets/images/p2.jpg'),
        claim:'02'
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
        <FlatList
          data={report}
          contentContainerStyle={{
            paddingBottom: wp(10),
          }}
          renderItem={({item}) => <CmpEmployeeCard item={item} />}
        />
      </View>
    </CommonLayout>
  );
};

export default CmpEmployees;

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    paddingHorizontal:wp(5),
    paddingTop:wp(5)
  },
});
