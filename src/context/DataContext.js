import { useState } from "react";
import { createContext } from "react";
import { useFetch } from "../hooks/useFetch";

export const DataContext = createContext();   // createContext metodo de react

export const DataProvider = ({ children }) => { //recibe el atributo children

    //Creamos los estados que queremos que vean/compartan los componentes

    const [query, setQuery] = useState("Breaking Bad");
    const {isLoading, error, data} = useFetch(`&s=${query}`);

    return (
        <DataContext.Provider value={{ setQuery, isLoading, error, data }}>
            { children }
        </DataContext.Provider>
    )
}