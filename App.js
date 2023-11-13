import { StatusBar } from "expo-status-bar";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import colors from "./src/utils/colors";
import { defaultStyles } from "./src/utils/default.styles";
import { Focus } from "./src/features/focus/Focus";
import { RoundedButton } from "./src/components/RoundedButton";

export default function App() {
  return (
    <SafeAreaView style={defaultStyles.container}>
      <StatusBar style="auto" />
      <View style={defaultStyles.focusContainer}>
        <Focus />
        <RoundedButton title="+" size={40}/>
      </View>
      <View style={defaultStyles.buttonContainer}>
        <RoundedButton title="hg" size={40} />
        <RoundedButton title="hg" size={40} />
      </View>
    </SafeAreaView>
  );
}

