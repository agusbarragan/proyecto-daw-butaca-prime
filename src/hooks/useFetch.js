import { useEffect, useState } from "react";
const API = `https://www.omdbapi.com/?apikey=cbd20872`;   //he tenido que añadir "s" al final de http porque al no ser "seguro" daba problemas al alojar la web en firebase hosting
                                                          // y no funcionaba el buscador de peliculas al usarlo.
export const useFetch = (params) => {
    //const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);

    //useFetch es un hook en el que se realiza una solicitud a la API y obtenemos datos de las peliculas

    const fetchMovie = (url) => {
        //setIsLoading(true);
        fetch(url)
        //la respuesta a la api la convertimos en json
            .then(response => response.json())
            .then(responseJson => {
                if (responseJson.Response === "True") {
                    //los resultados de búsqueda se asignan a la propiedad Search y finalmente estos resultados se almacenan en data a traves de setData
                    setData(responseJson.Search || responseJson);
                    setError(false);
                }else{
                    setError(true);
                }
                //setIsLoading(false);
                //console.log("data", responseJson);
            })
            .catch(error =>  console.log(error));
    }

        useEffect(() => {
          fetchMovie(`${API}${params}`);             //Esta función se ejecuta cada vez que el componente se renderiza
        }, [params])                                 // la matriz asegura de que la función se ejecute solo cuando el valor de params cambie
        
        return { error, data };
}
