// // import { StyleSheet, Text, View } from 'react-native'
// // import React, { useState } from 'react'
// // import TestCodes from './TestCodes'

// // const ParentTestCodes = () => {
// //   const [message,setMessage]=useState()
// //   const handleChildData = (data) =>{
// // setMessage(data)
// //   }
// //   return (
// //     <View><Text>kkkkkk{message}</Text>
// //     <TestCodes SendDataToParent={handleChildData} /></View>
// //   )
// // }

// // export default ParentTestCodes

// // const styles = StyleSheet.create({})

// import React, { useState } from 'react';
// import { View, Text, Button } from 'react-native';
// import TestCodes from './TestCodes';

// const ParentTestCodes = () => {
//   sayHello();
// function sayHello() {
//   console.log("Hello!");
// }
// console.log(b); // ReferenceError
// let b ;
// console.log(b)

// function outer() {
//   let counter = 0; // Variable in outer function
//   return function inner() {
//     counter++; // Accesses `counter` from outer function
//     console.log(counter);
//   };
// }

// const increment = outer(); // `increment` is a closure
// increment(); // Outputs: 1
// increment(); // Outputs: 2

//   const [message, setMessage] = useState('');

//   // Callback function to receive data from the child
//   const handleDataFromChild = (data) => {
//     setMessage(data); // Update parent state with child data
//   };

//   return (
//     <View>
//       <Text>Message from Child: {message}</Text>
//       <TestCodes sendDataToParent={handleDataFromChild} />
//     </View>
//   );
// };

// export default ParentTestCodes;

import {findNodeHandle, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useRef} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const ParentTestCodes = () => {
  const scrollRef = useRef();
  const focusInput = e => {
    scrollRef.current.scrollToFocusedInput(findNodeHandle( e.target));
    // console.log("first",e.target)
  };
  return (
    <KeyboardAwareScrollView
      ref={scrollRef}
      extraScrollHeight={10}
      enableOnAndroid>
      {/* <Text>ParentTestCodes</Text> */}
      <TextInput placeholder="mmmmmmm" onFocus={focusInput} />
      <TextInput placeholder="mmmmmmm" onFocus={focusInput} />
      <TextInput placeholder="mmmmmmm" onFocus={focusInput} />
      <TextInput placeholder="mmmmmmm" onFocus={focusInput} />
      <TextInput placeholder="mmmmmmm" onFocus={focusInput} />
      <TextInput placeholder="mmmmmmm" onFocus={focusInput} />
      <TextInput placeholder="mmmmmmm" onFocus={focusInput} />
      <TextInput placeholder="mmmmmmm" onFocus={focusInput} />
      <TextInput placeholder="mmmmmmm" onFocus={focusInput} />
      <TextInput placeholder="mmmmmmm" onFocus={focusInput} />
      <TextInput placeholder="mmmmmmm" onFocus={focusInput} />
      <TextInput placeholder="mmmmmmm" onFocus={focusInput} />
      <TextInput placeholder="mmmmmmm" onFocus={focusInput} />
      <TextInput placeholder="mmmmmmm" onFocus={focusInput} />
      <TextInput placeholder="mmmmmmm" onFocus={focusInput} />
      <TextInput placeholder="mmmmmmm" onFocus={focusInput} />
      <TextInput placeholder="mmmmmmm" onFocus={focusInput} />
      <TextInput placeholder="mmmmmmm" onFocus={focusInput} />
      <TextInput placeholder="mmmmmmm" onFocus={focusInput} />
      <TextInput placeholder="mmmmmmm" onFocus={focusInput} />
      <TextInput placeholder="mmmmmmm" onFocus={focusInput} />
      <TextInput placeholder="mmmmmmm" onFocus={focusInput} />
      <TextInput placeholder="mmmmmmm" onFocus={focusInput} />
    </KeyboardAwareScrollView>
  );
};

export default ParentTestCodes;

const styles = StyleSheet.create({});
