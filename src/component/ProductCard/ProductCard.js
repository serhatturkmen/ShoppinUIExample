import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import styles from "./ProductCard.Style";

const ProductCard = (props) => {
  const navigation = props.navigation;
  const product = props.product;
  return (
    <TouchableOpacity
      style={{ ...styles.main, backgroundColor: product.bgcolor }}
      onPress={() => {
        navigation.navigate("ProductDetail", {
          product: product,
          basket: props.basket,
          products: props.products,
        });
      }}
    >
      <View style={styles.headView}>
        <Text style={styles.titleText}>{product.productName}</Text>
        <Text style={styles.priceText}>{product.price}$</Text>
      </View>
      <Image
        resizeMode={"contain"}
        source={{ uri: product.image }}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

export default ProductCard;
