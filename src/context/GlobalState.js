import { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

const initialState = {
    serie: false
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const cambiarASeries = () =>{
        dispatch({
            type:"CAMBIAR_A_SERIES",
        })
    }
    const cambiarAPeliculas = () =>{
        dispatch({
            type:"CAMBIAR_A_PELICULAS",
        })
    }

    return (
        <GlobalContext.Provider value={{ 
            serie: state.serie,
            cambiarASeries,
            cambiarAPeliculas
        }}>
            {children}
        </GlobalContext.Provider>
    )
}