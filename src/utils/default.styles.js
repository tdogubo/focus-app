import { Platform, StyleSheet } from "react-native";
import colors from "./colors";

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === "ios" ? colors.pink : "#fff",
    // alignItems: "center",
    // gap: 20,
    justifyContent: "center",
  },
  text: {
    color: colors.white,
  },
  focusContainer: {
    flex: 0.5,
    flexDirection: "row",
    width:"100%",
    // overflow:"scroll" ,
    // gap: 3,
    marginTop: 30,
    // width: 450,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "blue",
  },
  buttonContainer: {
    flex: 8,
    flexDirection: "row",
    gap: 50,
    // justifyContent: "flex-start",
    // alignItems: "flex-start",
    backgroundColor: "red",
  },
});
