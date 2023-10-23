import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'
import { COLORS } from '../theme'

const ProfileScreen = () => {
    return (
        <View>
            <Text>ProfileScreen</Text>
            <CustomButton label="Check" style={styles.loginButton} onPress={() => navigation.navigate("Posts")} />

        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    loginButton: {
        backgroundColor: COLORS.primary_purple,
        color: COLORS.white,
        marginTop: 100,
        width: 100
    }
})