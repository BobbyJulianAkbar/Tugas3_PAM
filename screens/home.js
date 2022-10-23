import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Constants from 'expo-constants';
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { Appbar, Button, Card, TextInput } from "react-native-paper";

export const Home = () => {
    const navigation = useNavigation();
    const [bandara_kode_keberangkatan, setKode_a] = useState('');
    const [bandara_kode_tujuan, setKode_b] = useState('');
    const [jadwal_id, setDate] = useState('');
    return (
        <SafeAreaView style={styles.content}>
            <StatusBar style="auto"/>
            <Appbar.Header style={styles.header}>
                <Appbar.Action icon="menu"/>
                <Appbar.Content title="JADWAL PESAWAT" style={styles.apptitle}/>
                <Appbar.Action icon="account"/>
            </Appbar.Header>
            <View style={styles.search}>
                <Card style={styles.cardBorder}>
                    <Card.Content>
                        <Text style={styles.text}>Lokasi Keberangkatan</Text>
                        <TextInput keyboardType="default" placeholder="Masukkan Lokasi Keberangkatan" value={bandara_kode_keberangkatan} onChangeText={(kode_a) => setKode_a(kode_a)}></TextInput>
                        <Text style={styles.text}>Lokasi Tujuan</Text>
                        <TextInput keyboardType="default" placeholder="Masukkan Lokasi Tujuan" value={bandara_kode_tujuan} onChangeText={(kode_b) => setKode_b(kode_b)}></TextInput>
                        <Text style={styles.text}>Tanggal Keberangkatan</Text>
                        <TextInput keyboardType="number-pad" maxLength={8} placeholder="(DDMMYY)" value={jadwal_id} onChangeText={(date) => setDate(date)}></TextInput>
                        <Button mode="contained" style={styles.cardButton} onPress={() => navigation.navigate('List', {
                            paramKey: bandara_kode_keberangkatan || bandara_kode_tujuan || jadwal_id
                        })}>Cari</Button>
                    </Card.Content>
                </Card>
            </View>
            <View style={styles.footer}>
                <Text>
                    Copyright Bobby Julian Akbar-120140082
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create ({
    header: {
        color: "#4cbb17"
    },
    apptitle: {
        alignItems: "center",
    },
    content: {
        display: "flex",
        backgroundColor: "#4cbb17",
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    search: {
        flex: 1,
        paddingVertical: 120,
        justifyContent: "center",
        alignItems: "center",
    },
    footer: {
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#bfbfbf"
    },
    cardBorder: {
        borderRadius: 10,
        width: "80%",
    },
    cardButton: {
        margin: 20,
        marginLeft: 0,
        marginRight: 0
    },
    text: {
        fontSize: 17,
        margin: 10,
    },
    input: {
        borderRadius: 10
    }
})