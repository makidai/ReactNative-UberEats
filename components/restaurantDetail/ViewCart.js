import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useSelector } from "react-redux";

export default function ViewCart({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const { items, restaurantName } = useSelector(
        (state) => state.cartReducer.selectedItems
    );

    const total = items
        .map((item) => Number(item.price.replace("$", "")))
        .reduce((prev, curr) => prev + curr, 0);

    const totalUSD = total.toLocaleString("en", {
        style: "currency",
        currency: "USD",
    });

    const checkoutModalContent = () => {
        return (
            <TouchableOpacity
                style={{
                    marginTop: 20,
                    backgroundColor: "black",
                    alignItems: "center",
                    padding: 13,
                    borderRadius: 30,
                    width: 300,
                    position: "relative",
                }}

            >
                <Text style={{ color: "white", fontSize: 20 }}>Checkout</Text>
                <Text
                    style={{
                        position: "absolute",
                        right: 20,
                        color: "white",
                        fontSize: 15,
                        top: 17,
                    }}
                >
                    {total ? totalUSD : ""}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <>
            <Modal
                animationType="slide"
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                {checkoutModalContent()}
            </Modal>
            {total ? (
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        position: "absolute",
                        bottom: 10,
                        zIndex: 999,
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            width: "100%",
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                marginTop: 20,
                                backgroundColor: "black",
                                flexDirection: "row",
                                justifyContent: "center",
                                padding: 15,
                                borderRadius: 30,
                                width: 300,
                                position: "relative",
                            }}
                        >
                            <FontAwesome5
                                name="shopping-cart"
                                size={25}
                                style={{
                                    marginBottom: 3,
                                    alignSelf: "center",
                                    color: "white",
                                    marginRight: 30,
                                }}
                            />
                            <Text
                                style={{
                                    color: "white",
                                    fontSize: 20,
                                    marginRight: 30,
                                }}
                            >
                                View Cart
                            </Text>
                            <Text style={{ color: "white", fontSize: 20 }}>
                                {totalUSD}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <></>
            )}
        </>
    );
}
