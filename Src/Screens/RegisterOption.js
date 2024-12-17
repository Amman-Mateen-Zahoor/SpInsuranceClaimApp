import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import {hp, wp} from '../utils/utils';
import Company from 'react-native-vector-icons/Octicons';
import Employee from 'react-native-vector-icons/FontAwesome'
import { Color, FontFamily, FontSize } from '../constants/style';

const RegisterOption = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/splash-background.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.ContentContainer}>
        <Text style={styles.heading}>Register</Text>
        <Text style={styles.txt}>
          Register yourself as a company or employee
        </Text>
        <View style={styles.line} />

        <View style={styles.card}>
          <Pressable style={styles.card1} onPress={()=>console.log('first')} >
            <View style={styles.Icon2Container} >
                                       {/* <Company name = 'organization' size={30} style={styles.card1icon} /> */}
             <Image source={require('../assets/images/companiesRegister.png')} style={styles.card1icon}/>
             </View>
             <Text style={styles.cardLines}>Company</Text>
            
          </Pressable>
          <Pressable style={styles.card1} onPress={()=>console.log('first')} >
            <View style={styles.Icon2Container}>
            {/* <Employee name = 'user-o' size={30} style={styles.card1icon} /> */}
            <Image source={require('../assets/images/User_Icon.png')} style={styles.card1icon}/>
            </View >
            <Text style={styles.cardLines}>Employee</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default RegisterOption;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.darkBlue,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: wp(24),
    paddingBottom: wp(3),
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0.5,
  },
  ContentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{translateY: 180}],
  },
  heading: {
    color: Color.lightBlue,
    fontSize: FontSize.xl,
    fontFamily: FontFamily.robotoBold,
    marginBottom: wp(3),

  },
  txt: {
    color: Color.lightBlue,
    fontSize: FontSize.m,
    fontFamily: FontFamily.robotoBold,
    marginBottom: wp(5),
    textAlign: 'center',
  },
  //  line: {
  //   height: 3,
  //   width: wp(30),
  //   borderRadius: 3,
  //   backgroundColor:'#FFFFFF'
  // },
  line: {
    backgroundColor: Color.white,
    height: wp(1),
    // width: 110,
    width:wp(30),
    borderRadius: wp(1),
  },
  card: {
    marginTop: wp(10),
    flexDirection: 'row',
    // height: 200,
    // width: 340,

    // justifyContent: 'space-evenly',
    
  },
  card1: {
    // height: 120,
    height: hp(14),
    // width: 145,
    width: wp(40),
    backgroundColor: Color.white,
    borderRadius: wp(6),
    flexDirection: 'column',
    marginHorizontal:wp(2),
    alignItems:'center',
    justifyContent: 'center',
    
   
   
  },
  card1icon: {
    height:hp(2.6),
    width:wp(8),
 
    resizeMode:'contain'
  // backgroundColor: '#B3DFEF',
  // //  color:"#002d72",
  //  paddingLeft:6,
  //  paddingTop:6,
  //  borderRadius:3
 
  
  },
  // Icon1Container:{
  //   // height:hp(5),
  //   backgroundColor: Color.adjustableLightBlue(0.1),
  //   // backgroundColor: 'green',
  //   //  color:"#002d72",
  //    padding:6,
  //    borderRadius:3,
  // },
  
  Icon2Container:{
    height:hp(4.8),
    backgroundColor: Color.adjustableLightBlue(0.1),
    // backgroundColor: 'green',
    //  color:"#002d72",
     padding:6,
     paddingTop:10,
     borderRadius:3,
  },
  cardLines:{
    color:Color.darkBlue,
    // fontWeight:'bold',
    fontSize:FontSize.m,
    // paddingLeft:1,
    // marginBottom:10,
    marginTop:wp(3),
    fontFamily:FontFamily.robotoBold
   
    
  },
 

});
