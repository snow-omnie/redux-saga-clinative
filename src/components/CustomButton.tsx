import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../theme'

const CustomButton = (props: any) => {
    return (
        <TouchableOpacity style={{ ...styles.container, ...props.style }} onPress={props.onPress}>
            <Text style={{ ...styles.text, color: props.style.color || COLORS.black }}>{props.label}</Text>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    container: { borderRadius: 25 },
    text: {
        fontSize: 20,
        paddingVertical: 10,
        textAlign: 'center'

    }
})
export default CustomButton