import React, { useState } from 'react';
import { Alert, SafeAreaView, Text } from 'react-native';
import Button from '../Components/Button';
import Input from '../Components/Input';

const HomeScreen = ({navigation}) => {
    const [userName, setUserName] = useState(null);
    const [userSurname, setUserSurname] = useState(null);
    const [userAge, setUserAge] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const [userPhoneNumber, setUserPhoneNumber] = useState(null);
    const [userAddress, setUserAddress] = useState(null);

    const handleSubmit = () => {
        if ( !userName || !userSurname|| !userAge|| !userEmail|| !userPhoneNumber|| !userAddress){
            Alert.alert('Tantuni Fitness Salonu',   'Bilgiler Boş Bırakılamaz');
            return;
        }
        const user = {
            userName,
            userSurname,
            userAge,
            userEmail,
            userPhoneNumber,
            userAddress,
        };
        navigation.navigate('MemberResultScreen', {user});
    };



    return (
        <SafeAreaView>
            <Input
                label="Adınız"
                placeholder="Adınız"
                onChangeText={setUserName}
            />
            <Input
                label="Soyadınız"
                placeholder="Soyadınız"
                onChangeText={setUserSurname}
            />
            <Input
                label="Yaşınız"
                placeholder="Yaşınız"
                onChangeText={setUserAge}
            />
            <Input
                label="Email"
                placeholder="Email"
                onChangeText={setUserEmail}
            />
            <Input
                label="Telefon Numaranız"
                placeholder="Telefon Numaranız"
                onChangeText={setUserPhoneNumber}
            />
            <Input
                label="Adresiniz"
                placeholder="Adresiniz"
                onChangeText={setUserAddress}
            />
            <Button text="Üye Kaydı Tamamlandı." onPress={handleSubmit} />
        </SafeAreaView>
    );
};

export default HomeScreen;