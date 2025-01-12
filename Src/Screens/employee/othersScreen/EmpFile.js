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

const EmpFile = () => {
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
    <CommonLayout heading={'Files'}>
        <View style={styles.container1}>
          <Text style={styles.Heading1}>Damage Reports</Text>
          <Pressable style={styles.btnTop}>
            <Text style={styles.btnTopTxt}>Make Claim</Text>
          </Pressable>
        </View>
        <FlatList
          data={report}
          contentContainerStyle={{paddingHorizontal:wp(5),paddingBottom:wp(10)}}
          renderItem={FileReport}
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

