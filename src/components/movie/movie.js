import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { FavsContext } from '../../context/FavsContext'

import img from '../../no-img.jpg'

export const Movie = ({
    movie: {
        title,
        original_name,
        poster_path,
        vote_average,
        id
    }
}) => {
    const { addOrRemoveFavs, favs } = useContext(FavsContext)

    const handleFavorites = () => {
        const favs = { title, original_name, poster_path, vote_average, id };
        addOrRemoveFavs(favs)
    }

    const favsActive = favs.find(movie => { return movie.id === id })

    const IMG_API = "https://image.tmdb.org/t/p/w500"
    return (
        <div className="container-movie">
            <button className={favsActive ? 'fav-active favourite-btn' : 'favourite-btn'} onClick={handleFavorites}>
                <span className="material-symbols-outlined">
                    favorite
                </span>
            </button>
            <Link to={`${title ? "" : "/series"}/details/${id}`}> {/*La propiedad 'title' solo viene en peliculas*/}
                <div className="div-img">
                    <img src={poster_path ? `${IMG_API}${poster_path}` : img} alt={title} />
                </div>
                <div className='container-dates'>
                    <h3 className="title">{title || original_name}</h3>
                    <span>{vote_average?.toFixed(1)}</span>
                </div>
            </Link>
        </div>
    )
}
