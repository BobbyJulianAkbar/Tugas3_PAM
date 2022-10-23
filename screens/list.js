import { StatusBar } from "expo-status-bar";
import Constants from 'expo-constants';
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, FlatList, TouchableHighlight } from "react-native";
import { Appbar, Card } from "react-native-paper";

export const List = ({route, navigation}) => {
    const data = [
        {
            id: 1,
            bandara_kode_keberangkatan: "KNO",
            bandara_kode_tujuan: "CGK",
            jadwal_id: 21102022,
            maskapai_id: "Palung Air",
        },
        {
            id: 2,
            bandara_kode_keberangkatan: "CGK",
            bandara_kode_tujuan: "TKG",
            jadwal_id: 20102022,
            maskapai_id: "Udin Air",
        },
        {
            id: 3,
            bandara_kode_keberangkatan: "TKG",
            bandara_kode_tujuan: "BTH",
            jadwal_id: 23102022,
            maskapai_id: "Balam Air",
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto"/>
            <Appbar.Header style={styles.header}>
                <Appbar.BackAction onPress={() => navigation.navigate('Home')}/>
                <Appbar.Content title="JADWAL PESAWAT" subtitle={"Hasil Pencarian Penerbangan"} style={styles.titlestyle}/>
                <Appbar.Action icon="account"/>
            </Appbar.Header>
            <View style={styles.result}>
                <Text style={styles.text}>{route.params.paramKey}</Text>
            </View>
                <FlatList nestedScrollEnabled data={data}
                    renderItem={({item}) => (
                        <Card style={styles.cardBorder}>
                            <Card.Content style={styles.cardSize}>
                                <Text style={styles.item}>{item.bandara_kode_keberangkatan}</Text>
                                <Text style={styles.item}>{item.bandara_kode_tujuan}</Text>
                                <Text style={styles.item}>{item.jadwal_id}</Text>
                                <Text style={styles.item}>{item.maskapai_id}</Text>
                            </Card.Content>
                        </Card>
                    )}
                />  
            <View style={styles.footer}>
                <Text>
                    Copyright Bobby Julian Akbar-120140082
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    header: {
        color: "#4cbb17"
    },
    titlestyle: {
        alignItems: "center",
    },
    result: {
        alignItems: "center",
    },
    container: {
        flex: 1,
        backgroundColor: "#4cbb17",
        paddingTop: Constants.statusBarHeight,
    },
    item: {
        padding: 20,
        fontSize: 15,
        marginTop: 5,
    },
    text: {
        fontSize: 17,
        color: "#ffffff",
    },
    cardBorder: {
        margin: 20,
        justifyContent: "center",
    },
    cardSize: {
        borderRadius: 10,
        width: "80%",
    },
    footer: {
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#bfbfbf"
    },
})