import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { focusStyles } from "./focus.style";

export const Focus = () => {
  const [focus, setFocus] = useState("Holder");
  return (
    // <View style={focusStyles.container}>
      <View style={focusStyles.inputContainer}>
        <TextInput
          style={focusStyles.input}
          placeholder="What do you have in mind?"
          onChangeText={(text) => {
            // console.log(text);
          }}
        />
      </View>
    // </View>
  );
};
