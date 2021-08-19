import { StyleSheet, Dimensions } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const statusBarHeight = getStatusBarHeight();
const height = Dimensions.get("window").height - statusBarHeight;
const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  main: {
    height: height,
    width: width,
    marginTop: statusBarHeight,
  },
  header: {
    flex: 0.3,
    width: width,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  BasketBadgesView: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "#EBF0F1",
    width: 15,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  imageView: {
    flex: 3,
    width: width,
    alignItems: "center",
  },
  image: {
    height: height / 2,
    width: width - 60,
  },
  contentView: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    flex: 2,
    backgroundColor: "#FFFFFF",
  },
  contentHeaderView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sizeView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  sizeButton: {
    marginRight: 10,
    borderColor: "#000000",
    borderWidth: 1,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  priceText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  contentText: {
    flex: 2,
    color: "#B4BEC5",
    fontSize: 20,
  },
  footerView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  footerViewSaveButton: {
    backgroundColor: "#FFFFFF",
    borderColor: "#B4BEC5",
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    marginRight: 5,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  footerViewAddButton: {
    backgroundColor: "#B4BEC5",
    alignItems: "center",
    justifyContent: "center",
    flex: 5,
    height: 50,
    margin: 5,
    borderRadius: 10,
  },
  footerViewAddButtonText: {
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default styles;
