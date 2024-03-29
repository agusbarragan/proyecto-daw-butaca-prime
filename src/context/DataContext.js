import { useState } from "react";
import { createContext } from "react";
import { useFetch } from "../hooks/useFetch";


export const DataContext = createContext();   // createContext metodo de react

    // Con DataProvider se proporciona datos a los componentes hijos
    // lo que permite acceder a los datos

    export const DataProvider = ({ children }) => { //recibe el atributo children

    //Creamos los estados que queremos que vean/compartan los componentes

    const [query, setQuery] = useState("Breaking Bad");
    const { error, data } = useFetch(`&s=${query}`); // useFetch hace una solicitud de datos a la api

    return (
        // permite que los componentes que usen DataContext accedan a estas propiedades
        <DataContext.Provider value={{ setQuery, error, data }}>  
            { children }
        </DataContext.Provider>
    )
}