import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, FlatList } from "react-native";

export default function SV() {
    const [dados, setDados] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const request = async () => {
            const req = await fetch(
                `https://api.hgbrasil.com/weather?woeid=451401&array_limit=10&fields=only_results,temp,city_name,forecast,max,min,date&key=a3460caf`
            );
            const json = await req.json();


            setDados(json.forecast);

        }

        request();

        setLoading(false)
    }, []);

    if (loading) {
        return (
            <ActivityIndicator size="large" color="#FFF" />
        )
    }
    else if (!loading) {
        return (
            <View>
                <View>
                    <FlatList
                        data={dados}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.tempo}>
                                    <Text style={styles.txttemp}>Data: {item.date}</Text>
                                    <Text style={styles.txttempo}>Max: {item.max}</Text>
                                    <Text style={styles.txttempo}>Min: {item.min}</Text>
                                </View>
                            );
                        }}

                    />
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    txttemp:{
        marginTop: 15,
        fontSize: 23,
        fontWeight: "bold",
        textAlign: "center",
        color: '#ef476f',
    },

    txttempo:{
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        color: '#ff8fab',
    }
})
