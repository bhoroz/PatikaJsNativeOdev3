import React from "react";
import { TextInput, Text, View } from "react-native";
import styles from "./InputStyles.js";

function Input({ label, placeholder, onChangeText }) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text> {/* label'i Text içinde kullanın */}
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                />
            </View>
        </View>
    );
}

export default Input;