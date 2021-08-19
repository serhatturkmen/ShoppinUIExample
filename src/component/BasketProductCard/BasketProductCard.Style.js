import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  main: {
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    marginVertical: 5,
    marginHorizontal: 20,
    height: 145,
  },
  viewLeft: { flex: 0.6, justifyContent: "center", borderRadius: 20,},
  image: { flex: 0.6, borderRadius: 10 },

  viewContent: { flex: 1,justifyContent:"center",padding:5 },
  titleText: { fontSize: 20, fontWeight: "bold" },
  priceText: { fontSize: 16, fontWeight: "300" },

  viewRight: { flex: 0.2, alignItems:"center",justifyContent:"center" },
  viewRightBounce: {
    alignItems:"center",
    justifyContent: "center",
    height: 30,
    width: 30,
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 20,
    margin:5
  },
});

export default styles;
