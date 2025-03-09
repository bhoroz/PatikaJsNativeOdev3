import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import Button from '../Components/Button';

function Welcome({ navigation }) {

    function goToMemberSign() {
        navigation.navigate('MemberSign'); // Üye kaydı sayfasına yönlendirme işlemi yapılır.
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Tantuni Fitness Salonu</Text>
            <Button text="Üye Kaydı Oluştur" onPress={goToMemberSign} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        textAlign: 'center',
        color: '#333',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default Welcome;