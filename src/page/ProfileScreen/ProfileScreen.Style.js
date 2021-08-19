import { StyleSheet, Dimensions } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const statusBarHeight = getStatusBarHeight();
const height = Dimensions.get("window").height - statusBarHeight;
const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  main: {
    marginTop: statusBarHeight,
    height: height,
    width: width,
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});

export default styles;
