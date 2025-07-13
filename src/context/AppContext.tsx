import { createContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

interface AppContextType {
    purchasedItems: number,
    setPurchasedItems: Dispatch<SetStateAction<number>>
}

export const AppContext = createContext({} as AppContextType);

export default function AppContextProvider ({children}: {children: ReactNode}) {
    const [purchasedItems, setPurchasedItems] = useState(0);
    return (
        <AppContext.Provider
            value={{
                purchasedItems,
                setPurchasedItems
            }}
        >
            {
                children
            }
        </AppContext.Provider>
    )
}