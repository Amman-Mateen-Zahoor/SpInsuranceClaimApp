import {Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AuthLayout from '../../layout/AuthLayout';
import {Color, FontFamily, FontSize} from '../../constants/style';


import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import CustomButton from '../../components/CustomButton';
import { wp } from '../../utils/utils';


const CELL_COUNT = 4;

const OtpVerification = ({from}) => {
  const [timer, setTimer] = useState(120);
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
const[submitClick,setSubmitClick]=useState(false)
const[disble,setDisable]=useState(true)
  const startInterval = () => {
   setDisable(true)
    setTimer(120)
    const interval = setInterval(() => {
      setTimer(timer => {
        if (timer <= 1) {
          setDisable(false)
          clearInterval(interval);
        }
        
        return timer - 1;
      });
    }, 1000);
  };



  useEffect(() => {
    startInterval();
  }, []);


  const renderTimer = ( ) => {
    const minutes = Math.floor(timer / 60) .toString().padStart(2,'0'

    )
    const seconds = (timer % 60).toString().padStart(2,'0')
    return `${minutes}:${seconds}`  
  }
  return (
    <AuthLayout
      text1={'OTP'}
      text2={'Verification'}
      text3={'Verification code send via email'}>
      <View>
        <CodeField
        
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          autoFocus={true}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          autoComplete={Platform.select({
            android: 'sms-otp',
            default: 'one-time-code',
          })}
          testID="my-code-input"
          renderCell={({index, symbol, isFocused}) => (
            // console.log('index',index,'sym',symbol,'isfoc',isFocused,'hhhhh')
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell,submitClick && !symbol &&styles.errorfocusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor style={{color:'red'}}/> : null)}
            </Text>
          )}
        />
        <View>
          <Text style={{alignSelf: 'center', color: 'red', marginTop:wp(5)}}>{renderTimer()}s</Text>
          <CustomButton title="Submit" style={{width: wp(90)}} onPress={setSubmitClick} />
          <View
            style={{
              flexDirection: 'row',
              paddingLeft: wp(25),
              paddingTop: wp(2),
            }}>
            <Text
              style={{
                color: Color.inputText,
                paddingTop: wp(3),
              }}>
              Did'nt get code?{' '}
            </Text>
            <TouchableOpacity disabled={disble} onPress={startInterval}> 
              <Text
                style={[styles.resendBtnTxt,disble&&styles.disablBtnTxt]}>
                {/* Sign In */}
                Resend
              </Text>
              <View></View>
              </TouchableOpacity>
          </View>
        </View>
      </View>
    </AuthLayout>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({
  textInput: {
    // height:wp(6),
    width: wp(13.5),
    borderColor: Color.inputField,
    borderWidth: 1,
    textAlign: 'center',
    color: Color.black,
    fontSize: FontSize.xxxl,

    borderRadius: wp(2),
  },
  codeFieldRoot: {justifyContent: 'center'},
  cell: {
    marginHorizontal: wp(3),
    width: wp(11),
    height: wp(11),
    lineHeight: wp(11),
    fontSize: FontSize.xxxl,
    // backgroundColor: Color.inputField,
    borderColor: Color.inputField,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: wp(1),
    color: Color.black,
  },
  focusCell: {
    borderColor: Color.darkBlue,
    color: Color.darkBlue,
  },
  errorfocusCell: {
    borderColor: 'red',

  },
  resendBtnTxt:{
    color: Color.darkBlue,
    paddingTop: wp(3),
    fontSize: FontSize.l,
    fontFamily: FontFamily.robotoBold,
  },
  disablBtnTxt:{
    opacity:0.6
  },
});
