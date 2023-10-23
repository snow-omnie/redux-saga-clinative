import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NativeStackParamList } from '../../redux/types';
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch } from '../../redux/store';
import { fetchPost } from '../../redux/actions/action';

export type Props = NativeStackScreenProps<NativeStackParamList, 'Home', 'MyStack'>;


const HomeScreen = ({ navigation }: Props): JSX.Element => {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={{ alignItems: "center", justifyContent: "center", backgroundColor: "#eee", marginTop: 20 }}>
                <Text onPress={() => navigation.navigate("Posts")}>Check posts here </Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen