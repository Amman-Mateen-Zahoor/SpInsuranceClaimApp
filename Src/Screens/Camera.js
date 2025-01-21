// import React, {useLayoutEffect, useState} from 'react';
// import {
//   StyleSheet,
//   View,
//   TouchableOpacity,
//   Text,
//   Image,
//   StatusBar,
// } from 'react-native';
// import {RNCamera} from 'react-native-camera';
// import {wp} from '../utils/utils';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';
// import {Color} from '../constants/style';
// import { useNavigation } from '@react-navigation/native';

// const Camera = () => {
//   useLayoutEffect(() => {
//     StatusBar.setHidden(true);
//   }, []);
// const [photoSelected,setPhotoSelected] =useState(true)
// const [video,setVideo] =useState(false)
// const [click,setClick]=useState(false)
// const[pause,setPause]=useState(false)
// const [flash,setFlash]=useState(true)
//   const {top, bottom} = useSafeAreaInsets();
//   const handleVideoBtn = () =>{
//     setPhotoSelected(false)
//     setVideo(true)
//   }
//   const handlePhotoBtn = () =>{
//     setPhotoSelected(true)
//     setVideo(false)
//     setClick(false)
//   }
//   const navigation =useNavigation()
//   return (
//     <View style={styles.container}>
//       <View style={[styles.header, {marginTop: wp(3) + top}]}>
//         <TouchableOpacity
//             onPress={()=>{navigation.goBack()}}
//           hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
//           <Image
//             source={require('../assets/icons/leftarrow.png')}
//             style={styles.icon}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity
//             onPress={()=>{setFlash(!flash)}}
//           hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
//           <Image
//             source={flash?require('../assets/icons/flash.png'): require('../assets/icons/unflash.png')}
//             style={styles.icon1}
//           />
//         </TouchableOpacity>
//       </View>
//       <RNCamera style={styles.preview} type={RNCamera.Constants.Type.front}>
//         <View style={[styles.bottom, {paddingVertical: wp(4) + bottom}]}>
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               marginBottom: wp(2),
//             }}>
//             <TouchableOpacity
//                 onPress={()=>{setPause(!pause)}}
//               hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
//            <Image
//     source={
//       video && click
//         ? pause
//           ? require('../assets/icons/pause.png')
//           : require('../assets/icons/resume.png')
//         : require('../assets/icons/gallery.png')
//     }
//     style={styles.icon4}
//   />
//             </TouchableOpacity>

//             <TouchableOpacity
//                 onPress={()=>{setClick(!click)}}
//               hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
//               <Image
//                 source=
//                     {(video && click)?require('../assets/icons/video.png'):require('../assets/icons/click.png')}

//                 style={styles.icon3}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity disabled={(video && click)?true:false}
//               //   onPress={()=>{navigation.goBack()}}
//               hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
//               <Image
//                 source={require('../assets/icons/changecamera.png')}
//                 style={[styles.icon4,{opacity:(video && click )?0.7:1}]}
//               />
//             </TouchableOpacity>
//           </View>
//           <View style={[styles.bottomtxt]}>
//             <TouchableOpacity onPress={()=>handlePhotoBtn()}>
//               <Text style={photoSelected?{color: Color.white}:{color: Color.text}}>Photo{'   '}</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={()=>handleVideoBtn()}>
//               <Text style={video?{color: Color.white}:{color: Color.text}}>Video</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </RNCamera>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {flex: 1, backgroundColor: Color.black},
//   preview: {flex: 1},

//   icon: {
//     height: wp(3.5),
//     width: wp(3.5),
//     resizeMode: 'contain',
//   },
//   icon1: {
//     height: wp(4.5),
//     width: wp(4.5),
//     resizeMode: 'contain',
//   },
//   header: {
//     flexDirection: 'row',
//     marginBottom: wp(5),
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: wp(6),
//   },
//   bottom: {
//     backgroundColor: 'black',
//     position: 'absolute',
//     bottom: 0,
//     right: 0,
//     left: 0,
//     paddingHorizontal: wp(17),
//   },
//   icon3: {
//     height: wp(15),
//     width: wp(15),
//     resizeMode: 'contain',
//   },
//   bottomtxt: {
//     flexDirection: 'row',
//     alignSelf: 'center',
//   },
//   icon4: {
//     height: wp(10),
//     width: wp(10),
//     resizeMode: 'contain',
//   },
// });

// export default Camera;
import React, {useLayoutEffect, useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  StatusBar,
  Alert,
  Platform,
  Linking,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {wp} from '../utils/utils';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Color} from '../constants/style';
import {useNavigation} from '@react-navigation/native';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

const Camera = () => {
  useLayoutEffect(() => {
    StatusBar.setHidden(true);
  }, []);

  const [photoSelected, setPhotoSelected] = useState(true);
  const [video, setVideo] = useState(false);
  const [click, setClick] = useState(false);
  const [pause, setPause] = useState(false);
  const [flash, setFlash] = useState(true);
  const [hasPermission, setHasPermission] = useState(false);

  const {top, bottom} = useSafeAreaInsets();
  const navigation = useNavigation();

  // Function to check camera permission
  const checkCameraPermission = async () => {
    const permissionStatus = await check(PERMISSIONS.ANDROID.CAMERA);

    if (permissionStatus === RESULTS.GRANTED) {
      setHasPermission(true);
    } else {
      setHasPermission(false);
    }
  };
  useEffect(() => {
    checkCameraPermission();
  }, []);

  const handleVideoBtn = () => {
    setPhotoSelected(false);
    setVideo(true);
  };

  const handlePhotoBtn = () => {
    setPhotoSelected(true);
    setVideo(false);
    setClick(false);
  };

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Text style={styles.permissionText}>Camera not authorized</Text>
        <TouchableOpacity
          onPress={() => Linking.openSettings()}
          style={styles.button}>
          <Text style={styles.buttonText}>Go to Settings</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={[styles.header, {marginTop: wp(3) + top}]}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
          <Image
            source={require('../assets/icons/leftarrow.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setFlash(!flash);
          }}
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
          <Image
            source={
              flash
                ? require('../assets/icons/flash.png')
                : require('../assets/icons/unflash.png')
            }
            style={styles.icon1}
          />
        </TouchableOpacity>
      </View>

      <RNCamera style={styles.preview} type={RNCamera.Constants.Type.front}>
        <View style={[styles.bottom, {paddingVertical: wp(4) + bottom}]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: wp(2),
            }}>
            <TouchableOpacity
              onPress={() => {
                setPause(!pause);
              }}
              hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
              <Image
                source={
                  video && click
                    ? pause
                      ? require('../assets/icons/pause.png')
                      : require('../assets/icons/resume.png')
                    : require('../assets/icons/gallery.png')
                }
                style={styles.icon4}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setClick(!click);
              }}
              hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
              <Image
                source={
                  video && click
                    ? require('../assets/icons/video.png')
                    : require('../assets/icons/click.png')
                }
                style={styles.icon3}
              />
            </TouchableOpacity>
            <TouchableOpacity
              disabled={video && click ? true : false}
              hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
              <Image
                source={require('../assets/icons/changecamera.png')}
                style={[styles.icon4, {opacity: video && click ? 0.7 : 1}]}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.bottomtxt]}>
            <TouchableOpacity onPress={() => handlePhotoBtn()}>
              <Text
                style={
                  photoSelected ? {color: Color.white} : {color: Color.text}
                }>
                Photo{'   '}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleVideoBtn()}>
              <Text style={video ? {color: Color.white} : {color: Color.text}}>
                Video
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </RNCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Color.black},
  preview: {flex: 1},
  icon: {height: wp(3.5), width: wp(3.5), resizeMode: 'contain'},
  icon1: {height: wp(4.5), width: wp(4.5), resizeMode: 'contain'},
  header: {
    flexDirection: 'row',
    marginBottom: wp(5),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(6),
  },
  bottom: {
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    paddingHorizontal: wp(17),
  },
  icon3: {height: wp(15), width: wp(15), resizeMode: 'contain'},
  bottomtxt: {flexDirection: 'row', alignSelf: 'center'},
  icon4: {height: wp(10), width: wp(10), resizeMode: 'contain'},
  permissionText: {
    color: Color.white,
    fontSize: wp(5),
    textAlign: 'center',
    marginTop: wp(20),
  },
  button: {
    backgroundColor: Color.primary,
    padding: wp(3),
    marginTop: wp(4),
    borderRadius: wp(2),
    alignItems: 'center',
  },
  buttonText: {color: Color.white, fontSize: wp(4)},
});

export default Camera;
