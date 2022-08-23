import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalState'

import img from '../../no-img.jpg'

export const Movie = ({
    movie: {
        title,
        original_name,
        poster_path,
        vote_average,
        id,
        media_type
    }, 
    movie
}) => {
    const navigate = useNavigate()

    const { firstPathName } = useContext(GlobalContext)

    const handleClick = () => {
        if (media_type !== undefined) {
            navigate(`${media_type === "tv" ? `/series/details/${id}` : `/details/${id}`}`)
        } else {
            navigate(`${firstPathName === "series" ? "/series" : ""}/details/${id}`)
        }
    }

    const IMG_API = "https://image.tmdb.org/t/p/w500"
    return (
        <div className="container-movie" onClick={handleClick}>
            <div className="div-img">
                <img src={poster_path ? `${IMG_API}${poster_path}` : img} alt={title} />
            </div>
            <div className='container-dates'>
                <h3 className="title">{title || original_name}</h3>
                <span>{vote_average?.toFixed(1)}</span>
            </div>
        </div>
    )
}
