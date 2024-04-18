import { createContext, useState } from "react";
import { UserProviderType, sideContex, } from "../../types";

const defaultState = {
    sidebar:false,
    setSideBar: (sidebar: boolean) => { }
} as sideContex
export const sideContext = createContext(defaultState);


export const UserProvider = ({children}: UserProviderType) => {
    const [sidebar, setSideBar] = useState<boolean>(false)

    return (
        <sideContext.Provider value={{sidebar, setSideBar}}>
            {children}
        </sideContext.Provider>
    )
}