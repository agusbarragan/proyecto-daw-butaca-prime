import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import ItemMovie from "./ItemMovie";

const Movies = () => {
    const { data } = useContext(DataContext);

    return (
        <div className="movies-content">   
        {/**Si data es null muestra una cadena vacia, sino muestrame los datos de la pelicula */}
            {
                data !== null ?
                data.filter(item => item.Year === "2023").map(filteredItem => (
                    <ItemMovie
                        key={filteredItem.imdbID}
                        id={filteredItem.imdbID}
                        type={filteredItem.Type} 
                        title={filteredItem.Title}
                        poster={filteredItem.Poster}                      
                        year={filteredItem.Year}                        
                    />
                ))
                    : ''
            }            
            <>
                {/*<button onClick={addSeats} type="button"></button>*/}
            </>
        </div>
    );
}

export default Movies;