import React, { createContext, FC, PropsWithChildren, useEffect, useState } from 'react'

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

const appwriteInstance = new Appwrite();

export const AppwriteProvider: FC<PropsWithChildren> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        console.log("AppwriteProvider - isLoggedIn changed:", isLoggedIn);
    }, [isLoggedIn]);

    const defaultValue = {
        appwrite: appwriteInstance,
        isLoggedIn,
        setIsLoggedIn
    }

    return (
        <AppwriteContext.Provider value={defaultValue}>
            {children}
        </AppwriteContext.Provider>
    )
}

export default AppwriteContext