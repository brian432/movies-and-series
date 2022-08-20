import { createContext} from "react";
import { useLocation } from "react-router-dom";

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
    const { pathname } = useLocation()
    const series = pathname.split("/")[1]

    return (
        <GlobalContext.Provider value={{
            series
        }}>
            {children}
        </GlobalContext.Provider>
    )
}