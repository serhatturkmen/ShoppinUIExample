import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
} from "react-native";
import styles from "./HomeScreen.Styles";
import { data } from "../../data";
import { MaterialIcons } from "@expo/vector-icons";
import ProductCard from "../../component/ProductCard";

export default function HomeScreen({ navigation, route }) {
  const [SearchText, setSearchText] = useState("");
  const basket = data.basket;
  const products = data.product;
  return (
    <SafeAreaView style={styles.main}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerTitle}>Do your shopping online</Text>
          <Text style={styles.headerText}>find the best choices for you</Text>
        </View>
        <TouchableOpacity
          style={styles.headerRight}
          onPress={() => {
            navigation.navigate("BasketScreen", {
              basket: basket,
              product: data.product,
            });
          }}
        >
          <MaterialIcons name={"shopping-cart"} size={24} color={"#FFFFFF"} />
          {basket.length > 0 && (
            <View style={styles.basketBadges}>
              <Text style={styles.basketBadgesText}>{basket.length}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBarView}>
        <MaterialIcons
          style={styles.searchBarViewIcon}
          name={"search"}
          color={"grey"}
          size={26}
        />
        <TextInput placeholder={"Search..."} style={styles.searchBarInput} />
      </View>

      {/* Content View */}
      <View style={styles.content}>
        <FlatList
          numColumns={2}
          data={data.product}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          renderItem={({ item, index }) => {
            return (
              <ProductCard
                product={item}
                navigation={navigation}
                basket={basket}
                products={products}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}
