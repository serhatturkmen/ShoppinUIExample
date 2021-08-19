import { Entypo } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import styles from "./BasketScreen.Style";
import BasketProductCard from "../../component/BasketProductCard";

const BasketScreen = ({ navigation, route }) => {
  const basket = route.params.basket;
  const products = route.params.product;
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your Bag</Text>
        <Text style={styles.headerCountText}>{basket.length} Items</Text>
      </View>
      <View style={styles.content}>
        <FlatList
          data={basket}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <BasketProductCard
              item={item}
              product={products.find(
                (element) => element.productId === item.productid
              )}
            />
          )}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.footerButtonText}>
            CHECKOUT{"  "}
            <Entypo name={"chevron-thin-right"} color={"#000000"} size={18} />
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
