import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../theme'
import CustomButton from '../components/CustomButton'
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Login</Text>
            <CustomButton label="Login" style={styles.loginButton} onPress={() => navigation.navigate("Posts")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background
    },
    heading: {
        color: COLORS.primary_purple,
        paddingHorizontal: 80,
        paddingVertical: 100,
        fontSize: 25,
        fontWeight: '800'
    },
    loginButton: {
        backgroundColor: COLORS.primary_purple,
        color: COLORS.white
    }
})
export default LoginScreen