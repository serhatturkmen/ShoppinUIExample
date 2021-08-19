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
  /* Header View */
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    flex: 0.7,
    alignItems: "center",
  },
  headerLeft: {
    flexDirection: "column",
  },
  headerTitle: { fontWeight: "bold", fontSize: 24 },
  headerText: { color: "#ADB1B0", fontSize: 16 },
  headerRight: {
    height: 50,
    width: 50,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
  },
  basketBadges: {
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    height: 20,
    width: 20,
    position: "absolute",
    top: -3,
    right: -3,
  },
  basketBadgesText: {
    color: "#FFFFFF",
  },
  /* Search View */
  searchBarView: {
    backgroundColor: "#EBF0F1",
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    width: width - 20,
    marginHorizontal: 10,
    borderRadius: 5,
    padding: 5,
    marginBottom:10,
    flexDirection: "row",
  },
  searchBarInput: { height: 45, flex: 3, fontSize: 16 },
  searchBarViewIcon: { flex: 0.2, padding: 5 },

  /* Content */
  content: {
    flex: 4,
  },
});

export default styles;
