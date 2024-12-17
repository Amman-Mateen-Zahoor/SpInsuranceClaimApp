import { useNavigation } from '@react-navigation/native'
import { useEffect, useLayoutEffect } from 'react'
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import Animated, { SlideInDown, SlideInLeft, SlideInRight, SlideInUp } from 'react-native-reanimated'


const Splash = ({navigation}) => {
  useLayoutEffect(()=>{
    StatusBar.setHidden(true)
  },[])

  // const navigation =  useNavigation()
useEffect(()=>{
  setTimeout(()=>{
    navigation.replace('getStarted')
  },1200)
},[])


  return (
    <View style={styles.container}>
      <Image
      source = {require("../assets/images/splash-background.png")}
      style={styles.backgroundImage}
      />
      <View style={{flexDirection:'row'}} >
     <Animated.Image
     source={require('../assets/images/icon.png')}
    //  entering={SlideInDown.delay(200).duration(1000)}
    entering={SlideInRight.duration(1000)}
    // style={{backgroundColor:'green'}}

     />
     <Animated.Image 
     source={require('../assets/images/icon-text.png')}
     entering={SlideInUp.delay(100).duration(1000)}
    //  style={{backgroundColor:'green'}}
     />
     </View>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#002d72",
    justifyContent:'center',
    alignItems:'center'
  },
  backgroundImage:{
    position:'absolute',
    top:0,
    left:0,
    opacity:0.5
  },
})