import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements";
import Abount from "../components/restaurantDetail/Abount";
import MenuItems from "../components/restaurantDetail/MenuItems";

export default function RestaurantDetail() {
    return (
        <View>
            <Abount />
            <Divider width={1.8} style={{ marginVertical: 20 }} />
            <MenuItems />
            <Text></Text>
        </View>
    );
}
