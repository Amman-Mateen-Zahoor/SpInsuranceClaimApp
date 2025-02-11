// // import React, {useLayoutEffect, useState} from 'react';
// // import {
// //   StyleSheet,
// //   View,
// //   TouchableOpacity,
// //   Text,
// //   Image,
// //   StatusBar,
// // } from 'react-native';
// // import {RNCamera} from 'react-native-camera';
// // import {wp} from '../utils/utils';
// // import {useSafeAreaInsets} from 'react-native-safe-area-context';
// // import {Color} from '../constants/style';
// // import { useNavigation } from '@react-navigation/native';

// // const Camera = () => {
// //   useLayoutEffect(() => {
// //     StatusBar.setHidden(true);
// //   }, []);
// // const [photoSelected,setPhotoSelected] =useState(true)
// // const [video,setVideo] =useState(false)
// // const [click,setClick]=useState(false)
// // const[pause,setPause]=useState(false)
// // const [flash,setFlash]=useState(true)
// //   const {top, bottom} = useSafeAreaInsets();
// //   const handleVideoBtn = () =>{
// //     setPhotoSelected(false)
// //     setVideo(true)
// //   }
// //   const handlePhotoBtn = () =>{
// //     setPhotoSelected(true)
// //     setVideo(false)
// //     setClick(false)
// //   }
// //   const navigation =useNavigation()
// //   return (
// //     <View style={styles.container}>
// //       <View style={[styles.header, {marginTop: wp(3) + top}]}>
// //         <TouchableOpacity
// //             onPress={()=>{navigation.goBack()}}
// //           hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
// //           <Image
// //             source={require('../assets/icons/leftarrow.png')}
// //             style={styles.icon}
// //           />
// //         </TouchableOpacity>
// //         <TouchableOpacity
// //             onPress={()=>{setFlash(!flash)}}
// //           hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
// //           <Image
// //             source={flash?require('../assets/icons/flash.png'): require('../assets/icons/unflash.png')}
// //             style={styles.icon1}
// //           />
// //         </TouchableOpacity>
// //       </View>
// //       <RNCamera style={styles.preview} type={RNCamera.Constants.Type.front}>
// //         <View style={[styles.bottom, {paddingVertical: wp(4) + bottom}]}>
// //           <View
// //             style={{
// //               flexDirection: 'row',
// //               justifyContent: 'space-between',
// //               alignItems: 'center',
// //               marginBottom: wp(2),
// //             }}>
// //             <TouchableOpacity
// //                 onPress={()=>{setPause(!pause)}}
// //               hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
// //            <Image
// //     source={
// //       video && click
// //         ? pause
// //           ? require('../assets/icons/pause.png')
// //           : require('../assets/icons/resume.png')
// //         : require('../assets/icons/gallery.png')
// //     }
// //     style={styles.icon4}
// //   />
// //             </TouchableOpacity>

// //             <TouchableOpacity
// //                 onPress={()=>{setClick(!click)}}
// //               hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
// //               <Image
// //                 source=
// //                     {(video && click)?require('../assets/icons/video.png'):require('../assets/icons/click.png')}

// //                 style={styles.icon3}
// //               />
// //             </TouchableOpacity>
// //             <TouchableOpacity disabled={(video && click)?true:false}
// //               //   onPress={()=>{navigation.goBack()}}
// //               hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
// //               <Image
// //                 source={require('../assets/icons/changecamera.png')}
// //                 style={[styles.icon4,{opacity:(video && click )?0.7:1}]}
// //               />
// //             </TouchableOpacity>
// //           </View>
// //           <View style={[styles.bottomtxt]}>
// //             <TouchableOpacity onPress={()=>handlePhotoBtn()}>
// //               <Text style={photoSelected?{color: Color.white}:{color: Color.text}}>Photo{'   '}</Text>
// //             </TouchableOpacity>
// //             <TouchableOpacity onPress={()=>handleVideoBtn()}>
// //               <Text style={video?{color: Color.white}:{color: Color.text}}>Video</Text>
// //             </TouchableOpacity>
// //           </View>
// //         </View>
// //       </RNCamera>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {flex: 1, backgroundColor: Color.black},
// //   preview: {flex: 1},

// //   icon: {
// //     height: wp(3.5),
// //     width: wp(3.5),
// //     resizeMode: 'contain',
// //   },
// //   icon1: {
// //     height: wp(4.5),
// //     width: wp(4.5),
// //     resizeMode: 'contain',
// //   },
// //   header: {
// //     flexDirection: 'row',
// //     marginBottom: wp(5),
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     paddingHorizontal: wp(6),
// //   },
// //   bottom: {
// //     backgroundColor: 'black',
// //     position: 'absolute',
// //     bottom: 0,
// //     right: 0,
// //     left: 0,
// //     paddingHorizontal: wp(17),
// //   },
// //   icon3: {
// //     height: wp(15),
// //     width: wp(15),
// //     resizeMode: 'contain',
// //   },
// //   bottomtxt: {
// //     flexDirection: 'row',
// //     alignSelf: 'center',
// //   },
// //   icon4: {
// //     height: wp(10),
// //     width: wp(10),
// //     resizeMode: 'contain',
// //   },
// // });

// // export default Camera;
// import React, {useLayoutEffect, useState, useEffect} from 'react';
// import {
//   StyleSheet,
//   View,
//   TouchableOpacity,
//   Text,
//   Image,
//   StatusBar,
//   Alert,
//   Platform,
//   Linking,
// } from 'react-native';
// import {RNCamera} from 'react-native-camera';
// import {wp} from '../utils/utils';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';
// import {Color} from '../constants/style';
// import {useNavigation} from '@react-navigation/native';
// import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
// import { useSelector } from 'react-redux';
// import Localization from '../constants/localization';

// const Camera = () => {
//   useLayoutEffect(() => {
//     StatusBar.setHidden(true);
//   }, []);
//  const {lang} =useSelector(state=>state.language)
//   const [photoSelected, setPhotoSelected] = useState(true);
//   const [video, setVideo] = useState(false);
//   const [click, setClick] = useState(false);
//   const [pause, setPause] = useState(false);
//   const [flash, setFlash] = useState(true);
//   const [hasPermission, setHasPermission] = useState(false);

//   const {top, bottom} = useSafeAreaInsets();
//   const navigation = useNavigation();

//   // Function to check camera permission
//   const checkCameraPermission = async () => {
//     const permissionStatus = await check(PERMISSIONS.ANDROID.CAMERA);

//     if (permissionStatus === RESULTS.GRANTED) {
//       setHasPermission(true);
//     } else {
//       setHasPermission(false);
//     }
//   };
//   useEffect(() => {
//     checkCameraPermission();
//   }, []);

//   const handleVideoBtn = () => {
//     setPhotoSelected(false);
//     setVideo(true);
//   };

//   const handlePhotoBtn = () => {
//     setPhotoSelected(true);
//     setVideo(false);
//     setClick(false);
//   };

//   if (!hasPermission) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.permissionText}>{Localization.camera_not_authorized[lang]}</Text>
//         <TouchableOpacity
//           onPress={() => Linking.openSettings()}
//           style={styles.button}>
//           <Text style={styles.buttonText}>{Localization.go_to_Settings[lang]}</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <View style={[styles.header, {marginTop: wp(3) + top}]}>
//         <TouchableOpacity
//           onPress={() => {
//             navigation.goBack();
//           }}
//           hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
//           <Image
//             source={require('../assets/icons/leftarrow.png')}
//             style={styles.icon}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => {
//             setFlash(!flash);
//           }}
//           hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
//           <Image
//             source={
//               flash
//                 ? require('../assets/icons/flash.png')
//                 : require('../assets/icons/unflash.png')
//             }
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
//               onPress={() => {
//                 setPause(!pause);
//               }}
//               hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
//               <Image
//                 source={
//                   video && click
//                     ? pause
//                       ? require('../assets/icons/pause.png')
//                       : require('../assets/icons/resume.png')
//                     : require('../assets/icons/gallery.png')
//                 }
//                 style={styles.icon4}
//               />
//             </TouchableOpacity>

//             <TouchableOpacity
//               onPress={() => {
//                 setClick(!click);
//               }}
//               hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
//               <Image
//                 source={
//                   video && click
//                     ? require('../assets/icons/video.png')
//                     : require('../assets/icons/click.png')
//                 }
//                 style={styles.icon3}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity
//               disabled={video && click ? true : false}
//               hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
//               <Image
//                 source={require('../assets/icons/changecamera.png')}
//                 style={[styles.icon4, {opacity: video && click ? 0.7 : 1}]}
//               />
//             </TouchableOpacity>
//           </View>
//           <View style={[styles.bottomtxt]}>
//             <TouchableOpacity onPress={() => handlePhotoBtn()}>
//               <Text
//                 style={
//                   photoSelected ? {color: Color.white} : {color: Color.text}
//                 }>
//                 Photo{'   '}
//               </Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => handleVideoBtn()}>
//               <Text style={video ? {color: Color.white} : {color: Color.text}}>
//                 Video
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </RNCamera>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {flex: 1, backgroundColor: Color.black,justifyContent:'center',alignItems:"center"},
//   preview: {flex: 1},
//   icon: {height: wp(3.5), width: wp(3.5), resizeMode: 'contain'},
//   icon1: {height: wp(4.5), width: wp(4.5), resizeMode: 'contain'},
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
//   icon3: {height: wp(15), width: wp(15), resizeMode: 'contain'},
//   bottomtxt: {flexDirection: 'row', alignSelf: 'center'},
//   icon4: {height: wp(10), width: wp(10), resizeMode: 'contain'},
//   permissionText: {
//     color: Color.white,
//     fontSize: wp(5),
//     textAlign: 'center',
//     marginTop: wp(20),
//   },
//   button: {
//     backgroundColor: Color.primary,
//     padding: wp(3),
//     marginTop: wp(4),
//     borderRadius: wp(2),
//     alignItems: 'center',
//   },
//   buttonText: {color: Color.white, fontSize: wp(4)},
// });

// export default Camera;

// import React, {useEffect, useLayoutEffect, useState} from 'react';
// import {
//   StyleSheet,
//   View,
//   TouchableOpacity,
//   Text,
//   Image,
//   StatusBar,
//   Linking,
// } from 'react-native';
// import {RNCamera} from 'react-native-camera';
// import {wp} from '../utils/utils';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';
// import {Color} from '../constants/style';
// import { useNavigation } from '@react-navigation/native';
// import Localization from '../constants/localization';
// import { useSelector } from 'react-redux';
// const Camera = () => {
//   useLayoutEffect(() => {
//     StatusBar.setHidden(true);
//   }, []);
//   const {lang} = useSelector(state=>state.language)
// const [photoSelected,setPhotoSelected] =useState(true)
// const [video,setVideo] =useState(false)
// const [click,setClick]=useState(false)
// const[pause,setPause]=useState(false)
// const [flash,setFlash]=useState(true)
//   const [hasPermission, setHasPermission] = useState(false);
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
//     // Function to check camera permission
//   const checkCameraPermission = async () => {
//     const permissionStatus = await check(PERMISSIONS.ANDROID.CAMERA);

//     if (permissionStatus === RESULTS.GRANTED) {
//       setHasPermission(true);
//     } else {
//       setHasPermission(false);
//     }
//   };
//   useEffect(() => {
//     checkCameraPermission();
//   }, []);
//   if (!hasPermission) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.permissionText}>{Localization.camera_not_authorized[lang]}</Text>
//         <TouchableOpacity
//           onPress={() => Linking.openSettings()}
//           style={styles.button}>
//           <Text style={styles.buttonText}>{Localization.go_to_Settings[lang]}</Text>
//         </TouchableOpacity>
//       </View>
//     );
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
//   // container: {flex: 1, backgroundColor: Color.black},
//   container: {flex: 1, backgroundColor: Color.black,justifyContent:'center',alignItems:"center"},
//     permissionText: {
//     color: Color.white,
//     fontSize: wp(5),
//     textAlign: 'center',
//     marginTop: wp(20),
//   },
//     button: {
//     backgroundColor: Color.primary,
//     padding: wp(3),
//     marginTop: wp(4),
//     borderRadius: wp(2),
//     alignItems: 'center',
//   },
//   buttonText: {color: Color.white, fontSize: wp(4)},
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

import React, { useEffect, useLayoutEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  StatusBar,
  Linking,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { wp } from '../utils/utils';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Color } from '../constants/style';
import { useNavigation } from '@react-navigation/native';
import Localization from '../constants/localization';
import { useSelector } from 'react-redux';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const Camera = () => {
  const navigation = useNavigation();
  const { lang } = useSelector(state => state.language);
  const { top, bottom } = useSafeAreaInsets();
  
  const [hasPermission, setHasPermission] = useState(null);
  const [photoSelected, setPhotoSelected] = useState(true);
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [flashEnabled, setFlashEnabled] = useState(false);

  useLayoutEffect(() => {
    StatusBar.setHidden(true);
  }, []);

  useEffect(() => {
    const checkCameraPermission = async () => {
      const permissionStatus = await check(PERMISSIONS.ANDROID.CAMERA);
      if (permissionStatus === RESULTS.GRANTED) {
        setHasPermission(true);
      } else {
        const requestStatus = await request(PERMISSIONS.ANDROID.CAMERA);
        setHasPermission(requestStatus === RESULTS.GRANTED);
      }
    };
    checkCameraPermission();
  }, [hasPermission]);

  if (hasPermission === null) {
    return <View style={styles.containerSetting}><Text>Checking permissions...</Text></View>;
  }

  if (!hasPermission) {
    return (
      <View style={styles.containerSetting}>
        <Text style={styles.permissionText}>{Localization.camera_not_authorized[lang]}</Text>
        <TouchableOpacity onPress={() => Linking.openSettings()} style={styles.button}>
          <Text style={styles.buttonText}>{Localization.go_to_Settings[lang]}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={[styles.header, { marginTop: wp(3) + top }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={hitSlopConfig}>
          <Image source={require('../assets/icons/leftarrow.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFlashEnabled(!flashEnabled)} hitSlop={hitSlopConfig}>
          <Image
            source={flashEnabled ? require('../assets/icons/flash.png') : require('../assets/icons/unflash.png')}
            style={styles.icon1}
          />
        </TouchableOpacity>
      </View>
      <RNCamera style={styles.preview} type={RNCamera.Constants.Type.front}>
        <View style={[styles.bottom, { paddingVertical: wp(4) + bottom }]}>
          <View style={styles.controlsRow}>
            <TouchableOpacity onPress={() => setIsPaused(!isPaused)} hitSlop={hitSlopConfig}>
              <Image
                source={
                  isRecording
                    ? isPaused
                      ? require('../assets/icons/resume.png')
                      : require('../assets/icons/pause.png')
                    : require('../assets/icons/gallery.png')
                }
                style={styles.icon4}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsRecording(!isRecording)} hitSlop={hitSlopConfig}>
              <Image
                source={isRecording ? require('../assets/icons/video.png') : require('../assets/icons/click.png')}
                style={styles.icon3}
              />
            </TouchableOpacity>
            <TouchableOpacity disabled={isRecording} hitSlop={hitSlopConfig}>
              <Image
                source={require('../assets/icons/changecamera.png')}
                style={[styles.icon4, { opacity: isRecording ? 0.7 : 1 }]}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.bottomtxt}>
            <TouchableOpacity onPress={() => { setPhotoSelected(true); setIsRecording(false); }}>
              <Text style={photoSelected ? styles.activeText : styles.inactiveText}>Photo{'   '}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setPhotoSelected(false); }}>
              <Text style={!photoSelected ? styles.activeText : styles.inactiveText}>Video</Text>
            </TouchableOpacity>
          </View>
        </View>
      </RNCamera>
    </View>
  );
};

const hitSlopConfig = { top: 10, bottom: 10, left: 10, right: 10 };

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Color.black},
  containerSetting: { flex: 1, backgroundColor: Color.black, justifyContent: 'center', alignItems: 'center' },
  permissionText: { color: Color.white, fontSize: wp(5), textAlign: 'center', marginTop: wp(20) },
  button: { backgroundColor: Color.primary, padding: wp(3), marginTop: wp(4), borderRadius: wp(2), alignItems: 'center' },
  buttonText: { color: Color.white, fontSize: wp(4) },
  preview: { flex: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: wp(6) },
  icon: { height: wp(3.5), width: wp(3.5), resizeMode: 'contain' },
  icon1: { height: wp(4.5), width: wp(4.5), resizeMode: 'contain' },
  bottom: { backgroundColor: 'black', position: 'absolute', bottom: 0, left: 0, right: 0, paddingHorizontal: wp(17) },
  controlsRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: wp(2) },
  icon3: { height: wp(15), width: wp(15), resizeMode: 'contain' },
  icon4: { height: wp(10), width: wp(10), resizeMode: 'contain' },
  bottomtxt: { flexDirection: 'row', alignSelf: 'center' },
  activeText: { color: Color.white },
  inactiveText: { color: Color.text },
});

export default Camera;
