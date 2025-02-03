import {FlatList, Pressable, StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import CommonLayout from '../../../layout/CommonLayout';
import {wp} from '../../../utils/utils';
import {
  Color,
  FontFamily,
  FontSize,
  TextStyles,
} from '../../../constants/style';
import FileReport from '../../../components/FileReport';
import { useSelector } from 'react-redux';
import Localization from '../../../constants/localization';

const EmpFile = () => {
 const {lang} =useSelector(state=>state.language)
  const [report, setReport] = useState([
    {date: 'May 25,2023', type: 'Vehicle'},
    {date:'May 25,2023',type:'Vehicle'},
    {date:'May 25,2023',type:'Vehicle'},
    {date:'May 25,2023',type:'Vehicle'},
    {date:'May 25,2023',type:'Vehicle'},
    {date:'May 25,2023',type:'Vehicle'},
    {date:'May 25,2023',type:'Vehicle'},
    {date:'May 25,2023',type:'Vehicle'},
    {date:'May 25,2023',type:'Vehicle'},
    {date:'May 25,2023',type:'Vehicle'},
    {date:'May 25,2023',type:'Vehicle'},
  ]);
  return (
    <CommonLayout heading={Localization.files[lang]} disablScrollView>
        <View style={styles.container1}>
          <Text style={styles.Heading1}>{Localization.damage_reports[lang]}</Text>
          <Pressable style={styles.btnTop}>
            <Text style={styles.btnTopTxt}>{Localization.make_claim[lang]}</Text>
          </Pressable>
        </View>
        <FlatList
          data={report}
          contentContainerStyle={{paddingHorizontal:wp(5),paddingBottom:wp(10)}}
          renderItem={({item})=><FileReport item={item} />}

        />
    </CommonLayout>
  );
};

export default EmpFile;
const styles = StyleSheet.create({
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:wp(5)
  },
  Heading1: {
    color: Color.darkBlue,
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.xl,
  },
  btnTop: {
    backgroundColor: Color.darkBlue,
    height: wp(11),
    width: wp(30),
    justifyContent: 'center',
    borderRadius: wp(2.5),
  },

  btnTopTxt: {
    alignSelf: 'center',
    fontFamily: FontFamily.robotoRegular,
  }
  
});

