import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
    {
        name: "sample Bar",
        image_url:
            "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        reviews: 1244,
        rating: 4.5,
        time: "10-25 • min",
    },
    {
        name: "sample Cafe",
        image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        reviews: 1244,
        rating: 3.7,
        time: "30-45 • min",
    },
    {
        name: "sample Restaurant",
        image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        reviews: 700,
        rating: 4.9,
        time: "20-35 • min",
    },
];

export default function RestaurantItems(props) {
    return (
        <>
            {props.restaurantData.map((restaurant, index) => (
                <TouchableOpacity
                    key={index}
                    activeOpacity={1}
                    style={{ marginBottom: 30 }}
                >
                    <View
                        style={{
                            marginTop: 10,
                            padding: 15,
                            backgroundColor: "white",
                        }}
                    >
                        <RestaurantImage image={restaurant.image_url} />
                        <RestaurantInfo
                            name={restaurant.name}
                            time={restaurant.time}
                            rating={restaurant.rating}
                        />
                    </View>
                </TouchableOpacity>
            ))}
        </>
    );
}

const RestaurantImage = (props) => (
    <>
        <Image
            source={{
                uri: props.image,
            }}
            style={{ width: "100%", height: 180 }}
        />
        <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
            <MaterialCommunityIcons
                name="heart-outline"
                size={25}
                color="#fff"
            />
        </TouchableOpacity>
    </>
);

const RestaurantInfo = (props) => (
    <View
        style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
        }}
    >
        <View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                {props.name}
            </Text>
            <Text style={{ fontSize: 13, color: "gray" }}>{props.time}</Text>
        </View>
        <View
            style={{
                backgroundColor: "#eee",
                height: 30,
                width: 30,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 15,
            }}
        >
            <Text>{props.rating}</Text>
        </View>
    </View>
);
