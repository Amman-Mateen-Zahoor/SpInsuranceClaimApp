import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  StatusBar,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {hp, wp} from '../utils/utils';
import ArrowRight from 'react-native-vector-icons/Feather';
import { Color, FontFamily, FontSize } from '../constants/style';
import CustomButton from '../components/CustomButton';
 
const GetStarted = ({navigation}) => {
 
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/splash-background.png')}
        style={styles.backgroundImage}
      />
      <View style={{flexDirection: 'row'}}>
        <Image source={require('../assets/images/icon.png')} />
        <Image source={require('../assets/images/icon-text.png')} />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomHeadingContainer}>
          <Text style={styles.heading}>
            {' '}
            Welcome to Söderberg {'\n'}& Partners
          </Text>
          <Text style={styles.para}>
            Our goal is to offer advice and products that keep our customers one
            step ahead, with cost-effective solutions that help them manage
            risks effectively.
          </Text>
          <View style={styles.linesContainer}>
            <View style={[styles.line, styles.focusedLine]} />
            <View style={styles.line} />
            <View style={styles.line} />
          </View>

          
            {/* <TouchableOpacity style =  {styles.btnContainer} 
            onPress={()=>{
                navigation.navigate('RegisterOption')
            }}
            >
              <Text style={styles.btntext}>
                Get Started{' '}
                <ArrowRight name="arrow-right" size={20}  />
              </Text>
            </TouchableOpacity> */}

            <CustomButton 
            title="Get Started"
            iconName={"arrow-right-long"}
            onPress={()=>{
              navigation.navigate('RegisterOption')
          }}

            />

            <Text style={styles.bottomTxt} >
            By continuing, you agree to our 
            <Text style={styles.privacy}> Privacy {'\n'} Policy</Text>
            <Text style={styles.privacy}> Terms & Conditions. </Text>
            </Text>
        </View>
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.darkBlue,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: wp(20),
    paddingBottom: 10,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0.5,
  },
  bottomContainer: {
    height: wp(107),
    width: wp(90),
    justifyContent: 'space-between',
    backgroundColor: Color.white,
    // Uniform radius for all corners
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
    borderRadius:wp(6)
  },
  bottomHeadingContainer: {
    height: hp(20),
    padding: wp(5),
  },
  heading: {
    color: '#002d72',
    fontSize: FontSize.xxxl,
    fontFamily: FontFamily.robotoBold,
   
  },
  para: {
    color: Color.text,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.m,
    marginTop: wp(2),
  },

  linesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    height: wp(12),
  },
  line: {
    height: wp(2.5),
    width: wp(5),
    backgroundColor: Color.lightBlue,
    borderRadius: hp(1),
    marginRight: wp(2),
  },
  focusedLine: {
    width: wp(9),
    backgroundColor: Color.darkBlue,
  },
  btnContainer: {
    backgroundColor: Color.darkBlue,
    flexDirection: 'row',
    height: 37,
    justifyContent: 'center',
    alignItems: 'center',
 borderRadius:wp(3),
    marginTop:wp(6)


  },
  btntext:{
    fontSize:FontSize.xl,
    color:Color.lightBlue
  },
   bottomTxt: {
    marginTop:wp(24),
    color: "#332e30",
    fontFamily:FontFamily.robotoRegular,
    fontSize: FontSize.m,
    textAlign: 'center'
  },
  privacy: {
    color: Color.darkBlue ,
    fontFamily: FontFamily.robotoBold,
    
  }
});
