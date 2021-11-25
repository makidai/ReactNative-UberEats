import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomTabs from "../components/BottomTabs";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import RestaurantItems, {
    localRestaurants,
} from "../components/RestaurantItems";
import SearchBar from "../components/SearchBar";

const YELP_API_KEY =
    "rl91GOhPiGgQVae1-VmG4WEDSFZLVscz_ULBIwThoYkIjYGb7SdiUD3vNeeEG3N3hxGWZv3dUwntWhmKZZT4yVL_YwSDs4oIXIatQ8bRFkU_rOjeAntTW00dJI2cYXYx";

export default function Home() {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState("Hounancho, suginami-ku, Tokyo, JP");
    const [activeTab, setActiveTab] = useState("Delivery");

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };
        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) =>
                setRestaurantData(
                    json.businesses.filter((business) =>
                        business.transactions.includes(activeTab.toLowerCase())
                    )
                )
            );
    };

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab]);

    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
            <View style={{ backgroundColor: "white", padding: 15 }}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantData={restaurantData} />
            </ScrollView>
            <Divider width={1} />
            <BottomTabs />
        </SafeAreaView>
    );
}
