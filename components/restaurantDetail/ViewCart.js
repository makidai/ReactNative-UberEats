import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function ViewCart({ navigation }) {
    const total = 100;

    return (
        <>
            {total ? (
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        position: "absolute",
                        bottom: 50,
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
                                $100
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
