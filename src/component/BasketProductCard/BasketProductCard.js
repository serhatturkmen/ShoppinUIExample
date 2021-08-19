import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./BasketProductCard.Style";

const BasketProductFeed = (props) => {
  const product = props.product;
  const optionName = product.size.find(
    (element) => element.optionId === props.item.size
  ).optionName;

  return (
    <View style={styles.main}>
      <View style={{ ...styles.viewLeft, backgroundColor: product.bgcolor }}>
        <Image
          source={{ uri: product.image }}
          resizeMode={"contain"}
          style={{ ...styles.image, backgroundColor: product.bgcolor }}
        />
      </View>
      <View style={styles.viewContent}>
        <Text style={{ ...styles.titleText, fontWeight: "normal" }}>
          {product.productName}
        </Text>
        <Text style={styles.titleText}>{product.price}.00$</Text>
      </View>
      <View style={styles.viewRight}>
        <View style={styles.viewRightBounce}>
          <Text>{props.item.piece}x</Text>
        </View>
        <View style={{ ...styles.viewRightBounce, backgroundColor: "#ADB1B0" }}>
          <Text>{optionName}</Text>
        </View>
      </View>
    </View>
  );
};

export default BasketProductFeed;
