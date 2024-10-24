import { View, Text } from 'react-native'
import React, { createContext, FC, PropsWithChildren } from 'react'

import Appwrite from './service'

type AppContextType = {
    appwrite: Appwrite;
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const AppwriteContext = createContext<AppContextType>({
    appwrite: new Appwrite(),
    isLoggedIn: false,
    setIsLoggedIn: () => { }
})

export const AppwriteProvider: FC<PropsWithChildren> = ({ children }) => {
    return (
        <View>
            <Text>AppwriteContext</Text>
        </View>
    )
}

export default AppwriteContext