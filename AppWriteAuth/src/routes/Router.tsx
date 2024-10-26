import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import AppwriteContext from '../appwrite/AppwriteContext'
import Loading from '../components/Loading'

// Routes
import { AppStack } from './AppStack'
import { AuthStack } from './AuthStack'

export const Router = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { appwrite, isLoggedIn, setIsLoggedIn } = useContext(AppwriteContext);

    useEffect(() => {
        (
            async () => {
                try {
                    const response = await appwrite.getCurrentUser();
                    if (response) {
                        setIsLoggedIn(true);
                        setIsLoading(false);
                    }
                } catch (error) {
                    setIsLoading(false);
                    setIsLoggedIn(false);
                }
            }
        )()
    }, [appwrite, setIsLoggedIn])

    return (
        <NavigationContainer>
            {
                isLoading ? <Loading /> : isLoggedIn ? <AppStack /> : <AuthStack />
            }
        </NavigationContainer>
    )
}