import { useNavigate } from 'react-router-dom'

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
    const navigate = useNavigate()
    
    const handleClick = () => {
        navigate(`/details/${id}`)
    }

    const IMG_API = "https://image.tmdb.org/t/p/w500"
    return (
        <div className="container-movie" onClick={handleClick}>
            <div className="div-img">
                <img src={poster_path ?`${IMG_API}${poster_path}`: img} alt={title} />
            </div>
            <div className='container-dates'>
                <h3 className="title">{title?title:original_name}</h3>
                <span>{vote_average}</span>
            </div>
        </div>
    )
}