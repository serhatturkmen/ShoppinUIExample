import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "./ProductDetailScreen.Style";
import { Fontisto, Ionicons, MaterialIcons } from "@expo/vector-icons";

const ProductDetailScreen = ({ navigation, route }) => {
  const [selected, setSelected] = useState(0);
  const product = route.params.product;

  return (
    <SafeAreaView style={{ ...styles.main, backgroundColor: product.bgcolor }}>
      {/* Header View */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name={"chevron-back-outline"} size={24} color={"#000000"} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("BasketScreen", {
              basket: route.params.basket,
              product: route.params.products,
            });
          }}
        >
          <MaterialIcons name={"shopping-cart"} size={24} color={"#000000"} />
          {route.params.basket.length > 0 && (
            <View style={styles.BasketBadgesView}>
              <Text>{route.params.basket.length}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      {/* Image View */}
      <View style={styles.imageView}>
        <Image
          resizeMode={"contain"}
          style={styles.image}
          source={{ uri: product.image }}
        />
      </View>

      {/* Content View */}
      <View style={styles.contentView}>
        <View style={styles.contentHeaderView}>
          <View style={styles.sizeView}>
            {product.size.map((item) => {
              return (
                <TouchableOpacity
                  key={item.optionId.toString()}
                  onPress={() => {
                    setSelected(item.optionId);
                  }}
                  style={{
                    ...styles.sizeButton,
                    backgroundColor:
                      selected == item.optionId ? "#B3BCC0" : "#EBEFF1",
                  }}
                >
                  <Text>{item.optionName}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <Text style={styles.priceText}>{product.price}$</Text>
        </View>

        <Text style={styles.contentText}>{product.content}</Text>
        <View style={styles.footerView}>
          <TouchableOpacity style={styles.footerViewSaveButton}>
            <Fontisto name={"bookmark-alt"} size={24} color={"#B4BEC5"} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerViewAddButton}>
            <Text style={styles.footerViewAddButtonText}>ADD TO CARD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;
