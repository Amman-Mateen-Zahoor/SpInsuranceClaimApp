// import React, { useRef } from "react";
// import { TextInput, View } from "react-native";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import { wp } from "../utils/utils";

// const GitTestScreen = () => {
//   const secondInputRef = useRef(null);

//   return (
//     <KeyboardAwareScrollView>
//       <View style={{marginTop:wp(10)}}>
//         <TextInput
//           placeholder="First Input"
//           returnKeyType="next"
//           onSubmitEditing={() => secondInputRef.current?.focus()}
//         />
//         <TextInput
//           ref={secondInputRef}
//           placeholder="Second Input"
//           returnKeyType="done"
//         />
//       </View>
//     </KeyboardAwareScrollView>
//   );
// };

// export default GitTestScreen;

import React, { useRef } from "react";
import { TextInput, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { wp } from "../utils/utils";

const GitTestScreen = () => {
  const secondInputRef = useRef(null);

  return (
    <KeyboardAwareScrollView 
      keyboardShouldPersistTaps="handled"
      extraScrollHeight={20} // Helps in better keyboard adjustment
    >
      <View style={{ marginTop: wp(20), padding: wp(5) }}>
        <TextInput
          placeholder="First Input"
          returnKeyType="next"
          blurOnSubmit={false} // Prevents keyboard from closing
          onSubmitEditing={() => secondInputRef.current?.focus()} // Moves focus
          style={{
            height: 50,
            borderWidth: 1,
            marginBottom: 10,
            paddingHorizontal: 10,
          }}
        />
        <TextInput
          ref={secondInputRef} // Second input reference
          placeholder="Second Input"
          returnKeyType="done"
          style={{
            height: 50,
            borderWidth: 1,
            paddingHorizontal: 10,
          }}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default GitTestScreen;
