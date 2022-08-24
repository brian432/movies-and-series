import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
    const [firstPathName, setFirstPathName] = useState()
    const { pathname } = useLocation()
    const route = pathname.split("/")[1]
    
    useEffect(() => {
        route !== firstPathName  && setFirstPathName(route)
    }, [route])

    return (
        <GlobalContext.Provider value={{
            firstPathName
        }}>
            {children}
        </GlobalContext.Provider>
    )
}