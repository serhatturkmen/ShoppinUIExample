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
  /* Header */
  header: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  headerCountText: {
    fontSize: 14,
    color: "#ADB1B0",
  },

  /* Content */
  content: {
    flex: 4,
  },

  /* Footer */
  footer: {
    flex: 0.5,
  },
  footerButton: {
    flex: 1,
    borderColor: "#000000",
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    width: width - 40,
    alignItems: "center",
    justifyContent: "center",
  },
  footerButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;
