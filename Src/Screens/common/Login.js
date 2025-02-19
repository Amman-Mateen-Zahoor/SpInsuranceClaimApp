import {Pressable, StyleSheet, Text, View, Image} from 'react-native';
import AuthLayout from '../../layout/AuthLayout';
import CustomTextInput from '../../components/CustomTextInput';
import {Color, FontFamily, FontSize, TextStyles} from '../../constants/style';
import {wp} from '../../utils/utils';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import Localization from '../../constants/localization';
import {useSelector} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { EMAIL_REGEX } from '../../constants/regex';

const Login = ({from}) => {
  const navigation = useNavigation();
  const {lang} = useSelector(state => state.language);
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .test('email', Localization.invalid_email[lang], val =>
        EMAIL_REGEX.test(val || ''),
      )
      .required(Localization.email_required[lang]),
    password: Yup.string().required(Localization.password_required[lang]),
  });
  return (
    <Formik
      initialValues={{email: '' ,password: ''}}
      onSubmit={() => {
        from === 'employee'
          ? navigation.navigate('EmployeeStack')
          : navigation.navigate('CmpStack');
      }}
      validationSchema={validationSchema}>
      {({values, handleSubmit, handleChange, errors ,touched,handleBlur}) => (
        <AuthLayout
          text1={Localization.hello[lang]}
          text2={Localization.login[lang]}
          text3={Localization.please_login[lang]}>
          <CustomTextInput
            placeholder={Localization.email[lang]}
            imageSource={require('../../assets/icons/mailicon.png')}
            value={values.email}
            onChangeText={handleChange('email')}
            error={touched.email && errors.email}
            autoCapitalize='none'
            handleBlur={handleBlur('email')}        
            keyboardType={'email-address'}
            // onSubmitEditing={(event) => event.currentTarget.next?.focus()}
            
          />
          <CustomTextInput
            placeholder={Localization.password[lang]}
            imageSource={require('../../assets/icons/password.png')}
            value={values.password}
            onChangeText={handleChange('password')}
            error={touched.password && errors.password}
            secureTextEntry={true} // Enable password toggle
            autoCapitalize='none'
            onBlur={handleBlur('password')}
          />
          <Pressable
            onPress={() => {
              from === 'employee'
                ? navigation.navigate('ForgetPasswordEmployee')
                : navigation.navigate('ForgetPasswordCompany');
            }}>
            <Text style={styles.text}>
              {Localization.forget_password[lang]}
            </Text>
          </Pressable>
          <View style={styles.lineContainer}>
            <View style={styles.line}></View>
            <Text style={{color: Color.inputText}}>
              {Localization.or[lang]}
            </Text>
            <View style={styles.line2}></View>
          </View>

          <Text
            style={{
              color: Color.inputText,
              paddingTop: wp(5),
              paddingBottom: wp(6),
              alignSelf: 'center',
            }}>
            {Localization.login_with_face_id[lang]}
          </Text>
          <Pressable
            onPress={() => {
              console.log('first');
            }}>
            <Image
              source={require('../../assets/icons/face-id.png')}
              style={styles.image}></Image>
          </Pressable>

          <CustomButton
            title={Localization.login[lang]}
            onPress={handleSubmit}
            style={{width: wp(90)}}
          />
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Text
              style={{
                color: Color.inputText,
                paddingTop: wp(4),
              }}>
              {Localization.did_not_have_account[lang]}{' '}
            </Text>
            <Pressable
              onPress={() => {
                from === 'employee'
                  ? navigation.navigate('OrgSignupEmployee')
                  : navigation.navigate('OrgSignupCompany');
              }}>
              <Text
                style={{
                  color: Color.darkBlue,
                  paddingTop: wp(4),
                  fontSize: FontSize.l,
                  fontFamily: FontFamily.robotoBold,
                }}>
                {/* Sign In */}
                {Localization.signup[lang]}
              </Text>
              <View></View>
            </Pressable>
          </View>
        </AuthLayout>
      )}
    </Formik>
  );
};

export default Login;

const styles = StyleSheet.create({
  text: {
    color: Color.darkBlue,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.m,
    paddingTop: wp(3),
    alignSelf: 'flex-end',
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: wp(7),
  },
  line: {
    width: wp(40),
    borderBottomWidth: 1,
    borderColor: Color.inputField,
    marginRight: wp(1),
  },
  line2: {
    width: wp(41),
    borderBottomWidth: 1,
    borderColor: Color.inputField,
    marginLeft: wp(1),
  },
  image: {
    height: wp(20),
    width: wp(20),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
