import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"

// screens
import Home from '../screens/Home'

export type AppStackParamList = {
    Home: undefined;
}


const Stack = createNativeStackNavigator<AppStackParamList>()

export const AppStack = () => {
    console.log("me chala");
    
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: "center",
                headerBackTitleVisible: false
            }}
        >
            <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
    )
}