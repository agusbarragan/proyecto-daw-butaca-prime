import React from 'react';
import DefaultImage from "../../src/NoImage.png";
import { Link } from 'react-router-dom';

function ItemMovie(props) {
    const { id, title, type, year, poster } = props;

    let image = poster === "N/A" ? DefaultImage : poster;


    return (
        <Link to={`/movies/${id}/${title}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>  {/**Link que lleva a la pelicula con su id en la barra del navegador */}
            <div>
                <article>
                    <div className="item-movie" style={{ backgroundImage: `url(${image})` }}>  {/**Muestra la imagen de la pelicula en la pagina principal */}
                        <div className="info">
                            <h4>{title}</h4> 
                            <p className='row-info'><span>{type}</span><span>{year}</span></p> {/**Aqui muestra si es peli o serie y el año */}
                        </div>
                    </div>
                </article>
            </div>
        </Link>
    );
};

export default ItemMovie;