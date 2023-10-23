import { View, Text, Alert } from 'react-native'
import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import PostScreen from './screens/PostScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingScreen from './screens/SettingScreen';
import { BottomStackParamList, NativeStackParamList } from '../redux/types';
// import NetInfo, { useNetInfo } from "@react-native-community/netinfo";



const Stack = createNativeStackNavigator<NativeStackParamList>();
const BottomTab = createBottomTabNavigator<BottomStackParamList>();
import { Icon } from '@rneui/themed';
import WebScreen from './screens/WebScreen';
import LoginScreen from './screens/LoginScreen';
const BottomTabs = () => {
    return (
        <BottomTab.Navigator screenOptions={{
            headerShown: false
        }}>
            <BottomTab.Screen name='Post' component={PostScreen} options={
                {
                    tabBarIcon: ({ }) => (
                        <Icon
                            name='sc-telegram'
                            type='evilicon'
                            color='#517fa4'
                        />
                    )
                }
            } />
            <BottomTab.Screen name='Profile' component={ProfileScreen} />
            <BottomTab.Screen name='Setting' component={SettingScreen} />
        </BottomTab.Navigator>
    )
}


const StackNavigators = () => {
    // const netInfo = useNetInfo();

    // useEffect(() => {


    //     const unsubscribe = NetInfo.addEventListener(state => {
    //         console.log("Connection type", state.type);
    //         console.log("Is connected?", state.isConnected);
    //         Alert.alert("Connection type", state.type)
    //     });

    //     // Unsubscribe
    //     unsubscribe();

    // }, [netInfo])
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={LoginScreen}
                options={{
                    statusBarHidden: true,
                    headerShown: false
                }}
            />
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Posts' component={BottomTabs} />
            <Stack.Screen name='WebScreen' component={WebScreen} />
            {/* <Stack.Screen name='WebScreen' component={WebScreen} /> */}
        </Stack.Navigator>
    )
}

export default StackNavigators