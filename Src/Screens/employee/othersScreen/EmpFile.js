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
          renderItem={({item}) => 
             (
              <View style={styles.container2}>
                <View style={styles.container2icon}>
                  <Image
                    source={require('../../../assets/icons/outerfile.png')}
                    style={styles.iconimg}
                  />
                </View>
                {/* Text Views */}
                {/* Main */}
                <View style={styles.textmaincontainer}>
                  {/* TextTop */}
                  <View style={styles.textcontainer}>
                    <Text style={styles.toptxtLft}>Claim Date:</Text>
                    <Text style={styles.toptxtrgt}>{item.date}</Text>
                  </View>
                  {/* textbottom */}
                  <View style={[styles.textcontainer,{marginTop:wp(1)}]}>
                    <Text style={styles.toptxtLft}>Damage Type:</Text>
                    <Text style={styles.toptxtrgt}>{item.type}</Text>
                  </View>
                </View>
                {/* btn */}
                <Pressable
                  style={styles.containerbtn}>
                  <Text
                    style={styles.containerbtntxt}>
                    Report.pdf
                  </Text>
                </Pressable>
              </View>
            )
          }
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
  },
  container2: {
    backgroundColor: Color.adjustableLightBlue(0.1),
    flexDirection: 'row',
    height: wp(20),
    alignItems: 'center',
    paddingHorizontal: wp(3),
    borderRadius:wp(2),
    marginBottom:wp(4)
  },
  toptxtLft: {
    color: Color.text,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.m,
  },
  toptxtrgt: {
    color: Color.black,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.m,
    marginLeft:wp(1)
  },
  container2icon: {
    backgroundColor: Color.adjustableLightBlue(0.2),
    height: wp(8),
    width: wp(8),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(1),
    margin:wp(1)
  },
  iconimg: {
    height: wp(5),
    width: wp(5),
    resizeMode: 'contain',
  },
  textmaincontainer: {
    flex: 1,
    marginLeft: wp(2) 
  },
    textcontainer:{flexDirection: 'row'},
    containerbtn:{
      borderWidth: 1,
      borderColor: Color.darkBlue,
      padding: wp(1),
      borderRadius: wp(2),
      marginLeft: wp(7),
      paddingHorizontal:wp(2)
    },
    containerbtntxt:{
      color: Color.darkBlue,
      alignSelf: 'center',
      fontFamily: FontFamily.robotoRegular,
      fontSize: FontSize.m,
    },
});
