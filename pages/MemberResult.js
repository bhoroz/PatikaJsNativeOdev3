import  React from 'react';
import { SafeAreaView, StyleSheet, Text} from 'react-native'; //

function MemberResult({route}){
    const {user} = route.params;

    return (
        <SafeAreaView style={styles.LastCard}>
            <Text style={styles.message} >Üye Bilgileri:</Text>
                <Text style={styles.label} >Üye Adı:  {user.userName}</Text>
                <Text style={styles.label} >Üye Soyadı: {user.userSurname}</Text>
                <Text style={styles.label} >Üye Yaşı: {user.userAge}</Text>
                <Text style={styles.label} >Üye Email: {user.userEmail}</Text>
                <Text style={styles.label} >Üye Telefon Numarası: {user.userPhoneNumber}</Text>
                <Text style={styles.label} >Üye Adresi: {user.userAddress}</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    LastCard: {
        justifyContent: 'center',
        margin: 10,
        marginHorizontal: 20,
        padding: 20,
        backgroundColor: '#ededede',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    message: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
    },
});

export default MemberResult;